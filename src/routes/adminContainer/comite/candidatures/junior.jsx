import React from "react";
import { useFetchJunior } from "hooks/useFetchJunior";

const Junior = () => {
  const data = useFetchJunior();
  console.log(data);
  return <div>Junior</div>;
};
export default Junior;
