import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "assets/logoL.png";
import menu from "data/menuAdmin";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3f4767",
    height: "100%",
    boxShadow: "7px 0px 15px -6px rgba(0,0,0,0.75) ",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    minWidth: 240,
  },
  logoContainer: {
    height: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 7px 15px -6px rgba(0,0,0,0.75) ",
  },
  logo: {
    height: 75,
  },
  links: {
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 2,
  },
  link: {
    fontSize: "18px",
    marginTop: "3%",
    width: "100%",
    padding: "0% 5%",
    textDecoration: "none",
    color: "#F8F8F8	",
    "&:hover": {
      color: "#6CB4EE	",
    },
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div className={classes.links}>
        {menu.map((link) => (
          <NavLink
            className={classes.link}
            key={link.id}
            to={`/administration${link.link}`}
          >
            {link.titre}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
