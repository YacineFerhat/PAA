import React from "react";
import { useFetchBio } from "hooks/useFetchBio";

const Bio = () => {
  const data = useFetchBio();
  console.log(data);
  return <div>Bio</div>;
};
export default Bio;
