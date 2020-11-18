import React from "react";
import { useFetchArt } from "hooks/useFetchArt";

const Art = () => {
  const data = useFetchArt();
  console.log(data);
  return <div>Art</div>;
};
export default Art;
