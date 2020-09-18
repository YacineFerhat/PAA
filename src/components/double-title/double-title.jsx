import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  title: {
    marginTop: "3%",
    fontFamily: "Autolinker",
  },
});
const DoubleTitle = ({ sub, title }) => {
  const classes = useStyles();
  return (
    <div className={`has-text-centered ${classes.root}`}>
      <h1 className={`title is-3 ${classes.title}`}>{title}</h1>
      <h1
        className="subtitle is-5"
        style={{
          fontFamily: "Autolinker",
        }}
      >
        {sub}
      </h1>
    </div>
  );
};

export default DoubleTitle;
