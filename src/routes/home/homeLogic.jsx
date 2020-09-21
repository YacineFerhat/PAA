import React, { useEffect, useState } from "react";
import Home from "./home";
import HomePhone from "./homePhone";

const HomeLogic = () => {
  const mediaMatch = window.matchMedia("(min-width: 1114px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);

  let data = matches ? <Home /> : <HomePhone />;
  return <> {data}</>;
};

export default HomeLogic;
