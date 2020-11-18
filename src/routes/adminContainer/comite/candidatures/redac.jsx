import React from "react";
import { useFetchRedac } from "hooks/useFetchRedac";

const Redac = () => {
  const data = useFetchRedac();
  console.log(data);
  return <div>Rédaction</div>;
};
export default Redac;
