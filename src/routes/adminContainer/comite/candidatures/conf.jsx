import React from "react";
import { useFetchConf } from "hooks/useFetchConf";

const Conf = () => {
  const data = useFetchConf();
  console.log(data);
  return <div>Conf</div>;
};
export default Conf;
