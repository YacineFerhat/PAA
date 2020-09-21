import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      Footer que Je vais créer à la fin :d
    </footer>
  );
};
export default Footer;
