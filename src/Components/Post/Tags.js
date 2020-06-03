import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as Settings from "../../settings";

import { Loading, Error } from "../Utils";

const Tags = ({ post }) => {
  const postId = post.id;

  const [tags, setTags] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(Settings.URL_API + `/jsonapi/node/article/${postId}/field_tags`)
      .then((res) => {
        setTags(res.data.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [postId]);

  if (load) {
    return (
      <>
        {error ? (
          <Error error={error} />
        ) : (
          <div className="columns">
            <div className="column col-12">
              {tags.map((item) => (
                <Link
                  to={item.attributes.path.alias}
                  key={item.id}
                  className="chip"
                >
                  {item.attributes.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Tags;
