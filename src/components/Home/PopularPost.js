import React from "react";

const posts = props => {
  return (
    <section id="poplularsinglePost">
      <div className="postlist">
        <ul>
          <li>
            <div className="row">
              <div className="col-md-4 col-sm-3 col-3 imageContainer">
                <img
                  src="https://static1.squarespace.com/static/559b4748e4b01adcb4f88149/t/5750665601dbae623ecc8154/1464886878950/kelly.jpg?format=300w"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-sm-9 col-9 infoContainer">
                <h4>
                  16 apps that will help you travel the worlds with all of us{" "}
                </h4>
                <span>by ishraqe manjur</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default posts;
