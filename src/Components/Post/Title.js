import React from "react";

const Title = ({ children }) => {
  return <h3>{children.attributes.title}</h3>;
};

export default Title;
