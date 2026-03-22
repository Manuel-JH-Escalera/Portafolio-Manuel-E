import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import useLoaderStore from '../contexts/loader/loaderStore';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const { isLoading, setIsLoading } = useLoaderStore();

  useEffect(() => {
    let isCancelled = false;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      url,
      (gltf) => {
        if (!isCancelled) {
          const scene = gltf.scene;
          scene.traverse((node) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;
              const mat = mesh.material as THREE.MeshStandardMaterial;
              if (mat.map) {
                mat.map.anisotropy = 16;
                mat.needsUpdate = true;
              }
            }
          });
          setModel(scene);
          setIsLoading(false);
        }
      },
      (xhr) => {
        if (!isLoading) setIsLoading(true);
      },
      (error) => {
        console.log('An error happened:', error);
      },
    );

    return () => {
      isCancelled = true;
      dracoLoader.dispose();
    };
  }, [url]);

  return model ? <primitive object={model} position={[-0.9, 0.5, -0.4]} /> : null;
};

type ThreeDModelViewerProps = {
  modelUrl: string;
};

const ThreeDModelViewer: React.FC<ThreeDModelViewerProps> = ({ modelUrl }) => {
  return (
    <div id='model-canvas' style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [-5, 6, 5], fov: 60 }}>
        <ambientLight />
        <Suspense fallback={<div className='loader'></div>}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls target={[0, 0, 0]} autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDModelViewer;
