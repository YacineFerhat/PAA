import React from "react";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    borderRadius: "10%",
    padding: "1rem",
    background: "linear-gradient(to right, #66d366 50%, #009245)",
    position: "relative",
    margin: "0% 10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    background: "white",
    height: 280,
    width: "100%",
    borderRadius: "10%",
  },
  hbar: {
    width: "95%",
    height: 15,
    backgroundImage: "linear-gradient(to right, #66d366 50%, #009245)",
    position: "absolute",
    top: 70,
  },
  vbar1: {
    width: 12,
    height: 40,
    left: 100,
    top: -20,
    borderRadius: "10%",
    backgroundImage: "linear-gradient(to right, #66d366 50%, #009245)",
    position: "absolute",
  },
  vbar2: {
    width: 12,
    top: -20,
    height: 40,
    right: 100,
    borderRadius: "10%",
    backgroundImage: "linear-gradient(to right, #66d366 50%, #009245)",
    position: "absolute",
  },
}));
const Event = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.hbar}></div>
        <div className={classes.vbar1}></div>
        <div className={classes.vbar2}></div>
      </div>
    </div>
  );
};

export default Event;
