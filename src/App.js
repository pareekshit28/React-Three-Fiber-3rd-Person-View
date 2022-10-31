import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
// import { Model as Plane } from "./components/Plane";
import { Model as Player } from "./components/Player";
import { Model as Arcade } from "./components/Arcade";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 0, 0]} />
      <Suspense fallback={null}>
        {/* <Plane /> */}
        <Player scale={[3, 3, 3]} />
        <Arcade />
      </Suspense>
    </Canvas>
  );
}

export default App;
