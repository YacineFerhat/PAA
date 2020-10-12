import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Data from "data/menu";
import youtube from "assets/icones/youtube.svg";
import fb from "assets/icones/fb.svg";
import insta from "assets/icones/insta.svg";
import logo from "assets/logoL.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 150,
    background: "rgb(92,143,62)",
    backgroundImage:
      "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",

    padding: "0.5% 2%",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav1: {
    display: "flex",
    justifyContent: "space-between",
    height: 40,
  },
  links: {
    textDecoration: "none",
    "&:hover": {
      color: "rgba(255,255,255, 0.7)",
    },
  },
  icon: {
    height: 30,
    width: 30,
    "&:hover": {
      cursor: "pointer",
    },
  },
  nav2: {
    display: "flex",
    alignItems: "center",
    height: 110,
    justifyContent: "space-between",
  },
  navItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
    height: "100%",
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  link: {
    height: "100%",
    alignItems: "center",
    display: "flex",
  },
  right: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",

    height: "100%",
  },
  //5C8F3E A3CD39 D7E279
  rootIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 220,
    height: 220,
  },
  logo: {},
  navItemTitlte: {
    fontFamily: "Comic Sans MS",
    fontSize: "30px",
    fontWeight: "900",
  },
  subNav: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: 140,
    width: 250,
    backgroundColor: "white",
    boxShadow: "0px 0px 23px 3px rgba(0,0,0,0.35)",
    zIndex: 10,
  },

  triangle: {
    position: "absolute",
    top: -15,
    left: 50,
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderBottom: "16px solid ",
    zIndex: 10,
  },
  subNavLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    padding: "5%",
    fontFamily: "Comic Sans MS",
    "&:hover": {
      backgroundImage:
        "linear-gradient(90deg, rgba(92,143,62,1) 0%, rgba(163,205,57,1) 81%, rgba(215,226,121,1) 100%)",
      cursor: "pointer",
      transition: "1s ease",
      color: "white",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const toggleSubMenu = () => {};
  const dataLeft = Data.slice(0, 3);
  const dataRight = Data.slice(3, 7);
  const [idToShow, setIdToShow] = useState(10);
  const [showNav, setShowNav] = useState(false);
  const constToggleNav = (state, id) => {
    setIdToShow(id);
    setShowNav(state);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.nav1}>
          <div></div>
          <div>
            <a
              className={`links ${classes.links}`}
              href="https://www.youtube.com/channel/UC9NDD6jwR0GdiJUodVdQesA"
              target="_blank"
            >
              <img src={youtube} className={classes.icon} />
            </a>
            <a
              className={`links ${classes.links}`}
              href="https://www.instagram.com/plogging_association_algeria/?hl=fr"
              target="_blank"
            >
              <img src={insta} className={classes.icon} />
            </a>
            <a
              className={`links ${classes.links}`}
              href="https://www.facebook.com/PloggingAssociationAlgeria/"
              target="_blank"
            >
              <img src={fb} className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={classes.nav2} style={{ fontFamily: "Comic Sans MS" }}>
          <div className={classes.left}>
            {dataLeft.map((lien) => (
              <>
                <Link
                  className={classes.link}
                  to={lien.link}
                  onMouseEnter={() => constToggleNav(true, lien.id)}
                  onMouseLeave={() => constToggleNav(false, lien.id)}
                >
                  <div className={classes.navItem}>
                    <span className={classes.navItemTitlte}>{lien.title}</span>
                  </div>
                </Link>
                {lien.sub && (
                  <div
                    className={classes.subNav}
                    style={{
                      display:
                        showNav && idToShow === lien.id ? "flex" : "none",
                    }}
                    onMouseEnter={() => constToggleNav(true, lien.id)}
                    onMouseLeave={() => constToggleNav(false, lien.id)}
                  >
                    <div className={classes.triangle} />
                    {lien.sub.map((subLink) => (
                      <Link
                        to={`${lien.link}${subLink.link}`}
                        key={subLink.id}
                        className={classes.subNavLink}
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ))}
          </div>
          <div className={classes.middle}>
            <Link className={classes.rootIcon} to="/">
              <img src={logo} className={classes.logo} />
            </Link>
          </div>
          <div className={classes.right}>
            {dataRight.map((lien) => (
              <>
                <Link
                  className={classes.link}
                  onMouseEnter={() => constToggleNav(true, lien.id)}
                  onMouseLeave={() => constToggleNav(false, lien.id)}
                  to={lien.link}
                >
                  <div className={classes.navItem}>
                    <span className={classes.navItemTitlte}>{lien.title}</span>
                  </div>
                </Link>
                {lien.sub && (
                  <div
                    className={classes.subNav}
                    style={{
                      display:
                        showNav && idToShow === lien.id ? "flex" : "none",
                    }}
                    onMouseEnter={() => constToggleNav(true, lien.id)}
                    onMouseLeave={() => constToggleNav(false, lien.id)}
                  >
                    <div className={classes.triangle} />
                    {lien.sub.map((subLink) => (
                      <Link
                        to={`${lien.link}${subLink.link}`}
                        key={subLink.id}
                        className={classes.subNavLink}
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ))}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
