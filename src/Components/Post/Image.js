import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Settings from "../../settings";
import { Loading, Error } from "../Utils";

const Image = ({ post }) => {
  const imageId = post.relationships.field_image.data.id;
  const alt = post.relationships.field_image.data.meta.alt;

  const [image, setImage] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(Settings.URL_API + `/jsonapi/file/file/${imageId}`)
      .then((res) => {
        setImage(res.data.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [imageId]);

  if (load) {
    return (
      <>
        {error ? (
          <Error error={error} />
        ) : (
          <div className="card-image">
            <img
              srcSet={Settings.URL_SITE + image.attributes.uri.url}
              alt={alt}
            />
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
};

export default Image;
