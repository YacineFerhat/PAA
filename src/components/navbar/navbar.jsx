import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import logo from "assets/logo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import Data from "data/menu";
import "./navbar.css";
const useStyles = makeStyles((theme) => ({
  links: {
    "&:hover": {
      color: "rgba(255, 255, 255, 0.658)",
    },
  },
  navItem: {
    "&:hover": {
      color: "rgb(0, 180, 137)",
    },
  },
  flexDisplay: {
    display: "flex",
    alignItems: "center",
  },
  subNav: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const mediaMatch = window.matchMedia("(max-width: 1024px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  const [lNav, setLNav] = useState(false);
  const [lNav2, setLNav2] = useState(false);
  const [rNav, setRNav] = useState(false);
  const [rNav2, setRNav2] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.matchMedia("(max-width: 1024px)").matches != matches) {
        setMatches(!matches);
      }
    });
  });

  function showNav1(dir) {
    if (dir == "left") {
      setLNav(true);
    }
    else if (dir == "right") {
      setRNav(true);
    }

    return true;
  }

  function showNav2(dir) {
    if (dir == "left") {
      setLNav2(true);
      setLNav(true);
    }
    else if (dir == "right") {
      setRNav2(true);
      setRNav(true);
    }

    return true;
  }

  function hideNav1(dir) {
    if (dir == "left") {
      if (!lNav2) {
        setLNav(false);
      }
    }
    else if (dir == "right") {
      if (!rNav2) {
        setRNav(false);
      }
    }

    return true;
  }

  function hideNav2(dir) {
    if (dir == "left") {
      setLNav2(false);
      setLNav(false);
    }
    else if (dir == "right") {
      setRNav2(false);
      setRNav(false);
    }

    console.log(lNav2);
    return true;
  }

  return (
    <nav className="a-navbar">
      <div className="a-nav-1">
        <div></div>
        <div className="right-side">
          <div className="nav-mail">
            <EmailIcon />
            &nbsp;
            plogging_association_algeria@hotmail.com
          </div>

          <span className="icons">
            <a
              className={`links ${classes.links}`}
              href="https://www.youtube.com/channel/UC9NDD6jwR0GdiJUodVdQesA"
              target="_blank"
            >
              <YouTubeIcon className="icon" />
            </a>
            <a
              className={`links ${classes.links}`}
              href="https://www.instagram.com/plogging_association_algeria/?hl=fr"
              target="_blank"
            >
              <InstagramIcon className="icon" />
            </a>
            <a
              className={`links ${classes.links}`}
              href="https://www.facebook.com/PloggingAssociationAlgeria/"
              target="_blank"
            >
              <FacebookIcon className="icon" />
            </a>
          </span>
        </div>
      </div>

      <div className="a-nav-2">
        <div className="left-side">
          <Link to="/">
            <img src={logo} alt="Logo plogging_association_algeria" />
          </Link>

          <div className="nav-item-holder">

            <Link to={!Data[0].sub ? Data[0].link : !matches ? Data[0].link : "#"}>
              <button
                className={`nav-item ${classes.navItem}`}
                onMouseEnter={() => { !matches && showNav1("left") }}
                onMouseLeave={() => { !matches && hideNav1("left") }}

                onClick={() => { matches && ((!lNav2 && showNav2("left") && showNav1("left")) || lNav2 && hideNav2("left")) }}
              >
                <span>
                  {Data[0].title}
                  &nbsp;
                  <i
                    className={`fa ${lNav ? "fa-angle-up" : "fa-angle-down"}`}
                  >
                  </i>
                </span>
              </button>
            </Link>

            {Data[0].sub && lNav && (
              <div
                className={`sub-nav`}
                onMouseEnter={() => { !matches && showNav2("left") }}
                onMouseLeave={() => { !matches && hideNav2("left") }}
              >
                <div className="arrow-up"></div>

                {Data[0].sub.map((subNav) => (
                  <Link key={subNav.id} to={`${Data[0].link}${subNav.link}`}>
                    <button
                      className={`sub-nav-item `}
                    >
                      <span>{subNav.title}</span>
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>

        <button onClick={() => setMobileNav(!mobileNav)} className={`a-mobile nav-trigger fa ${mobileNav ? "fa-close" : "fa-bars"}`}>
        </button>

        <div className="right-side">
          {(!matches || mobileNav) && Data.map((nav) =>
            nav.id !== 1 ? (
              <div className="nav-item-holder">
                <Link to={!nav.sub ? nav.link : !matches ? nav.link : "#"}>
                  <button
                    className={`nav-item`}
                    onMouseEnter={() => { nav.sub && !matches && showNav1("right") }}
                    onMouseLeave={() => { nav.sub && !matches && hideNav1("right") }}
                    onClick={() => { nav.sub && matches && ((!rNav2 && showNav2("right") && showNav1("right")) || rNav2 && hideNav2("right")) }}
                  >
                    <span>
                      {nav.title}
                      &nbsp;
                      {nav.sub && (
                        <i className={`fa ${nav.sub && (rNav ? "fa-angle-up" : "fa-angle-down")}`}></i>
                      )}
                    </span>
                  </button>
                </Link>
                {nav.sub && rNav && (
                  <div
                    className={`sub-nav`}
                    onMouseEnter={() => { !matches && showNav2("right") }}
                    onMouseLeave={() => { !matches && hideNav2("right") }}
                  >
                    <div className="arrow-up"></div>

                    {nav.sub.map((subNav) => (
                      <Link key={subNav.id} to={`${nav.link}${subNav.link}`}>
                        <button
                          className={`sub-nav-item`}
                        >
                          <span>{subNav.title}</span>
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;