import React from "react";
import "../../styles/css/blog.css";
const Blog = props => {
  return (
    <section id="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="imageContainer">
              <img
                src="https://c1.staticflickr.com/9/8293/7589079704_0a71ca98b6_b.jpg"
                alt="cover"
              />
            </div>
            <div className="descContainer">
              <div className="info">
                <h1>Marquis Doyle</h1>
                <div className="timeCommentContainer">
                  <div className="timeContainer">
                    <i className="fa fa-calendar-o" aria-hidden="true" />{" "}
                    <span>May 29,2016</span>
                  </div>
                  <div className="commentContainer">
                    <i className="fa fa-comment-o" aria-hidden="true" />{" "}
                    <span>12 Comments</span>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  saepe dolores, architecto eos ipsa repellendus rem
                  necessitatibus similique sunt aperiam culpa commodi, quidem
                  eius veritatis corrupti. Ratione optio quis ipsa?
                </p>
              </div>
              <div className="buttonContainer">
                <div className="tagContainer">
                  <button className="btn btn-outline-success tagButton">
                    travel
                  </button>
                </div>
                <button
                  className="btn btn-success finButton"
                  onClick={() => console.log(props.history.push("/detail"))}
                >
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
