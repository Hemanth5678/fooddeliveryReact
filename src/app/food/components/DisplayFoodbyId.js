import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFoodById, deleteFood, updateFood } from "../actions/foodAction";
// import { DisplayFoodAbout } from "./DisplayFoodAbout";
// import { DisplayFoodEducation } from "./DisplayFoodEducation";
// import { DisplayFoodExperience } from "./DisplayFoodExperience";
// import { DisplayFoodGithub } from "./DisplayFoodGithub";
// import { DisplayFoodTop } from "./DisplayFoodTop";

export const DisplayFoodbyId = ({
  getFoodById,
  food: {
    //name,
    // status,
    // company,
    // location,
    // skills,

    food,
  },
  deleteFood,
}) => {
  const { id } = useParams();
  //console.log("id is this " + _id);

  useEffect(() => {
    getFoodById(id);
  }, [getFoodById]);

  return (
    <section className="container">
      <Link to="/dashboard" className="btn btn-primary my-3">
        Back To Foods
      </Link>

      <div className="profile bg-light">
        <img className="round-img my-1" src={food && food.foodPic} alt="" />
        <div>
          <h2>{food && food.foodName}</h2>
          <p>{food && <span> at just Rs{food.foodCost}</span>}</p>
          <p>{food && <span> {food.description}</span>}</p>
          <p className="my-1">
            {food && <span> Foodtype:{food.foodType}</span>}
          </p>

          <Link
            className="btn btn-primary"
            onClick={(e) => deleteFood(id, e)}
            to="/dashboard"
          >
            Delete Food
          </Link>
          <Link className="btn btn-primary" to={`/food/update/${id}`}>
            Update Food
          </Link>
          {/* <Link to={`/food/${id}`} className="btn btn-primary">
            View Food
          </Link> */}
        </div>
      </div>
    </section>
  );
};

DisplayFoodbyId.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodById: PropTypes.func.isRequired,
  deleteFood: PropTypes.func.isRequired,
  //   auth: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
  //   auth: state.Food.Food.auth,
});

const mapDispatchToProps = { getFoodById, deleteFood };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFoodbyId);
