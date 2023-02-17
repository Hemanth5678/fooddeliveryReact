import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../../auth/action/authAction";
export const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Food Delivery
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">Welcome </a>
            </li>
            <li>
              <Link to="/food/add-food" className="nav-link">
                Add Foods
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/order-history">
                Order history
              </a>
            </li> */}

            {/* <li className="nav-item">
              <a className="nav-link" href="/add-food-item">
                Add food item
              </a>
            </li> */}

            <li className="nav-item">
              <Link onClick={logout} className="nav-link" to="/">
                Logout
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/view-cart">
                {/* <i className="bi bi-cart"></i> ({{ getCartSize }}) ₹ {{ cartTotal }} */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  const guestLinks = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-1">
          <li className="nav-item">
            <Link className="btn btn-lg btn-light" to="/api/register">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-lg btn-light" to="/api/login">
              Login
            </Link>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/home">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container">
//     <a class="navbar-brand" routerLink="/">Food Delivery</a>
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item" *ngIf="!isAuthenticated">
//           <a class="nav-link" routerLink="/register">Register</a>
//         </li>
//         <li class="nav-item" *ngIf="!isAuthenticated">
//           <a class="nav-link" routerLink="/login">Login</a>
//         </li>
//         <li class="nav-item" *ngIf="isAuthenticated">
//           <a class="nav-link">Welcome {{ loggedInName }}</a>
//         </li>
//         <li class="nav-item" *ngIf="isAuthenticated && !isAdmin">
//           <a class="nav-link" routerLink="/order-history">Order history</a>
//         </li>

//         <li class="nav-item" *ngIf="isAuthenticated && isAdmin">
//           <a class="nav-link" routerLink="/add-food-item">Add food item</a>
//         </li>

//         <li class="nav-item" *ngIf="isAuthenticated">
//           <a class="nav-link" routerLink="/" (click)="logout()">Logout</a>
//         </li>

//         <li class="nav-item" *ngIf="!isCartEmpty && !isAdmin">
//           <a class="nav-link" routerLink="/view-cart">
//             <i class="bi bi-cart"></i> ({{ getCartSize }}) ₹ {{ cartTotal }}
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
