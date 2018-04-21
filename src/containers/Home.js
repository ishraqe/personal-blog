import React, { Component } from "react";
import Aux from "../hoc/aux";
import Blogs from "../components/Home/BlogList";
import ProfileCard from "../components/Home/Profile";

export default class Home extends Component {
  render() {
    return (
      <Aux>
        <section id="main" className="container">
          <div className="row">
            <div class="col-md-8 left-side">
              <Blogs />
            </div>
            <div class="col-md-4 right-side">
              <ProfileCard />
            </div>
          </div>
        </section>
      </Aux>
    );
  }
}
