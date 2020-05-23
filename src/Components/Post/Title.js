import React from "react";

const Title = ({ children }) => {
  return <h1>{children.attributes.title}</h1>;
};

export default Title;
