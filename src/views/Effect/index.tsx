import React from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { createUseStyles } from "react-jss";
import img from "./C0003T01.JPG";
import { useTextureLoader, MeshDistortMaterial, Html } from "drei";
// const img = require("./C0003T01.JPG");

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#000000",
    backgroundSize: "cover",
    zIndex: -10,
    overflowY: "hidden",
  },
});

function Scene() {
  // const image = useTextureLoader("./C0003T01.JPG");
  // console.log(image);
  return (
    <mesh
      visible
      userData={{ hello: "world" }}
      position={new THREE.Vector3(1, 2, 3)}
      rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
      geometry={new THREE.SphereGeometry(1, 16, 16)}
      material={
        new THREE.MeshBasicMaterial({
          color: new THREE.Color("hotpink"),
          transparent: true,
        })
      }
    />
    // <mesh>
    //   <meshBasicMaterial attach="material">
    //     <texture
    //       attach="map"
    //       image={image}
    //       onUpdate={(self) => img && (self.needsUpdate = true)}
    //     />
    //   </meshBasicMaterial>
    // </mesh>
  );
}

export default function App() {
  const classes = useStyles();
  const texture1 = new THREE.TextureLoader().load(img);
  const ref = React.useRef();
  return (
    // <Canvas style={{ backgroundImage: `url(${img})` }}>
    <Canvas>
      {/* Your regular scene contents go here, like always ... */}
      {/* <color
        attach="background"
        args={["rgba(20, 20, 20, 0.1)"]}
        // opacity={0.1}
      /> */}
      <meshBasicMaterial name="material">
        <canvasTexture
          name="map"
          format={THREE.RGBFormat}
          image={img}
          onUpdate={(self) => {
            console.log(self);
          }}
        />
        {/* <texture
            name="map"
            format={THREE.RGBFormat}
            image={img}
            // onUpdate={(self) => img && (self.needsUpdate = true)}
          /> */}
      </meshBasicMaterial>
      {/* <fog color="#161616" attach="fog" near={8} far={30} /> */}
      {/* <mesh>
        <meshBasicMaterial attach="material">
          <texture
            attach="map"
            image={img}
            // onUpdate={(self) => img && (self.needsUpdate = true)}
            onUpdate={(self) => {
              console.log(self);
            }}
          />
        </meshBasicMaterial>
      </mesh> */}
      <EffectComposer>
        {/* <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.1} />
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </Canvas>
  );
}
