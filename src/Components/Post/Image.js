import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Settings from "../../utils/settings";

const Image = ({ children }) => {
  const imageId = children.relationships.field_image.data.id;
  const alt = children.relationships.field_image.data.meta.alt;

  const [image, setImage] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(Settings.URL_API + "jsonapi/file/file/" + imageId)
      .then((res) => {
        setImage(res.data.data);
        //console.log(res.data.data);
        setLoad(true);
      })
      .catch((err) => {
        //setError(err.message);
        //setLoad(true);
      });
  }, [imageId]);

  if (load) {
    return (
      <div className="card-image">
        <img
          className="padding-top-bottom-medium"
          srcSet={Settings.URL_API + image.attributes.uri.url}
          alt={alt}
        />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Image;
