import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(92,143,62,1)",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: 80,
    fontFamily: "Comic Sans MS",
    textAlign: "center",
  },

  "@media (max-width: 1114px)": {
    root: {
      marginTop: 5,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      &copy; 2020 PLOGGING ASSOCIATION ALGERIA
    </footer>
  );
};
export default Footer;
