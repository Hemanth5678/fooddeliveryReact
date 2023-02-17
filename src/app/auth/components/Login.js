//rafc
//functions are stateless - use hook - useState

import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../action/authAction";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  //* Redirect if logged in

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <Fragment>
      <div className="col-md-12 text-center">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>

        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

// import React, { useState } from "react";
// import axios from "axios";

// export const Login = (e) => {
//   const [formData, setformData] = useState({ email: "", password: "" });
//   const [error, setError] = useState({});

//   const { email, password } = formData;
//   //const email =formData.email
//   //const password =formData.password

//   const onChange = (e) => {
//     setformData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("hello from login");
//     console.log(JSON.stringify(formData));

//     axios
//       .post("/api/users/login", formData)
//       .then((res) => console.log(JSON.stringify(res)))
//       .catch((err) => {
//         setError(err.response.data);
//         console.log(JSON.stringify(err.response.data));
//       });
//   };
//   return (
//     <div className="login">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 m-auto">
//             <h1 className="display-4 text-center">Log In</h1>
//             <p className="lead text-center">
//               Sign in to your DevConnector account
//             </p>
//             <form onSubmit={onSubmit}>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control form-control-lg"
//                   placeholder="Email Address"
//                   name="email"
//                   onChange={onChange}
//                 />
//                 <div>{error.email}</div>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control form-control-lg"
//                   placeholder="Password"
//                   name="password"
//                   onChange={onChange}
//                 />
//                 <div>{error.password}</div>
//               </div>
//               <input type="submit" className="btn btn-info btn-block mt-4" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
