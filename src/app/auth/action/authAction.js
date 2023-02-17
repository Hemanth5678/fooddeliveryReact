import { CLEAR_FOOD, CLEAR_FOODS } from "../../../redux/types/foodTypes";
import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/register", formData); //await:waits until we get response from post method
    console.log(formData);

    //dispatch will connect you to middleware
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(setAlert("Successfully registered", "success"));
    dispatch(loadUser());

    //localStorage.setItem("accessToken", res.data.accessToken);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(JSON.stringify("data is " + JSON.stringify(errors)));
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loadUser = (accessToken) => async (dispatch) => {
  try {
    accessToken = localStorage.getItem("accessToken");
    const res = await api.get(`/auth/${accessToken}`, accessToken);
    dispatch({ type: USER_LOADED, payload: res.data });
    dispatch(setAlert("Welcome " + res.data.username, "success"));
  } catch (err) {}
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await api.post("/authenticate", body); //await:waits until we get response from post method

    //dispatch will connect you to middleware
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(setAlert("Login successful", "success"));
    dispatch(loadUser());
  } catch (err) {}
};

export const logout = () => async (dispatch) => {
  try {
    //  const res = await api.post("/auth");
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_FOOD });
    dispatch({ type: CLEAR_FOODS });
    //dispatch({ type: CLEAR_PROFILE });
    dispatch(setAlert("Logout successful", "success"));
    // dispatch(loadUser());
  } catch (err) {}
};
