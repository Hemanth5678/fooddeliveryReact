import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayFood from "../components/DisplayFood";
import DisplayFoodbyId from "../components/DisplayFoodbyId";
import EditForm from "../components/EditForm";
import FoodByType from "../components/FoodByType";
import FoodForm from "../components/FoodForm";

export const FoodRouters = () => {
  console.log("inside the Food routers");

  return (
    <div>
      <Routes>
        {/* <Route path="/createFood" element={<CreateFood></CreateFood>}></Route>
        <Route path="/AddFood" element={<AddFood></AddFood>}></Route>

        <Route path="/editFood" element={<EditFood></EditFood>}></Route> */}
        <Route
          path="/DisplayFoods"
          element={<DisplayFood></DisplayFood>}
        ></Route>
        <Route
          path="/:id"
          element={<DisplayFoodbyId> </DisplayFoodbyId>}
        ></Route>
        <Route path="/add-food" element={<FoodForm></FoodForm>}></Route>
        <Route path="/update/:id" element={<EditForm></EditForm>}></Route>
        <Route
          path="/foodtype/:type"
          element={<FoodByType></FoodByType>}
        ></Route>
      </Routes>
    </div>
  );
};
