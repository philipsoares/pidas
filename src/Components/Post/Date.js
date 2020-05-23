import React from "react";

const Date = ({ children }) => {
  return (
    <p className="post-date text-gray">
      <span>Publicado em </span>
      <time dateTime="2019-03-27">{children.attributes.created}</time>
    </p>
  );
};

export default Date;
