import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "data/menu";
import youtube from "assets/icones/youtube.svg";
import fb from "assets/icones/fb.svg";
import insta from "assets/icones/insta.svg";
import logo from "./logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { NavLink, Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
    background: "rgb(92,143,62)",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",
    padding: "0% 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  image: {
    height: "130px",
    width: "130px",
    marginTop: 50,
    zIndex: 3,
  },
  burger: {
    marginTop: 50,
    marginLeft: 5,
    fontSize: "35px",
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  links: {
    marginTop: 30,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "40%",
    borderRadius: "5px",
    position: "relative",
  },
  triangle: {
    position: "absolute",
    top: -20,
    right: 20,
    borderStyle: "solid",
    borderWidth: "0 0 24px 24px",
    borderColor: "transparent transparent white",
  },
  navLink: {
    color: "black",
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "arial",
    width: "100%",
    padding: "0% 5%",
    textAlign: "center",
    letterSpacing: 1.7,
  },
  hr: {
    height: "2px",
    width: "100%",
    backgroundColor: "#e1e1e1",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 30,
    margin: "0px 5px",
  },
}));
const MobileNav = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  console.log(data);
  return (
    <>
      {" "}
      <div className={classes.root}>
        <div className={classes.flex}>
          <img src={youtube} className={classes.icon} />
          <img src={fb} className={classes.icon} />
          <img src={insta} className={classes.icon} />
        </div>
        <div className={classes.flex}>
          {" "}
          <Link to="/" className={classes.flex}>
            <img
              src={logo}
              alt="logo plogging association algerie"
              className={classes.image}
            />
          </Link>
          {toggle ? (
            <CloseIcon
              className={classes.burger}
              onClick={() => setToggle(false)}
            />
          ) : (
            <MenuIcon
              className={classes.burger}
              onClick={() => setToggle(true)}
            />
          )}
        </div>
        <div></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: toggle ? "flex" : "none" }}
          className={classes.links}
        >
          <div className={classes.triangle} />
          <div>
            {data.map((link) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  activeStyle={{
                    color: "#8cc63F",
                  }}
                  exact
                  to={link.link}
                  className={classes.navLink}
                >
                  {link.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
