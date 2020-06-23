import React from "react";
import Logo from "assets/logo.png";
import menu from "data/menu";
import "./header.modules.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      className="navbar header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item logo">
          <img
            src={Logo}
            style={{ maxHeight: "100px", height: "100px", width: "100px" }}
          />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {menu?.map((navbarItem) =>
            navbarItem.sub ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to={navbarItem.link} className="navbar-link">
                  {navbarItem.title}
                </Link>
                <div className="navbar-dropdown">
                  {navbarItem.sub.map((drop) => (
                    <Link
                      to={`${navbarItem.link}${drop.link}`}
                      className="navbar-item"
                      key={drop.id}
                    >
                      {drop.icon && (
                        <span className="icon">
                          <img src={drop.icon} />
                        </span>
                      )}
                      <span style={{ marginLeft: "2%" }}>{drop.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={navbarItem.link}
                className="navbar-item"
                key={navbarItem.id}
              >
                {navbarItem.title}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
