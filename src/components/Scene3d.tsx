import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "../component3d/Experience";
import Interface from "../component3d/Interface";

const Scene3d: React.FC = () => {
  return (
    <>
      <Canvas camera={{ position: [1, 0.5, 17.5], fov: 30 }} shadows>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
};

export default Scene3d;
