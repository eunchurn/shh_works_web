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

export default function App() {
  const classes = useStyles();
  const texture1 = new THREE.TextureLoader().load(img);
  return (
    <Canvas>
      {/* Your regular scene contents go here, like always ... */}
      <color attach="background" args={["#050505"]} />
      {/* <meshBasicMaterial name="material">
        <texture
          name="map"
          format={THREE.RGBFormat}
          image={img}
          onUpdate={(self) => img && (self.needsUpdate = true)}
        />
      </meshBasicMaterial> */}
      {/* <fog color="#161616" attach="fog" near={8} far={30} /> */}
      <mesh>
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
      </mesh>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.12} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
