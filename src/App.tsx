import React from "react";
import { useTransition, config, animated } from "react-spring";
import { createUseStyles } from "react-jss";
import "./App.css";
import "./TT.css";
import Hmm from "./views/Hmm";
import Home from "./views/Home";

const useStyles = createUseStyles({
  root: {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",

    zIndex: -1,
  },
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

const intro = [
  { id: 1, component: <Hmm /> },
  { id: 2, component: <Home /> },
];

export default function () {
  const classes = useStyles();
  const [index, set] = React.useState(0);
  const transitions = useTransition(intro[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  React.useEffect(() => {
    setTimeout(() => set(1), 6000);
  }, []);
  // const transitionSpring = useSpring({
  //   from: { height: "0%" },
  //   to: { height: "100%" },
  //   config: { duration: 2000 },
  // });
  // <Hmm />
  //   <animated.div className={classes.transitionBox} style={transitionSpring}>
  //     <Home />
  //   </animated.div>
  return (
    <div className={classes.root}>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
          }}
        >
          {item.component}
        </animated.div>
      ))}
      {/* <Hmm />
      <animated.div className={classes.transitionBox} style={transitionSpring}>
        <Home />
      </animated.div> */}
    </div>
  );
}
