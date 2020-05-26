import React, { useEffect } from "react";
import reactHtmlParser from "react-html-parser";
import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css";

const Body = ({ children }) => {
  // const {
  //   body: [{ value: mybody }],
  // } = children;

  const bodyText = children.attributes.body.value;

  const options = {
    decodeEntities: true,
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <section className="card-body">
      <div>{reactHtmlParser(bodyText, options)}</div>
    </section>
  );
};

export default Body;
