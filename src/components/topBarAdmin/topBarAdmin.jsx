import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 75,
    boxShadow: "0px 7px 15px -6px rgba(0,0,0,0.75) ",
    padding: "0% 2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commands: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 400,
  },
  command: {
    fontWeight: "600",
    margin: "0% 2%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
      <div className={classes.commands}>
        <div className={classes.command} style={{ color: "#8cc63f" }}>
          {" "}
          Visiter le site
        </div>
        <div className={classes.command} style={{ color: "#a6a6a6" }}>
          Déconnexion
        </div>
      </div>
    </div>
  );
};

export default TopBar;
