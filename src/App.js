//import 'highlight.js/styles/dracula.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Post from "./Components/Post/Post";
import CheckPost from "./Components/CheckPost";

import "spectre.css/dist/spectre.min.css";
import "prismjs/themes/prism-okaidia.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/blog/:path/" component={Post} /> */}
          <Route exact path="/blog/:path/" component={CheckPost} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
