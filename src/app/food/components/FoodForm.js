import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { addFood } from "../../food/actions/foodAction";

const initialState = {
  foodName: "",
  foodCost: 0,
  foodType: "",
  description: "",
  foodPic: "",
};
export const FoodForm = ({ food: { food, loading }, addFood }) => {
  const [formData, setFormData] = useState(initialState);

  const addingFood = useMatch("/food/add-food");

  const navigate = useNavigate();

  const { foodName, foodCost, foodType, description, foodPic } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addFood(formData, navigate, food ? true : false);
  };
  console.log(formData);

  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">
          {addingFood ? "Add Food Details" : "Edit Food Details"}
        </h1>
        <p className="lead">
          <i className="fas fa-user" />
          {addingFood
            ? ` Let's get some information to add food details`
            : " Add some changes to food details"}
        </p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Food Name"
              name="foodName"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Food Cost"
              name="foodCost"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Food Type"
              name="foodType"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Food Image"
              name="foodPic"
              onChange={onChange}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </div>
  );
};

FoodForm.propTypes = {
  addFood: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { addFood };

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);
