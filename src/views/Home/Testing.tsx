import React from "react";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./C0003T01.JPG");

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: "100%",
    // width: window.innerWidth || document.body.clientWidth,
    // height: window.innerHeight || document.body.clientHeight,
    // height: "100%",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    backgroundColor: "#000000",
    zIndex: -10,
    overflowY: "hidden",
  },
});

export default function () {
  const classes = useStyles();
  const spring = useSpring({
    from: { height: "0%" },
    to: { height: "100%" },
    config: { duration: 10000 },
  });
  // return <img className={classes.container} src={img} />;
  return (
    <animated.div className={classes.container} style={spring}></animated.div>
  );
}
