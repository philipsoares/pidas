import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as Settings from "../../utils/settings";

const Tags = ({ children }) => {
  const postId = children.id;

  const [tags, setTags] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(Settings.URL_API + "jsonapi/node/article/" + postId + "/field_tags")
      .then((res) => {
        setTags(res.data.data);
        console.log(res.data.data);
        setLoad(true);
      })
      .catch((err) => {
        //setError(err.message);
        //setLoad(true);
      });
  }, [postId]);

  if (load) {
    return (
      <div className="columns">
        <div className="column col-12">
          {tags.map((item) => (
            <Link
              to={{
                pathname: item.attributes.path.alias,
                state: {
                  tagName: item.attributes.name,
                },
              }}
              key={item.id}
              className="chip"
            >
              {item.attributes.name}
            </Link>

            /* <a href={item.attributes.path.alias} key={item.id} className="chip">
              {item.attributes.name}
            </a> */
          ))}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Tags;
