import './App.css';
import Navbar from './components/navbar';
import ThreeDModelViewer from './components/ThreeDModelViewer';

function App() {
  return (
    <>
      <Navbar />
      <ThreeDModelViewer modelUrl="/MEVoxelArt.glb" />
    </>
  );
}

export default App;
