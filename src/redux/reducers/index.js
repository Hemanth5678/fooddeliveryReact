//by default when u will provide path of reducers in import statement it will refer to index.js internally
//reduc and come down to combinereducers
import { combineReducers } from "redux";
import auth from "../../app/auth/reducers/authReducer";
import food from "../../app/food/reducers/foodReducer";
import alerts from "../../app/core/reducers/alertReducer";
// import profile from "../../app/profiles/reducers/profileReducer";

export default combineReducers({
  auth,
  food,
  alerts,
  //   profile,
});
//export: is as good as public in nature
//default: exported with default name
