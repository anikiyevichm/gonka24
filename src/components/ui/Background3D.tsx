import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { isMobile } from "react-device-detect";

// Select model based on device type
const MODEL_PATH = isMobile ? "/models/scene.glb" : "/models/scene4k.glb";



// Define animation configuration interface
export interface EntranceConfig {
  startRotationY?: number;
  startRotationX?: number;
  startZ?: number;
  damping?: number;
  pivotOffsetFactor?: number;
  enabled?: boolean;
  delay?: number;
}

// Define overrides interface
export interface Background3DOverrides {
  modelRotation?: [number, number, number];
  modelScale?: number;
  cameraRadius?: number;
  disableFloat?: boolean;
  entrance?: EntranceConfig;
  animationKey?: number;
}

export interface ModelProps {
  path: string;
  rotation?: [number, number, number];
  scale?: number;
  disableFloat?: boolean;
}

export function Model({ path, rotation, scale = 1, disableFloat = false }: ModelProps) {
  const { scene } = useGLTF(path);

  const content = (
    <primitive
      object={scene}
      scale={scale}
      rotation={rotation || [0.285, 0.871, 0.600]}
    />
  );

  if (disableFloat) {
    return content;
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      {content}
    </Float>
  );
}

export function EntranceAnimation({ children, config = {}, animationKey }: { children: React.ReactNode, config?: EntranceConfig, animationKey?: number }) {
  const pivotGroup = useRef<THREE.Group>(null);
  const contentGroup = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Default Config
  const finalConfig = {
    startRotationY: -3.142,
    startRotationX: -0.942,
    startZ: -20,
    damping: 1,
    pivotOffsetFactor: 0.5, // 0.5 = half height (top)
    enabled: true,
    delay: 500, // ms delay before starting
    ...config
  };

  const pivotY = viewport.height * (finalConfig.pivotOffsetFactor ?? 0.5);

  // Animation state refs
  const progress = useRef(0);
  const [active, setActive] = React.useState(false);

  // Reset progress when animationKey changes bounds
  React.useEffect(() => {
    progress.current = 0;
    setActive(false);

    const timer = setTimeout(() => {
      setActive(true);
    }, finalConfig.delay ?? 500);

    return () => clearTimeout(timer);
  }, [animationKey, finalConfig.delay]); // Re-run if key or delay changes

  useFrame((state, delta) => {
    if (!pivotGroup.current || !contentGroup.current) return;

    // If disabled, force progress to 1 (end state) immediately
    if (!finalConfig.enabled) {
      if (progress.current !== 1) {
        progress.current = 1;
        // Reset Pivot
        pivotGroup.current.position.y = pivotY;
        pivotGroup.current.rotation.x = 0;
        pivotGroup.current.rotation.y = 0;

        // Reset Content
        contentGroup.current.rotation.y = 0;
        contentGroup.current.position.z = 0;
      }
    } else {
      // Only start damping if active (delay passed)
      // If not active, target is 0 (stay at start)


      // Force progress to 0 if not active yet (to prevent any creep)
      if (!active) progress.current = 0;

      // Smoothly interpolate progress
      if (active) {
        progress.current = THREE.MathUtils.damp(progress.current, 1, finalConfig.damping ?? 0.5, delta);
      }
    }

    // Inverted progress (1 -> 0)
    const rev = 1 - progress.current;

    // Rotation & Position Logic

    // 1. Pivot Group (Handles Swing/Arc from Top)
    // Pivot is at [0, pivotY, 0].
    pivotGroup.current.position.y = pivotY;
    pivotGroup.current.position.x = 0;

    // Rotate X (Swing down) applies to the Pivot
    pivotGroup.current.rotation.x = (finalConfig.startRotationX ?? 0) * rev;

    // Note: We DO NOT rotate Y on the pivot anymore to avoid the "wide orbit".
    pivotGroup.current.rotation.y = 0;
    pivotGroup.current.position.z = 0;

    // 2. Content Group (Handles Local Spin & Z-depth)
    // Local Spin (Y-axis) -> Spinds around ITSELF, not the pivot.
    contentGroup.current.rotation.y = (finalConfig.startRotationY ?? 0) * rev;

    // Z-translation (Fly in distance)
    contentGroup.current.position.z = (finalConfig.startZ ?? 0) * rev;
  });

  return (
    <group ref={pivotGroup}>
      {/* 
        Pivot Group: Located at Top Center (0, pivotY, 0).
        Inner Group: Located at (0, -pivotY, 0) relative to Pivot.
        This places the Inner Group at (0, 0, 0) in World Space when rotations are 0.
      */}
      <group position={[0, -pivotY, 0]}>
        {/* Extra wrapper for local transformations (Spin, Z-fly) */}
        <group ref={contentGroup}>
          {children}
        </group>
      </group>
    </group>
  );
}

function CameraRig({ radius = 9 }: { radius?: number }) {
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

    // Use radius from props
    const r = radius;
    const angle = -currentProgress.current * Math.PI * 2;

    const x = Math.sin(angle) * r;
    const z = Math.cos(angle) * r;
    const y = 0;

    state.camera.position.set(x, y, z);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

interface Background3DProps {
  overrides?: Background3DOverrides;
}

export const Background3D = ({ overrides }: Background3DProps) => {
  return (
    // CSS-stabilization: 
    // 1. Convert to fixed top-0 left-0 w-full (remove inset-0)
    // 2. Use 100lvh to ensure container height ignores mobile browser UI
    <div
      className="fixed top-0 left-0 w-full z-0 bg-background"
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

          {/* <EntranceAnimation config={overrides?.entrance} animationKey={overrides?.animationKey}>
            <Model
              path={MODEL_PATH}
              rotation={overrides?.modelRotation}
              scale={overrides?.modelScale}
              disableFloat={overrides?.disableFloat}
            />
          </EntranceAnimation> */}
          <Environment preset="city" />
          <CameraRig radius={overrides?.cameraRadius} />
        </Suspense>
      </Canvas>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[8px] pointer-events-none" />
    </div>
  );
};

// Preload the specific model for the current device
useGLTF.preload(MODEL_PATH);
