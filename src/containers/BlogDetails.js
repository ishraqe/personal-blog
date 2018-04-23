import React, { Component } from "react";
import Aux from "../hoc/aux";
import "../styles/css/blogSingle.css";

class Home extends Component {
  render() {
    return (
      <Aux {...this.props}>
        <div id="blogDetails">
          <div className="blogHeaderImageContainer">
            <h1>Why you should quit your job and travel now</h1>
            <div className="Author">
              <img
                src="https://w-dog.net/wallpapers/14/14/558002293736512/maija-girl-town-bokeh-wind-hair-jesse-herzog.jpg"
                alt="profileimage"
              />
              <h6>by Author</h6>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          sunt eos dolorum quidem, quibusdam eveniet ducimus voluptas possimus
          officiis modi quasi rem provident expedita, esse inventore odio a
          molestias odit. Lorem
        </div>
      </Aux>
    );
  }
}

export default Home;
