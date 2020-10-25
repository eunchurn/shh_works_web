import React from "react";
import { useTransition, config, animated } from "react-spring";
import styled from "styled-components";
import { createUseStyles } from "react-jss";
import "./App.css";
import "./TT.css";
import Hmm from "./views/Hmm";
import Home from "./views/Home";
import Effect from "./views/Effect";

const BlackBox = styled.div`
  width: 100%;
  height: 100vh;
  background-color: "#000000";
`;

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
  // { id: 2, component: <BlackBox /> },
  {
    id: 2,
    component: <Home />,
  },
];

export default function () {
  const classes = useStyles();
  const [index, set] = React.useState(0);
  const transitions = useTransition(intro[index], (item) => item.id, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: config.molasses,
    // reset: true,
  });
  React.useEffect(() => {
    setTimeout(() => {
      set(1);
      // setTimeout(() => {
      //   set(2);
      // }, 500);
    }, 5000);
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={classes.root}
      style={{
        ...props,
      }}
    >
      {item.component}
    </animated.div>
  ));
  // return <Home />;
  // return (
  //   <div className={classes.root}>
  //     <Effect />
  //   </div>
  // );
}
