import React from "react";

import { Setup } from "./Setup";

import { Icosahedron, Html } from "@react-three/drei";
// import { Html } from "../../src/Html";
import { useTurntable } from "./useTurntable";

export default function () {
  return (
    <Setup cameraPosition={[-20, 20, -20]}>
      <HTMLScene />
    </Setup>
  );
}

function HTMLScene() {
  const ref = useTurntable();
  return (
    <group ref={ref}>
      <Icosahedron args={[2, 2]} position={[3, 6, 4]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          First
        </Html>
      </Icosahedron>

      <Icosahedron args={[2, 2]} position={[10, 0, 10]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          Second
        </Html>
      </Icosahedron>

      <Icosahedron args={[2, 2]} position={[-10, 0, -10]}>
        <meshBasicMaterial attach="material" color="hotpink" wireframe />
        <Html scaleFactor={30} className="html-story-block">
          Third
        </Html>
      </Icosahedron>
    </group>
  );
}
