import React, { Component } from "react";
import Aux from "../hoc/aux";
import "../styles/css/blogSingle.css";

class Home extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <Aux {...this.props} isTop={this.state.isTop}>
        <div id="blogDetails" onScroll={() => console.log("scroll")}>
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
          <div className="blogDetails comment-container">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="socalTime">
                    <div className="comment">
                      <div className="timeContainer">
                        <i className="fa fa-calendar-o" aria-hidden="true" />{" "}
                        <span>May 29,2016</span>
                      </div>
                      <div className="commentContainer">
                        <i className="fa fa-comment-o" aria-hidden="true" />{" "}
                        <span>12 Comments</span>
                      </div>
                    </div>
                    <div className="socialShare">
                      <i className="fa fa-facebook-square" aria-hidden="true" />
                      <i className="fa fa-twitter-square" aria-hidden="true" />
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="blogDescription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quaerat officiis suscipit veniam nulla provident! Illum
                    totam vel aliquam magnam deleniti in autem, accusamus fugiat
                    porro officia id voluptatibus sint neque qui. Debitis ut et
                    officia at, adipisci libero labore sint voluptate veritatis
                    sunt, nam minima cumque sit obcaecati amet quaerat.
                    Voluptatem assumenda repellat temporibus maiores
                    exercitationem vero inventore repudiandae totam voluptatibus
                    nihil. Quae qui enim magni laborum delectus debitis
                    aspernatur ratione minus officia laboriosam sunt, eaque
                    pariatur consectetur laudantium? Ipsa autem eius neque quasi
                    quas praesentium eaque! Nesciunt a, ullam quasi fugiat saepe
                    voluptates? Facere ipsum cupiditate et maiores fuga?
                  </div>
                  <div className="tagContainer">
                    <button className="btn btn-outline-success tagButton">
                      travel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="blog-Comments">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="similarPost">
                  <h2>Similar Posts</h2>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="popuplar-Post">
                        <div className="info">
                          <h2>16 app that will help you to travel</h2>
                          <div className="userTime">
                            <div>by John doe</div>
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span>
                            </div>
                            <div className="comment">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>13 comments</span>
                            </div>
                          </div>
                        </div>
                        <div className="imageContainer">
                          <img
                            src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                            alt=""
                            className="float-right"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="popuplar-Post">
                        <div className="info">
                          <h2>16 app that will help you to travel</h2>
                          <div className="userTime">
                            <div>by John doe</div>
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span>
                            </div>
                            <div className="comment">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>13 comments</span>
                            </div>
                          </div>
                        </div>
                        <div className="imageContainer">
                          <img
                            src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                            alt=""
                            className="float-right"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="popuplar-Post">
                        <div className="info">
                          <h2>16 app that will help you to travel</h2>
                          <div className="userTime">
                            <div>by John doe</div>
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span>
                            </div>
                            <div className="comment">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>13 comments</span>
                            </div>
                          </div>
                        </div>
                        <div className="imageContainer">
                          <img
                            src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                            alt=""
                            className="float-right"
                          />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="popuplar-Post">
                        <div className="info">
                          <h2>16 app that will help you to travel</h2>
                          <div className="userTime">
                            <div>by John doe</div>
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span>
                            </div>
                            <div className="comment">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>13 comments</span>
                            </div>
                          </div>
                        </div>
                        <div className="imageContainer">
                          <img
                            src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                            alt=""
                            className="float-right"
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button className="btn btn-outline-dark">
                    <i class="fa fa-arrow-left" aria-hidden="true" />
                    Back to blog
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="commentwrapper">
                  <div className="commentForm">
                    <h2>Comments</h2>
                    <form>
                      <textarea className="form-control" cols="25" rows="8" />
                      <button className="btn btn-outline-success">
                        Post comment
                      </button>
                    </form>
                  </div>
                  <div className="commentList">
                    <ul class="list-group comment-group">
                      <li class="list-group-item comment-group-item">
                        <div className="row">
                          <div className="col-md-2 profileInfo ">
                            <img
                              src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                              alt="profile"
                            />
                            <h6>Juliah Joeh</h6>
                          </div>
                          <div className="col-md-10 comment-info ">
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span> <span>8:01 pm</span>
                            </div>
                            <p>
                              Is there any app that will help you pay for all
                              the travel?
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item comment-group-item">
                        <div className="row">
                          <div className="col-md-2 profileInfo ">
                            <img
                              src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                              alt="profile"
                            />
                            <h6>Juliah Joeh</h6>
                          </div>
                          <div className="col-md-10 comment-info ">
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span> <span>8:01 pm</span>
                            </div>
                            <p>
                              Is there any app that will help you pay for all
                              the travel?
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item comment-group-item">
                        <div className="row">
                          <div className="col-md-2 profileInfo ">
                            <img
                              src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                              alt="profile"
                            />
                            <h6>Juliah Joeh</h6>
                          </div>
                          <div className="col-md-10 comment-info ">
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 29,2016</span> <span>8:01 pm</span>
                            </div>
                            <p>
                              Is there any app that will help you pay for all
                              the travel?
                            </p>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item comment-group-item">
                        <div className="row">
                          <div className="col-md-2 profileInfo ">
                            <img
                              src="http://static.tvgcdn.net/mediabin/showcards/celebs/a-b/thumbs/bryce-dallas-howard-143048_828x1104.png"
                              alt="profile"
                            />
                            <h6>Juliah Joeh</h6>
                          </div>
                          <div className="col-md-10 comment-info ">
                            <div className="timeDate">
                              <i
                                className="fa fa-calendar-o"
                                aria-hidden="true"
                              />{" "}
                              <span>May 21,2016</span> <span>8:01 pm</span>
                            </div>
                            <p>
                              Is there any app that will help you pay for all
                              the travel?
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Home;
