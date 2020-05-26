import React from "react";
import reactHtmlParser from "react-html-parser";

const Summary = ({ post }) => {
  const summary = post.attributes.body.summary;
  const options = {
    decodeEntities: true,
  };

  return (
    <section className="card-body">
      <div>{reactHtmlParser(summary, options)}</div>
    </section>
  );
};

export default Summary;
