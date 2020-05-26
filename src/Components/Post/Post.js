import React, { useState, useEffect } from "react";
import axios from "axios";

import { Loading } from "../Utils";
import Title from "./Title";
import PostDate from "./PostDate";
import Tags from "./Tags";
import Image from "./Image";
import Body from "./Body";

function Post(props) {
  const postId = props.postId;
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://pidas.docksal/jsonapi/node/article/" + postId)
      .then((res) => {
        setPost(res.data.data);
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
          <div>{error}</div>
        ) : (
          <div className="container grid-md">
            <article className="card padding-top-bottom-large">
              <header className="card-header text-center">
                <Title children={post} />
                <PostDate children={post} />
                <Tags children={post} />
              </header>

              <Image children={post} />

              <Body children={post} />
            </article>
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Post;
