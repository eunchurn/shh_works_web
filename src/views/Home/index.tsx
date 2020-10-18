import React from "react";
// import img from "./C0003T01.JPG";
import { createUseStyles } from "react-jss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("./C0003T01.JPG");

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: -10,
  },
});

export default function () {
  const classes = useStyles();
  // return <img className={classes.container} src={img} />;
  return <div className={classes.container}></div>;
}
