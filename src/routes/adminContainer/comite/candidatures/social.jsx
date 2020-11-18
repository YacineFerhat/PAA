import React from "react";
import { useFetchSocial } from "hooks/useFetchSocial";

const Social = () => {
  const data = useFetchSocial();
  console.log(data);
  return <div>Social</div>;
};
export default Social;
