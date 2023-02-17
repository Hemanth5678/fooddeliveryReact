import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import paginate from "../../../utils/utils";
import { getFoods } from "../actions/foodAction";
import { FoodItem } from "./FoodItem";

export const DisplayFood = ({ food: { foods }, getFoods }) => {
  useEffect(() => {
    getFoods();
  }, [getFoods]);

  const useFetch = () => {
    const [loading, setLoading] = useState(true);
    var [data, setData] = useState([]);
    data = Object.assign(foods);
    //console.log(data + "boooooooooooooooooooo");

    const getProducts = async (dispatch) => {
      const res = await fetch("http://localhost:9005/api/food");

      // const data = JSON.stringify(foods);

      //console.log(data + "boooooooooooooooooooo");

      setData(paginate(data));
      setLoading(false);
    };

    useEffect(() => {
      getProducts();
    }, []);
    return { loading, data };
  };

  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    getFoods();
    if (loading) return;
    setFollowers(data[page]);
  }, [getFoods, loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };
  //const allFoods = Foods.map((Food)=>)

  return (
    <main>
      <div className="section-title">
        {/* <h1>{loading ? "loading..." : "pagination"}</h1> */}
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="grid-container col-md-10 mt-3">
          {/* display food details is foods are present else NoFood component is rendered */}
          {foods.map((food) => (
            <FoodItem key={food.id} food={food} />
          ))}
        </div>
      </section>
    </main>

    //   <section className="container">
    //     <h1 className="large text-primary">Foodies</h1>
    //     <p className="lead">
    //       <i className="fab fa-connectdevelop"></i>Enjoy your favourite food
    //     </p>
    //     <div className="foods">
    //       <table className="table table-hover">
    //         <thead>
    //           <tr>
    //             <th scope="col">Menu</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               {foods.length > 0 ? (
    //                 foods.map((food) => <FoodItem key={food.id} food={food} />)
    //               ) : (
    //                 <h4>No Foods found...</h4>
    //               )}
    //             </td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   </section>
  );
};

DisplayFood.propTypes = {
  food: PropTypes.object.isRequired,
  getFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = { getFoods };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFood);
