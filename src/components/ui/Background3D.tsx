import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

// Select model based on device type
const MODEL_PATH = isMobile ? "/models/scene.glb" : "/models/scene4k.glb";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive object={scene} scale={1} />
    </Float>
  );
}

function CameraRig() {
  const { size } = useThree();
  const currentProgress = useRef(0);
  const scrollHeight = useRef(0);

  // Store the stable height, updating only on horizontal resize
  const fixedHeight = useRef(size.height);
  const lastWidth = useRef(size.width);

  // 1. Handle Window/Canvas Resizes (Smart logic via R3F useThree)
  React.useLayoutEffect(() => {
    // Only update the fixed height if width changes (e.g. rotation)
    // This prevents jitter from mobile address bar toggling (vertical resize)
    if (Math.abs(size.width - lastWidth.current) > 1) {
      lastWidth.current = size.width;
      fixedHeight.current = size.height;
    }

    // Recalculate scrollHeight with the stable fixedHeight
    // Note: We access body directly as useThree doesn't track DOM body size
    scrollHeight.current = document.body.scrollHeight - fixedHeight.current;
  }, [size.width, size.height]);

  // 2. Handle Body Content Resizes (Dynamic content)
  React.useLayoutEffect(() => {
    const updateScrollHeight = () => {
      // Always recalculate using the currently stored fixedHeight
      scrollHeight.current = document.body.scrollHeight - fixedHeight.current;
    };

    const observer = new ResizeObserver(updateScrollHeight);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    const scrollY = window.scrollY;
    // Use cached, stable height
    const height = scrollHeight.current;

    // Prevent division by zero
    const rawProgress = height > 0 ? Math.min(Math.max(scrollY / height, 0), 1) : 0;

    // 1. Ease-in-out the target (S-curve)
    const targetProgress = THREE.MathUtils.smoothstep(rawProgress, 0, 1);

    // 2. Damp towards target (Physics-like smoothing)
    currentProgress.current = THREE.MathUtils.damp(currentProgress.current, targetProgress, 1.5, delta);

    const radius = 9;
    const angle = currentProgress.current * Math.PI * 2;

    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const y = 0;

    state.camera.position.set(x, y, z);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export const Background3D = () => {
  return (
    // CSS-stabilization: 
    // 1. Convert to fixed top-0 left-0 w-full (remove inset-0)
    // 2. Use 100lvh to ensure container height ignores mobile browser UI
    <div
      className="fixed top-0 left-0 w-full z-[-1] bg-black"
      style={{ height: '100lvh' }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        // Smart Resize: The container assumes 100lvh, preventing resize on vertical UI shift.
        // We can explicitly disable scroll-based resize behavior if needed, but R3F defaults are usually fine
        // provided the container is stable.
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />

          <Model path={MODEL_PATH} />
          <Environment preset="city" />
          <CameraRig />
        </Suspense>
      </Canvas>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[3px] pointer-events-none" />
    </div>
  );
};

// Preload the specific model for the current device
useGLTF.preload(MODEL_PATH);
