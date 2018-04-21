import React, { Component } from "react";
import Blog from "./Blog";

const blogs = [
  { id: 1, name: "ish" },
  { id: 1, name: "ish" },
  { id: 1, name: "ish" },
  { id: 1, name: "ish" }
];

export default class BlogList extends Component {
  render() {
    return blogs.map(list => {
      return <Blog />;
    });
  }
}
