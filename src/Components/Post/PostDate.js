import React from "react";

const PostDate = ({ post }) => {
  const date = new Date(post.attributes.created).toLocaleDateString();

  return (
    <p className="text-gray">
      <span>Publicado em </span>
      <time dateTime={date}>{date}</time>
    </p>
  );
};

export default PostDate;
