import React from "react";
import { Bar } from "../../components/Intro";
import { useSpring, animated } from "react-spring";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  typography: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 10,
  },
  bar: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: 3,
  },
  text: {
    fontFamily: "Jeju Myeongjo",
    color: "#ffffff",
    fontSize: 51,
    paddingRight: 10,
  },
  transitionBox: {
    position: "absolute",
    backgroundColor: "#ffffff",
    width: "100%",
    zIndex: 1,
  },
});

export default function () {
  const classes = useStyles();
  const barSpring = useSpring({
    from: { width: "0px" },
    to: { width: "359.95px" },
    config: { duration: 5000 },
  });

  return (
    <animated.div className={classes.container}>
      <p className={classes.text}>음</p>
      <animated.div className={classes.bar} style={barSpring}>
        <Bar height="3px" />
      </animated.div>
    </animated.div>
  );
}
