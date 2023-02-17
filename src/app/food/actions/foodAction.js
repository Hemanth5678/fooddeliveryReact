import { useEffect, useState } from "react";
import {
  ACCOUNT_DELETED,
  CLEAR_FOOD,
  CREATE_FOOD,
  GET_FOOD,
  GET_FOODS,
  GET_REPOS,
  NO_REPOS,
  FOOD_ERROR,
  UPDATE_FOOD,
  FOOD_DELETED,
} from "../../../redux/types/foodTypes";
import api from "../../../utils/api";
import { api2 } from "../../../utils/api2";
import paginate from "../../../utils/utils";
import { setAlert } from "../../core/actions/alertAction";



export const getFoods = () => async (dispatch) => {
  //dispatch({ type: CLEAR_FOOD });

  try {
    const res = await api2.get("/food");

    dispatch({
      type: GET_FOODS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getFoodById = (userId) => async (dispatch) => {
  try {
    const res = await api2.get(`/food/${userId}`);

    dispatch({
      type: GET_FOOD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getFoodByType = (type) => async (dispatch) => {
  try {
    //dispatch({ NO_REPOS });
    const res = await api2.get(`/food/dummy/${type}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addFood =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await api2.post("/food", formData);
      // console.log(res + "dfg");
      dispatch({
        type: GET_FOOD,
        payload: res.data,
      });

      dispatch(
        setAlert(
          edit ? "Food Details Updated" : "Food Details Added",
          "success"
        )
      );

      navigate("/dashboard/");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatch(setAlert(errors.msg, "danger"));
      }

      dispatch({
        type: FOOD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const updateFood = (formData, navigate, id) => async (dispatch) => {
  try {
    const res = await api2.put(`/food/${id}`, formData);

    dispatch({
      type: UPDATE_FOOD,
      payload: res.data,
    });
    dispatch(setAlert("Food Details Updated", "success"));
    navigate("/dashboard/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    const res = await api2.delete(`/food/${id}`);

    dispatch({
      type: CLEAR_FOOD,
    });
    dispatch({ type: FOOD_DELETED });
    dispatch(setAlert("Food Removed", "success"));
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
//   export default getFoods;
