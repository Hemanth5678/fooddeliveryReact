import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { register } from "../action/authAction";

const Register = ({ isAuthenticated, register }) => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    Housenumber: "",
    street: "",
    city: "",
    state: "",
    //role: "",
  });
  const [error, setError] = useState({});

  const {
    username,
    email,
    password,
    password2,
    Housenumber,
    street,
    city,
    state,
  } = formData;
  var address = Housenumber + street + city + state;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from register");
    console.log(JSON.stringify(formData));

    const houseno = document.getElementById("Housenumber");
    const street = document.getElementById("street");
    const city = document.getElementById("city");

    const state = document.getElementById("state");
    var address =
      houseno.value +
      ", " +
      street.value +
      ", " +
      city.value +
      ", " +
      state.value;
    if (password !== password2) {
    } else {
      register({ username, email, password, address });
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/home"></Navigate>;
  }
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
              Create your Food Delivery account
            </p>
            <form
              onSubmit={onSubmit}
              //onInput="address.value=Housenumber.value + street.value + city.value+ state.value"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="username"
                  onChange={onChange}
                  required
                />
                <div>{error.name}</div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <div>{error.email}</div>
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="Housenumber"
                  className="form-control form-control-lg"
                  placeholder="Housenumber"
                  name="Housenumber"
                  onChange={onChange}
                />
                <div>{error.address}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="street"
                  className="form-control form-control-lg"
                  placeholder="street"
                  name="street"
                  onChange={onChange}
                />
                <div>{error.address}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="city"
                  className="form-control form-control-lg"
                  placeholder="city"
                  name="city"
                  onChange={onChange}
                />
                <div>{error.address}</div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="state"
                  className="form-control form-control-lg"
                  placeholder="state"
                  name="state"
                  onChange={onChange}
                />
                <div>{error.address}</div>
              </div>

              {/* <div className="form-group">
                <input
                  type="role"
                  className="form-control form-control-lg"
                  placeholder="Add roles"
                  name="role"
                  onChange={onChange}
                />
                <div>{error.role}</div>
              </div> */}
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <div>{error.password}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={onChange}
                />
                <div>{error.password2}</div>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);

{
  /* <h3 class="text-center">New users please register here</h3>
<div class="row">
  <div class="col-2"></div>
  <div class="col">
    <form #f1="ngForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email address <sup>*</sup></label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          [(ngModel)]="user.email"
          aria-describedby="emailHelp"
          required
          pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          #email="ngModel"
        />
        <div
          class="text-danger text-small"
          *ngIf="email.dirty && email.invalid"
        >
          <div *ngIf="email.errors && email.errors['required']">
            This field is required
          </div>
          <div *ngIf="email.errors && email.errors['pattern']">
            Doesn't look like a valid email
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Fullname <sup>*</sup></label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          [(ngModel)]="user.name"
          aria-describedby="nameHelp"
          #name="ngModel"
          required
          minlength="3"
          maxlength="25"
        />
        <div class="text-danger text-small" *ngIf="name.dirty && name.invalid">
          <div *ngIf="name.errors && name.errors['required']">
            This field is required
          </div>
          <div *ngIf="name.errors && name.errors['minlength']">
            At least 3 letters required for this field
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password <sup>*</sup></label>
        <input
          type="password"
          class="form-control"
          id="password"
          [(ngModel)]="user.password"
          name="password"
          #password="ngModel"
          required
          minlength="6"
        />
        <div
          class="text-danger text-small"
          *ngIf="password.dirty && password.invalid"
        >
          <div *ngIf="password.errors && password.errors['required']">
            This field is required
          </div>
          <div *ngIf="password.errors && password.errors['minlength']">
            At least 6 letters required for this field
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="cpassword" class="form-label">Confirm password</label>
        <input
          type="password"
          class="form-control"
          id="cpassword"
          name="cpassword"
          [(ngModel)]="cpassword"
          #cpassword1="ngModel"
        />
        <div class="text-danger text-small" *ngIf="password.dirty">
          <div *ngIf="!passwordMatch">Passwords do not match!</div>
        </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <label for="houseno" class="form-label">House No</label>
          <input
            type="text"
            class="form-control"
            id="houseno"
            name="houseno"
            [(ngModel)]="user.address.houseno"
            aria-describedby="housenoHelp"
          />
        </div>
        <div class="col mb-3">
          <label for="street" class="form-label">Street</label>
          <input
            type="text"
            class="form-control"
            id="street"
            name="street"
            [(ngModel)]="user.address.street"
            aria-describedby="streetHelp"
          />
        </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <label for="city" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            name="city"
            [(ngModel)]="user.address.city"
            aria-describedby="cityHelp"
          />
        </div>
        <div class="col mb-3">
          <label for="state" class="form-label">State</label>
          <input
            type="text"
            class="form-control"
            id="state"
            name="state"
            [(ngModel)]="user.address.state"
            aria-describedby="stateHelp"
          />
        </div>
      </div>
      <div class="col mb-3">
        <label for="zipcode" class="form-label">Zipcode</label>
        <input
          type="text"
          class="form-control"
          id="zipcode"
          name="zipcode"
          [(ngModel)]="user.address.zipcode"
          aria-describedby="zipcodeHelp"
        />
      </div>
      <button
        type="submit"
        class="btn"
        [ngClass]="{ 'btn-primary': f1.valid, 'btn-danger': f1.invalid }"
        [disabled]="f1.invalid"
        (click)="register()"
      >
        Register
      </button>
    </form>
  </div>
  <div class="col-2"></div>
</div> */
}
