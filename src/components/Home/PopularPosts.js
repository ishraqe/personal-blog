import React, { Component } from "react";
import "../../styles/css/PopularPost.css";
import Post from "./PopularPost";

const post = [
  { id: 1, name: "ish" },
  { id: 2, name: "ish" },
  { id: 3, name: "ish" },
  { id: 4, name: "ish" }
];

export default class PopularPosts extends Component {
  render() {
    return post.map(list => {
      return <Post key={list.id} />;
    });
  }
}
