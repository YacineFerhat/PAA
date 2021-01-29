import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "arial",
  },
  title: {
    color: "#1d7b63",
    fontSize: "35px",
    fontWeight: "400",
    letterSpacing: 2.5,
  },
});
const DoubleTitle = ({ sub, title }) => {
  const classes = useStyles();
  return (
    <div className={`has-text-centered ${classes.root}`}>
      <h1 className={classes.title}>{title}</h1>
      <h1 className="subtitle is-5">{sub}</h1>
    </div>
  );
};

export default DoubleTitle;
