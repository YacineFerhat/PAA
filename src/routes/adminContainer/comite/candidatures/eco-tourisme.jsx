import React from "react";
import { useFetchEcoTourisme } from "hooks/useFetchEcoTourisme";

const Eco = () => {
  const data = useFetchEcoTourisme();
  console.log(data);
  return <div>Eco tourisme</div>;
};
export default Eco;
