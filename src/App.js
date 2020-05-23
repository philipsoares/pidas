//import 'highlight.js/styles/dracula.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import * as Settings from "./utils/settings";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Post/Card";
import Post from "./Components/Post/Post";

import "spectre.css/dist/spectre.min.css";
import "prismjs/themes/prism-okaidia.css";
import "./App.scss";

function App() {
  const [postsPaths, setPostsPaths] = useState([]);
  const [tagsPaths, setTagsPaths] = useState([]);
  const [loadPosts, setLoadPosts] = useState(false);
  const [loadTags, setLoadTags] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(Settings.URL_API + "jsonapi/node/article")
      .then((res) => {
        setPostsPaths(res.data);
        //console.log(res.data);
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
        setTagsPaths(res.data);
        //console.log(res.data);
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
          <div>{error}</div>
        ) : (
          <div className="App">
            <Header />
            <Router>
              <Switch>
                <Route exact path="/" component={Card} />
                {postsPaths.data.map((item) => (
                  <Route
                    exact
                    key={item.id}
                    path={item.attributes.path.alias}
                    render={(props) => <Post {...props} postId={item.id} />}
                  />
                ))}
                {tagsPaths.data.map((item) => (
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
    return <div>Loading...</div>;
  }
}

export default App;
