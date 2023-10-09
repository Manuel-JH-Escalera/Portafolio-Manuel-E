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

    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      url,
      (gltf) => {
        setModel(gltf.scene);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100} + '% loaded'`);
      },
      (error) => {
        console.log('An error happened:', error);
      },
    );
  }, [url]);

  return model ? <primitive object={model} /> : null;
};

type ThreeDModelViewerProps = {
  modelUrl: string;
};

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[0, 10, 5]} intensity={0.5} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModelViewer;
