import React, { Component } from "react";
import Aux from "../hoc/aux";
import Blogs from "../components/Home/BlogList";
import ProfileCard from "../components/Home/Profile";
import FilterComponent from "../components/Home/FilterComponents";
import PopularPost from "../components/Home/PopularPosts";
import PopularTags from "../components/Home/PopularTags";
const blogs = [
  { id: 1, name: "ish" },
  { id: 2, name: "ish" },
  { id: 3, name: "ish" },
  { id: 4, name: "ish" }
];

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <Aux>
        <section id="main" className="container">
          <div className="row">
            <div className="col-md-8 left-side">
              <Blogs {...this.props} blogs={blogs} />
            </div>
            <div className="col-md-4 right-side">
              <ProfileCard />
              <FilterComponent />
              <PopularPost />
              <PopularTags />
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}
