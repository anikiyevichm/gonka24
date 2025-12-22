import React from 'react';
import { Background3D, Background3DOverrides } from '../ui/Background3D';
// @ts-ignore - leva might not have types installed or detected yet
import { useControls, folder } from 'leva';

export const ModelDebugger = () => {
  const { rotationX, rotationY, rotationZ, scale, radius, disableFloat } = useControls({
    Model: folder({
      rotationX: { value: Math.PI / 4, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationY: { value: Math.PI / 2, min: -Math.PI, max: Math.PI, step: 0.1 },
      rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
      scale: { value: 1, min: 0.1, max: 3, step: 0.1 },
      disableFloat: { value: true, label: 'Disable Float' },
    }),
    Camera: folder({
      radius: { value: 9, min: 1, max: 20, step: 0.1 },
    }),
  });

  const overrides: Background3DOverrides = {
    modelRotation: [rotationX, rotationY, rotationZ],
    modelScale: scale,
    cameraRadius: radius,
    disableFloat,
  };

  const codeSnippet = `
// Model Rotation: [${rotationX.toFixed(3)}, ${rotationY.toFixed(3)}, ${rotationZ.toFixed(3)}]
// Model Scale: ${scale}
// Camera Radius: ${radius}

/* Copy this to Background3D.tsx Model component: */
rotation={[${rotationX.toFixed(3)}, ${rotationY.toFixed(3)}, ${rotationZ.toFixed(3)}]}
scale={${scale}}

/* Copy this to Background3D.tsx CameraRig component: */
const radius = ${radius};
`;

  return (
    <>
      <Background3D overrides={overrides} />
      <div className="fixed bottom-4 left-4 z-50 p-4 bg-black/80 text-white rounded-lg font-mono text-xs whitespace-pre backdrop-blur-md border border-white/10">
        <h3 className="font-bold mb-2 text-primary">Current Settings</h3>
        {codeSnippet}
      </div>
    </>
  );
};

export default ModelDebugger;
