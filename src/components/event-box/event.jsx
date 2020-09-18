import React from "react";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 250,
    borderRadius: "30px",
    padding: "1rem",
    background:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",
    position: "relative",
    margin: "0% 10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    background: "#f3f3f3",
    height: 230,
    width: "100%",
    borderRadius: "30px",
  },
  hbar: {
    width: "95%",
    height: 15,
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",

    position: "absolute",
    top: 70,
  },
  vbar1: {
    width: 12,
    height: 40,
    left: 100,
    top: -20,
    borderRadius: "10%",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",
    position: "absolute",
  },
  vbar2: {
    width: 12,
    top: -20,
    height: 40,
    right: 100,
    borderRadius: "10%",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",
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
