//import 'highlight.js/styles/dracula.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import * as Settings from "../utils/settings";

import Image from "../Components/Post/Image";
import Title from "../Components/Post/Title";
import Date from "../Components/Post/Date";
import Tags from "../Components/Post/Tags";
import Summary from "../Components/Post/Summary";

function Home() {
  const location = useLocation();
  console.log(location);
  // const tagName = location.state.tagName;
  const tagName = "";
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [pager, setPager] = useState("page[offset]=0");
  //const tagfilter = "&filter[field_tags.name][value]=" + tagName;
  // const [tagName, setTagName] = useState("filter[field_tags.name][value]=reactjs");

  //http://pidas.docksal/jsonapi/node/article/?page[limit]=2&page[offset]=0&filter[field_tags.name][value]=reactjs

  //essa é a url do categoria tags
  //"&filter[field_tags.name][value]=javascript"

  useEffect(() => {
    axios
      .get(
        Settings.URL_API +
          "jsonapi/node/article?sort=-created&page[limit]=2&" +
          pager
      )
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [pager]);

  function paginator(page_url) {
    let url = new URL(page_url);
    let page_offset = url.searchParams.get("page[offset]");
    setPager("page[offset]=" + page_offset);
  }

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
                        state: {
                          postId: item.id,
                        },
                      }}
                    >
                      <Image children={item} />
                    </Link>
                    <header className="card-header text-center">
                      <Link
                        to={{
                          pathname: item.attributes.path.alias,
                          state: {
                            postId: item.id,
                          },
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
            <div className="paginador">
              <ul className="pagination">
                {posts.links.hasOwnProperty("prev") ? (
                  <li className="page-item">
                    <a onClick={() => paginator(posts.links.prev.href)}>
                      Previous
                    </a>
                  </li>
                ) : null}
                {posts.links.hasOwnProperty("next") ? (
                  <li className="page-item">
                    <a onClick={() => paginator(posts.links.next.href)}>Next</a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Home;
