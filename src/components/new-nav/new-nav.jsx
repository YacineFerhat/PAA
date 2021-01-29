import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Data from "data/menu";
import fb from "assets/header/fb.svg";
import insta from "assets/header/insta.svg";
import logo from "assets/header/logo.svg";
import linkdin from "assets/header/linkdin.svg";
import mail from "assets/header/mail.svg";
import youtube from "assets/header/yt.svg";
import phone from "assets/header/phone.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: 160,
    backgroundColor: "#1d7b63",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    position: "relative",
  },
  rootIcon: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 160,
    left: "13%",
  },
  logo: {
    height: 160,
    width: 160,
  },
  nav1: {
    height: 20,
    backgroundColor: "white",
  },
  nav2: {
    padding: "0.5% 2%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
  },

  icon: {
    height: 30,
    width: 30,
    "&:hover": {
      cursor: "pointer",
    },
  },
  headerTitle: {
    paddingLeft: "60px",
    width: "100%",
    textAlign: "center",
    fontSize: "30px",
    letterSpacing: 2.5,
    fontWeight: 400,
    textAlign: "center",
  },
  nav3: {
    display: "flex",
    alignItems: "center",
    height: 70,
    padding: "0.5% 2%",
    backgroundColor: "white",
    justifyContent: "space-between",
    borderBottom: "2px solid #e5eeec",
  },
  linksHolder: {
    paddingLeft: "60px",
    width: 630,
    display: "flex",
    height: 70,
    justifyContent: "space-between",
  },
  navItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    height: "100%",
  },
  link: {
    height: "100%",
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: "black",
  },
  links: {
    minWidth: 120,
    display: "flex",
    justifyContent: "space-between",
  },
  navItemTitle: {
    fontFamily: "arial",
    fontSize: "18px",
    fontWeight: "semibold",
    letterSpacing: 2.5,
  },
  subNav: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: 155,
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
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: 2.5,
    textDecoration: "none",
    color: "black",
    padding: "5%",
    "&:hover": {
      backgroundColor: "#1d7b63",
      cursor: "pointer",
      transition: "1s ease",
      color: "white",
    },
  },
  "@media (min-width: 1350px)": {
    headerTitle: {
      fontSize: "35px",
    },

    navItemTitle: {
      fontSize: "20px",
    },
    linksHolder: {
      width: 720,
    },
  },

  "@media (min-width: 1500px)": {
    headerTitle: {
      fontSize: "37px",
    },

    navItemTitle: {
      fontSize: "22px",
    },
    linksHolder: {
      width: 750,
    },
  },
  "@media (min-width: 1700px)": {
    headerTitle: {
      fontSize: "45px",
    },

    navItemTitle: {
      fontSize: "25px",
    },
    linksHolder: {
      width: 880,
    },
  },
  "@media (min-width: 1900px)": {
    headerTitle: {
      fontSize: "50px",
    },

    navItemTitle: {
      fontSize: "26px",
    },
    linksHolder: {
      width: 960,
    },
  },

  "@media (min-width: 2100px)": {
    headerTitle: {
      fontSize: "55px",
    },

    navItemTitle: {
      fontSize: "28px",
    },
    linksHolder: {
      width: 1060,
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const toggleSubMenu = () => {};
  const [idToShow, setIdToShow] = useState(10);
  const [showNav, setShowNav] = useState(false);
  const constToggleNav = (state, id) => {
    setIdToShow(id);
    setShowNav(state);
  };
  return (
    <>
      <div className={classes.root}>
        <Link className={classes.rootIcon} to="/">
          <img src={logo} className={classes.logo} />
        </Link>
        <div className={classes.nav1}></div>
        <div className={classes.nav2}>
          <div className={classes.links}>
            <a
              className={`link ${classes.link}`}
              href="mailto:plogging_association_algeria@hotmail.com"
            >
              <img src={mail} className={classes.icon} />
            </a>
            <a
              className={`link ${classes.link}`}
              href="https://www.linkedin.com/company/plogging-association-algeria/about/"
              target="_blank"
            >
              <img src={linkdin} className={classes.icon} />
            </a>
            <a
              className={`link ${classes.link}`}
              href="https://www.facebook.com/PloggingAssociationAlgeria/"
              target="_blank"
            >
              <img src={phone} className={classes.icon} />
            </a>
          </div>
          <div className={classes.headerTitle}>
            PLOGGING ASSOCIATION ALGERIA
          </div>
          <div className={classes.links}>
            <a
              className={`link ${classes.link}`}
              href="https://www.youtube.com/channel/UC9NDD6jwR0GdiJUodVdQesA"
              target="_blank"
            >
              <img src={youtube} className={classes.icon} />
            </a>
            <a
              className={`link ${classes.link}`}
              href="https://www.instagram.com/plogging_association_algeria/?hl=fr"
              target="_blank"
            >
              <img src={insta} className={classes.icon} />
            </a>
            <a
              className={`link ${classes.link}`}
              href="https://www.facebook.com/PloggingAssociationAlgeria/"
              target="_blank"
            >
              <img src={fb} className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={classes.nav3} style={{ fontFamily: "arial" }}>
          <div className={classes.links}></div>
          <div className={classes.linksHolder}>
            {Data.map((lien, i) => (
              <React.Fragment key={i}>
                <Link
                  className={classes.link}
                  to={`${lien.link}`}
                  onMouseEnter={() => constToggleNav(true, lien.id)}
                  onMouseLeave={() => constToggleNav(false, lien.id)}
                >
                  <div className={classes.navItem}>
                    <span className={classes.navItemTitle}>{lien.title}</span>
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
              </React.Fragment>
            ))}
          </div>
          <div className={classes.links}></div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Navbar;
