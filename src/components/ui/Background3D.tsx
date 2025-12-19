import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

// Select model based on device type
const MODEL_PATH = isMobile ? "/models/scene.glb" : "/models/scene4k.glb";

function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);

  // Center and scale model if needed (RTX 3090 tends to be large or small depending on export)
  // We can auto-scale or just rely on manual adjustments. 
  // Let's assume standard scale for now, but usually they need slight adjustment.
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive object={scene} scale={1} />
    </Float>
  );
}

function CameraRig() {
  const currentProgress = useRef(0);

  useFrame((state, delta) => {
    const scrollY = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const rawProgress = Math.min(Math.max(scrollY / height, 0), 1);

    // 1. Ease-in-out the target (S-curve)
    const targetProgress = THREE.MathUtils.smoothstep(rawProgress, 0, 1);

    // 2. Damp towards target (Physics-like smoothing)
    // Lambda 1.5 = very smooth/heavy. 
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
    <div className="fixed inset-0 z-[-1] bg-black">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />

          <Model path={MODEL_PATH} />
          <Environment preset="city" /> {/* Nice reflections */}
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
