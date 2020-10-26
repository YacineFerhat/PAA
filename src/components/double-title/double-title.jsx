import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Autolinker",
  },
  title: {
    marginTop: "3%",
    color: "#023302",
    fontSize: "35px",
    fontWeight: "900",
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
