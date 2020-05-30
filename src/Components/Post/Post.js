import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Settings from "../../settings";
import { Loading, Error } from "../Utils";
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
      .get(Settings.URL_API + `jsonapi/node/article/${postId}`)
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
          <Error error={error} />
        ) : (
          <div className="container grid-md">
            <article className="card">
              <header className="card-header text-center">
                <Title post={post} />
                <PostDate post={post} />
                <Tags post={post} />
              </header>

              <Image post={post} />

              <Body post={post} />
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
