import {
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../../../redux/types/userTypes";

//rxreducer
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true, //loadingwala image aayega
  //token: localStorage.getItem("token"), //after successful login we will set token into localStorage
  accessToken: localStorage.getItem("accessToken"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false }; //it will return this json object to store and updates the store content as per new payload

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case REGISTER_FAIL:
      return { ...state, token: null, isAuthenticated: false, loading: false };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        accessToken: null,
      };
    //   case CLEAR_PROFILE:
    //     return {
    //       ...state,
    //       profile: null,
    //       repos: [],
    //     };
    default:
      return state;
  }
};
