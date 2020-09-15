import React from "react"
import logo from "assets/logo.png";

import { Link } from "react-router-dom";
import Data from "data/menu";
import "./loader.css";
import { useEffect } from "react";

function fade(type, ms, el) {
  var isIn = type === 'in',
    opacity = isIn ? 0 : 1,
    interval = 50,
    duration = ms,
    gap = interval / duration;

  if (isIn) {
    el.style.display = 'inline';
    el.style.opacity = opacity;
  }

  function func() {
    opacity = isIn ? opacity + gap : opacity - gap;
    el.style.opacity = opacity;

    if (opacity <= 0) el.style.display = 'none'
    if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
  }

  var fading = window.setInterval(func, interval);

}

const Loader = () => {
  useEffect(() => {
    /*window.addEventListener("load", () => {
      fade('out', 500, loader);
    });*/

    let loader = document.querySelector(".Loader");
    window.setTimeout(fade, 3000, 'out', 500, loader);
  }, [])

  return (
    <div className="Loader">
      <img src={logo}>
      </img>
    </div>
  );
};

export default Loader;