import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="col-md-12 text-center">
      <div>
        My Profile
        <div>
          <a href={"/dashboard"} className="btn btn-primary my-3 btn-lg">
            Order food
          </a>
        </div>
      </div>
    </div>
  );
}
