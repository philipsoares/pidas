import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import * as Settings from "./settings";
import { Loading, Error } from "./Components/Utils";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Post/Card";
import Post from "./Components/Post/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadPosts, setLoadPosts] = useState(false);
  const [loadTags, setLoadTags] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(Settings.URL_API + "jsonapi/node/article")
      .then((res) => {
        setPosts(res.data);
        setLoadPosts(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoadPosts(true);
      });
  }, []);

  useEffect(() => {
    axios
      .get(Settings.URL_API + "jsonapi/taxonomy_term/tags")
      .then((res) => {
        setTags(res.data);
        setLoadTags(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoadTags(true);
      });
  }, []);

  if (loadPosts && loadTags) {
    return (
      <>
        {error ? (
          <Error error={error} />
        ) : (
          <div className="app">
            <Router>
              <Header tags={tags} />
              <Switch>
                <Route exact path="/" component={Card} />
                {posts.data.map((item) => (
                  <Route
                    exact
                    key={item.id}
                    path={item.attributes.path.alias}
                    render={(props) => <Post {...props} postId={item.id} />}
                  />
                ))}
                {tags.data.map((item) => (
                  <Route
                    exact
                    key={item.id}
                    path={item.attributes.path.alias}
                    render={(props) => (
                      <Card {...props} tagName={item.attributes.name} />
                    )}
                  />
                ))}
              </Switch>
            </Router>
            <Footer />
          </div>
        )}
      </>
    );
  } else {
    return <Loading />;
  }
}

export default App;
