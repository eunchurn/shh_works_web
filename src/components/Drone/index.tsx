import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, ReactThreeFiber } from "react-three-fiber";
// import { Euler } from "three/src/math/Vector3";
import { Html } from "drei";
import { createUseStyles } from "react-jss";
import { isUndefined } from "lodash";

const useStyles = createUseStyles({
  content: {
    paddingTop: 10,
    transform: "translate3d(50%, 0, 0)",
    textAlign: "left",
    background: "white",
    color: "black",
    padding: "10px 15px",
    borderRadius: 5,
  },
});

interface PropType {
  time: number;
  // position: Vector3;
  position: [x: number, y: number, z: number];
}

function Dodecahedron({ time, ...props }: PropType) {
  const classes = useStyles();
  return (
    <mesh {...props}>
      <dodecahedronBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        roughness={0.75}
        // emissive="#404057"
        emissive={new THREE.Color(0x404057)}
      />
      {/* <Html scaleFactor={10}>
        <div className={classes.content}>
          Suspense <br />
          {time}ms
        </div>
      </Html> */}
    </mesh>
  );
}

function Content() {
  const ref = useRef<
    ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
  >();
  useFrame(() => {
    if (ref && ref.current && ref.current.rotation) {
      const {
        current: { rotation: euler },
      } = ref;
      if (euler) {
        const { x, y, z } = euler as THREE.Euler;
      }
      return (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01);
    }
  });
  return (
    <group ref={ref}>
      <Dodecahedron time={500} position={[-2, 0, 0]} />
      <Dodecahedron time={1000} position={[0, -2, -3]} />
      <Dodecahedron time={1500} position={[2, 0, 0]} />
      <Dodecahedron time={1800} position={[2, -2, 0]} />
    </group>
  );
}

export default function () {
  return (
    <Canvas
      concurrent
      style={{ background: "#0e0e0f", height: "100vh" }}
      camera={{ position: [0, 0, 7.5] }}
    >
      <pointLight color="indianred" />
      <pointLight position={[10, 10, -10]} color="orange" />
      <pointLight position={[-10, -10, 10]} color="lightblue" />
      <Content />
    </Canvas>
  );
}
