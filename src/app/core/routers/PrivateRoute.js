import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/api/login");
    }
  });
  if (isAuthenticated) {
    return <Component></Component>;
  }
  return <Navigate to="/api/login"></Navigate>;

  return " ";
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  //component: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
