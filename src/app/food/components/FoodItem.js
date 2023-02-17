import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { getProfileById } from "../actions/profileAction";

export const FoodItem = ({
  food: {
    //name,
    // status,
    // company,
    // location,
    // skills,
    id,
    foodCost,
    foodName,
    foodType,
    description,
    foodPic,
  },
}) => {
  //console.log(foodName);
  const [names, setNames] = useState([]);

  const onChange = (id) => {
    setNames({ ...names, id });
    console.log(names);
  };
  return (
    <div className="card">
      <Link to={`/food/${id}`}>
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
        </div>
        <div className="card-img-container">
          <img
            src={foodPic}
            className="card-img-top col-md-6 col-lg-6 d-inline-block col-sm-4"
            alt={foodName}
            height={"100px"}
          />
        </div>
      </Link>
      <button className="btn btn-primary" onClick={(e) => onChange(id)}>
        add cart Food
      </button>
    </div>

    // <article className="card">
    //   <div className="profile bg-light">
    //     <img
    //       className="img my-1"
    //       height="300"
    //       width="10"
    //       src={foodPic}
    //       alt=""
    //     />
    //     <div>
    //       <h2>{foodName}</h2>
    //       <p>{foodCost && <span> at just Rs{foodCost}</span>}</p>
    //       {/* <p>{description && <span> {description}</span>}</p> */}
    //       <p className="my-1">
    //         {foodType && <span> Foodtype:{foodType}</span>}
    //       </p>
    //       <Link to={`/food/${id}`} className="btn btn-primary">
    //         View Food
    //       </Link>
    //     </div>
    //   </div>
    // </article>
  );
};

FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
