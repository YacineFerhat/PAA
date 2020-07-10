import React, { useState } from "react";
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
}));
const Navbar = () => {
  const classes = useStyles();
  const [ToggleArrowUp, setToggleArrowUp] = useState(false);
  const [idToToggle, setIdToToggle] = useState(0);

  const mediaMatch = window.matchMedia("(min-width: 1024px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  console.log(matches);
  const toggleSubMenu = (id, state) => {
    if (state === "enter") {
      setToggleArrowUp(true);
    } else {
      setToggleArrowUp(false);
    }
    setIdToToggle(id);
    console.log(id);
  };
  return (
    <nav className="a-navbar">
      <div className="a-nav-1">
        <div></div>
        <div className="right-side">
          <div className="nav-mail">
            <div className="mail-icon">
              {" "}
              <EmailIcon />
            </div>
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
            <Link to={Data[0].link}>
              <button
                className={`nav-item ${classes.navItem}`}
                onMouseEnter={() => toggleSubMenu(1, "enter")}
                onMouseLeave={() => toggleSubMenu(0, "leave")}
              >
                <span className={classes.flexDisplay}>
                  {Data[0].title}
                  <div>
                    {" "}
                    {idToToggle === 1 && ToggleArrowUp ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </div>
                </span>
              </button>
            </Link>
            {Data[0].sub && (
              <div
                className="sub-nav"
                style={{
                  display:
                    idToToggle === 1 && ToggleArrowUp && matches ? "" : "none",
                }}
              >
                <div className="arrow-up"></div>

                {Data[0].sub.map((subNav) => (
                  <Link key={subNav.id} to={subNav.link}>
                    <button
                      onMouseEnter={() => toggleSubMenu(1, "enter")}
                      onMouseLeave={() => toggleSubMenu(0, "leave")}
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
        <button class="a-mobile nav-trigger">
          <MenuIcon />
        </button>

        <div className="right-side">
          {Data.map((nav) =>
            nav.id !== 1 ? (
              <div class="nav-item-holder">
                <Link to={nav.link}>
                  <button
                    className={`nav-item ${classes.navItem}`}
                    onMouseEnter={() => toggleSubMenu(nav.id, "enter")}
                    onMouseLeave={() => toggleSubMenu(0, "leave")}
                  >
                    <span className={classes.flexDisplay}>
                      {nav.title}
                      {nav.sub && (
                        <div>
                          {" "}
                          {idToToggle === nav.id && ToggleArrowUp && matches ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}{" "}
                        </div>
                      )}
                    </span>
                  </button>
                </Link>
                {nav.sub && (
                  <div
                    className="sub-nav"
                    style={{
                      display:
                        idToToggle === nav.id && ToggleArrowUp ? "" : "none",
                    }}
                  >
                    <div className="arrow-up"></div>

                    {nav.sub.map((subNav) => (
                      <Link key={subNav.id} to={`${nav.link}${subNav.link}`}>
                        <button
                          className={`sub-nav-item `}
                          onMouseEnter={() => toggleSubMenu(nav.id, "enter")}
                          onMouseLeave={() => toggleSubMenu(0, "leave")}
                        >
                          <span>{subNav.title}</span>
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*

<div className={classes.aNav2}>
        <div className={classes.leftSide}>
          <img
            src={logo}
            className={classes.logo}
            alt="Logo plogging_association_algeria"
          />
          <div className={classes.navItemHolder}>
            <a href="#">
              <button className={classes.navItem}>
                <span>
                  PLOGGING ASSOCIATION ALGERIA
                  <ExpandMoreIcon />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>*/
/*
  <nav class="a-navbar">
        

        <div class="a-nav-2">
            <div class="left-side">
                <img src="logo.png" alt="Logo plogging_association_algeria">

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            <span>
                                PLOGGING ASSOCIATION ALGERIA 
                                <i class="fa fa-angle-down l-sign"></i>
                            </span>
                        </button>
                    </a>
                    <div class="sub-nav">
                        <div class="arrow-up">

                        </div>

                        <a href="#">
                            <button class="sub-nav-item">
                                Qui sommes-nous ?
                            </button>
                        </a>

                        <a href="#">
                            <button class="sub-nav-item">
                                Qu’est-ce que le Plogging ?
                            </button>
                        </a>

                        <a href="#">
                            <button class="sub-nav-item">
                                Nos objectifs ?
                            </button>
                        </a>
                        
                        <a href="#">
                            <button class="sub-nav-item">
                                Nous rejoindre
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <button class="a-mobile nav-trigger fa fa-bars">
            </button>

            <div class="right-side">
                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            Accueil
                        </button>
                    </a>
                </div>

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            <span>Nos comités</span>
                            <i class="fa fa-plus n-sign"></i>
                            <span class="desktop">
                                &nbsp;
                                <i class="fa fa-angle-down l-sign"></i>
                            </span>
                        </button>
                    </a>
                    <div class="sub-nav">

                        <div class="arrow-up">

                        </div>
                        <a href="#">
                            <button class="sub-nav-item">
                                Sport et bien être
                            </button>
                        </a>
                        
                        <a href="#">
                            <button class="sub-nav-item">
                                Junior
                            </button>
                        </a>

                        <a href="#">
                            <button class="sub-nav-item">
                                Eco-tourisme
                            </button>
                        </a>

                        <a href="#">
                            <button class="sub-nav-item">
                                Conférence
                            </button>
                        </a>

                        <a href="#">
                            <button class="sub-nav-item">
                                Biodiversité
                            </button>
                        </a>
                    </div>
                </div>

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            Nos teams
                        </button>
                    </a>
                </div>

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            Collaborateurs
                        </button>
                    </a>
                </div>

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            Nos évenements
                        </button>
                    </a>
                </div>

                <div class="nav-item-holder">
                    <a href="#">
                        <button class="nav-item">
                            Articles
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
*/
