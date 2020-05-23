//import 'highlight.js/styles/dracula.css';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Post from "./Post/Post";
import Body from "./Home";
import Home from "./Home";

// import Body from "./Body";
// import Title from "./Title";
// import Date from "./Date";
// import Tags from "./Tags";
// import Image from "./Image";

function CheckPost() {
  const location = useLocation();
  console.log(location);
  const postId = location.state.postId;
  const tagName = location.state.tagName;

  // const [post, setPost] = useState([]);
  // const [load, setLoad] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://pidas.docksal/jsonapi/node/article/" + postId)
  //     .then((res) => {
  //       setPost(res.data.data);
  //       setLoad(true);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoad(true);
  //     });
  // }, [postId]);

  return <Post />;
  //return <Home tagName={tagName} />;
}

export default CheckPost;
