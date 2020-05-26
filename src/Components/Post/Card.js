import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as Settings from "../../settings";
import { Loading, Error } from "../Utils";
import Image from "../../Components/Post/Image";
import Title from "../../Components/Post/Title";
import PostDate from "../../Components/Post/PostDate";
import Tags from "../../Components/Post/Tags";
import Summary from "../../Components/Post/Summary";
import Paginator from "../../Components/Post/Paginator";

function Card({ tagName }) {
  const [posts, setPosts] = useState([]);
  const [pager, setPager] = useState("&page[offset]=0");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  var tagFilter = "";
  if (tagName) tagFilter = "&filter[field_tags.name][value]=" + tagName;

  useEffect(() => {
    axios
      .get(
        Settings.URL_API +
          `jsonapi/node/article?sort=created&page[limit]=2${pager}${tagFilter}`
      )
      .then((res) => {
        setPosts(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [pager, tagFilter]);

  if (load) {
    return (
      <>
        {error ? (
          <Error error={error} />
        ) : (
          <div className="container grid-md">
            <div className="columns">
              {posts.data.map((item) => (
                <div className="column col-6 col-xs-12" key={item.id}>
                  <article className="card">
                    <Link to={item.attributes.path.alias}>
                      <Image post={item} />
                    </Link>
                    <header className="card-header text-center">
                      <Link to={item.attributes.path.alias}>
                        <Title post={item} />
                      </Link>
                      <PostDate post={item} />
                      <Tags post={item} />
                    </header>
                    <Summary post={item} />
                  </article>
                </div>
              ))}
            </div>
            <Paginator
              posts={posts}
              paginator={(pager) => {
                return setPager(pager);
              }}
            />
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
}

export default Card;
