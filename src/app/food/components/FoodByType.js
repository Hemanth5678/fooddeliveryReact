import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFoodByType } from "../actions/foodAction";
import { FoodItem } from "./FoodItem";

export const FoodByType = ({ food: { repos }, getFoodByType }) => {
  const { type } = useParams();
  useEffect(() => {
    getFoodByType(type);
  }, [getFoodByType]);

  //const allFoods = Foods.map((Food)=>)

  return (
    <section className="container">
      <Link to={"/dashboard"} className="btn btn-dark my-3">
        Back
      </Link>
      <h1 className="large text-primary">Foodies</h1>

      <p className="lead">
        <i className="fab fa-connectdevelop"></i>Enjoy your favourite {type}{" "}
        food
      </p>
      <div className="foods">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Menu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {repos.length > 0 ? (
                  repos.map((food) => <FoodItem key={food.id} food={food} />)
                ) : (
                  <h4>No Foods found...</h4>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

FoodByType.propTypes = {
  food: PropTypes.object.isRequired,
  getFoodByType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { getFoodByType };

export default connect(mapStateToProps, mapDispatchToProps)(FoodByType);
