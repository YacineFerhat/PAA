import React from "react";
import { useParams } from "react-router-dom";
const Inscription = () => {
  let { name } = useParams();
  console.log(name);
  return <div>{name}</div>;
};

export default Inscription;
