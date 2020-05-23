import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as Settings from "../../utils/settings";

import Image from "../../Components/Post/Image";
import Title from "../../Components/Post/Title";
import Date from "../../Components/Post/Date";
import Tags from "../../Components/Post/Tags";
import Summary from "../../Components/Post/Summary";
import Paginator from "../../Components/Post/Paginator";

function Card(props) {
  const [posts, setPosts] = useState([]);
  const [pager, setPager] = useState("page[offset]=0");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  var tagName = "";
  if (props.tagName !== undefined) {
    tagName = "&filter[field_tags.name][value]=" + props.tagName;
  }

  useEffect(() => {
    axios
      .get(
        Settings.URL_API +
          "jsonapi/node/article?sort=-created&page[limit]=2&" +
          pager +
          tagName
      )
      .then((res) => {
        setPosts(res.data);
        //console.log(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [pager, tagName]);

  if (load) {
    return (
      <>
        {error ? (
          <div>{error}</div>
        ) : (
          <div className="container grid-md">
            <div className="columns">
              {posts.data.map((item) => (
                <div className="column col-6 col-xs-12" key={item.id}>
                  <article className="card padding-top-bottom-large">
                    <Link
                      to={{
                        pathname: item.attributes.path.alias,
                      }}
                    >
                      <Image children={item} />
                    </Link>
                    <header className="card-header text-center">
                      <Link
                        to={{
                          pathname: item.attributes.path.alias,
                        }}
                      >
                        <Title children={item} />
                      </Link>

                      <Date children={item} />
                      <Tags children={item} />
                    </header>

                    <Summary children={item} />
                  </article>
                </div>
              ))}
            </div>
            <Paginator
              children={posts}
              paginator={(pager) => setPager(pager)}
            />
          </div>
        )}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Card;
