import {
  CLEAR_FOOD,
  CREATE_FOOD,
  GET_FOOD,
  GET_FOODS,
  GET_REPOS,
  NO_REPOS,
  FOOD_ERROR,
  UPDATE_FOOD,
  CLEAR_FOODS,
} from "../../../redux/types/foodTypes";

//rxreducer
const initialState = {
  food: null,
  foods: [],
  repos: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOD:
      return { ...state, food: payload, loading: false };
    case UPDATE_FOOD:
      return { ...state, food: payload, loading: false };

    case GET_FOODS:
      return {
        ...state,
        foods: payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };

    case FOOD_ERROR:
      return { ...state, error: payload, loading: false, profile: null };

    case CREATE_FOOD:
      return { ...state, food: payload, loading: false };
    case FOOD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        food: null,
      };
    case CLEAR_FOOD:
      return {
        ...state,
        food: null,
        repos: [],
      };
    case NO_REPOS:
      return {
        ...state,
        ...payload,
        repos: [],
      };
    case CLEAR_FOODS:
      return {
        ...state,
        foods: [],
        repos: [],
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    case NO_REPOS:
      return {
        ...state,
        repos: [],
      };
    default:
      return state;
  }
};
