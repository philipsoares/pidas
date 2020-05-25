import React from "react";

const PostDate = ({ children }) => {
  const date = new Date(children.attributes.created).toLocaleDateString();

  return (
    <p className="post-date text-gray">
      <span>Publicado em </span>
      <time dateTime={date}>{date}</time>
    </p>
  );
};

export default PostDate;
