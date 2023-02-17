import React, { Component } from "react";
import { Link } from "react-router-dom";

//Link and to instead of a and href : does not refresh page like latter two and saves those rest calls to be made
export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Food Delivery</h1>
                <p className="lead">
                  {" "}
                  Order your favourite food at anytime with Food Delivery!
                </p>
                <hr />
                <Link to="/api/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/api/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
