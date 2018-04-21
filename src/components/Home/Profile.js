import React, { Component } from "react";
import "../../styles/css/ProfileCard.css";
export default class ProfileCard extends Component {
  render() {
    return (
      <div id="ProfileCard">
        <img
          src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.0-9/22549902_1753483964681497_8632648424798188386_n.jpg?_nc_cat=0&oh=8e1553914af2bf07c255f9f5f7edf1cc&oe=5B721C65"
          alt="Profile Image"
        />
        <div className="infoContainer">
          <h3>Ishraqe Manjur</h3>
          <h6>Software Engineer</h6>
          <span>Dhaka, Bangladesh</span>
        </div>
        <div className="socialInfo">
          <h4>2.5k follwes</h4>
        </div>
      </div>
    );
  }
}
