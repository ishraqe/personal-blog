import React, { Component } from "react";
import Blog from "./Blog";

export default class BlogList extends Component {
  render() {
    return this.props.blogs.map(list => {
      return <Blog key={list.id} blog={list} {...this.props} />;
    });
  }
}
