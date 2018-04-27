import React, { Component } from "react";
import "../../styles/css/admin/auth.css";

class Auth extends Component {
  render() {
    return (
      <section id="auth">
        <div className="container">
          <div className="row">
            <div className="col-md-12  form-container">
              <form>
                <div className="form-group">
                  <i class="fa fa-user-o" aria-hidden="true" />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <i class="fa fa-unlock-alt" aria-hidden="true" />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Auth;
