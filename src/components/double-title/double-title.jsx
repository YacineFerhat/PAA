import React from "react";

const DoubleTitle = ({ sub, title }) => {
  return (
    <div className="has-text-centered">
      <h1 className="title is-4 " style={{ marginTop: "3%" }}>
        {title}
      </h1>
      <h1 className="subtitle is-6">{sub}</h1>
    </div>
  );
};

export default DoubleTitle;
