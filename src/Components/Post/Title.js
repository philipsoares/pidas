import React from "react";

const Title = ({ post }) => {
  return <h3>{post.attributes.title}</h3>;
};

export default Title;
