import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    let isCancelled = false;
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      url,
      (gltf) => {
        if (!isCancelled) {
          setModel(gltf.scene);
        }
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100} % loaded`);
      },
      (error) => {
        console.log('An error happened:', error);
      },
    );

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return model ? <primitive object={model} position={[-0.9, 0, -0.4]} /> : null;
};

type ThreeDModelViewerProps = {
  modelUrl: string;
};

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [-5, 6, 5], fov: 75 }}>
      <ambientLight />
      <directionalLight position={[0, 10, 5]} intensity={0.7} />
      <React.Suspense fallback={null}>
        <Model url={modelUrl} />
      </React.Suspense>
      <OrbitControls target={[0, 0, 0]} autoRotate/>
    </Canvas>
  );
};

export default ThreeDModelViewer;
