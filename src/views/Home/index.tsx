import React from "react";
import { createUseStyles } from "react-jss";
import Effect from "../Effect";
import { useSpring, animated, config } from "react-spring";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./C0003T01.JPG");

const useStyles = createUseStyles({
  "@keyframes slide": {
    from: { height: "calc(50% - 1px)" },
    to: { height: "calc(50% - 500px)" },
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#000000",
    backgroundSize: "cover",
    zIndex: -10,
    overflowY: "hidden",
  },
  effectContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  blackbox: {
    width: "100%",
    height: "calc(50% - 5px)",
    backgroundColor: "#000000",
    zIndex: 20,
  },
  redBox: {
    width: "100%",
    height: "calc(50% - 5px)",
    backgroundColor: "#000000",
    zIndex: 20,
  },
  blackboxTransition: {
    // animationName: "$slide",
    animation: "$slide 2s cubic-bezier(0.755, 0.05, 0.855, 0.06) forwards",
    zIndex: 20,
    backgroundColor: "#000000",
    height: "calc(50%-1px)",
    // transform: "translateY(-150px)",
    // visibility: "hidden",
    // transition:
    //   "transform 0.6s cubic-bezier(0.755, 0.05, 0.855, 0.06) 0s visibility 0.6s linear 0s",
  },
});

export default function () {
  const classes = useStyles();
  // const style = useSpring({
  //   from: { height: "calc(50% - 1px)" },
  //   to: { height: "calc(50% - 500px)" },
  //   config: { mass: 5, tension: 20, friction: 14 },
  //   // delay: 900,
  //   // config: config.slow,
  // });
  return (
    <div className={classes.container}>
      <div className={classes.effectContainer}>
        <Effect />
      </div>
      {/* <animated.div className={classes.blackbox} style={style} />
      <animated.div className={classes.redBox} style={style} /> */}
      <div className={classes.blackboxTransition} />
      <div className={classes.blackboxTransition} />
    </div>
  );
}
