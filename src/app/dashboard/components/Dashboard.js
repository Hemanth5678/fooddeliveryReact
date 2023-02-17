import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../../food/actions/foodAction";
// import DashboardOptions from "./DashboardOptions";

// import DisplayExp from "./DisplayExp";
// import { getCurrentProfile } from "../../profiles/actions/profileAction";
import { Link } from "react-router-dom";
import DisplayFood from "../../food/components/DisplayFood";
import { loadUser } from "../../auth/action/authAction";

const Dashboard = ({ auth: { user }, getFoods, food: { foods } }) => {
  useEffect(() => {
    // console.log("fistrrr");
    getFoods();
  }, [getFoods]);
  //console.log(JSON.stringify(food));
  //loadUser();
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Hi {user && user.username}
      </p>
      <div>
        Types :
        <a
          href={"/food/foodtype/INDIAN"}
          className="btn btn-primary my-3 me-2  btn-lg "
        >
          Indian
        </a>
        <a
          href={"/food/foodtype/CHINESE"}
          className="btn btn-primary my-3 me-2 btn-lg "
        >
          Chinese
        </a>
        <a
          href={"/food/foodtype/MEXICAN"}
          className="btn btn-primary my-3 me-2 btn-lg"
        >
          Mexican
        </a>
      </div>

      {foods !== null ? (
        <>
          {<DisplayFood></DisplayFood>}
          <div className="my-2">
            <button className="btn btn-danger">
              <i className="fas fa-user-minus"></i>
              Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>
            There are no restaurants accepting the order currently. Please visit
            after some time
          </p>
          <Link to="/food/add-food" className="btn btn-primary my-1">
            Add Foods
          </Link>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  food: PropTypes.object.isRequired,
  //getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  food: state.food,
});

const mapDispatchToProps = { getFoods };
//const mapDispatchToProps = { getCurrentProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
