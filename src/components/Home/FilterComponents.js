import React, { Component } from "react";
import "../../styles/css/FilterComponent.css";

export default class FilterComponent extends Component {
  render() {
    return (
      <div id="FilterComponent">
        <div className="formContainer">
          <input
            placeholder="Enter what you want to find"
            type="text"
            className="search"
          />
          <div className="checkboxContainer">
            <div className="filterContainer">
              <p>All Categories</p>
            </div>
            <ul>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <span>12</span>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <span>12</span>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <span>12</span>
              </li>
              <li>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <span>12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
