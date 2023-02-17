//rafce
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import store from "../../../redux/store";
import setAuthToken from "../../../utils/setAuthToken";
import { loadUser } from "../../auth/action/authAction";
import PrivateRoute from "../../core/routers/PrivateRoute";
// import { getCurrentProfile } from "../../profiles/actions/profileAction";
// import Createprofile from "../../profiles/components/Createprofile";
import Dashboard from "../components/Dashboard";

const DashboardRouter = () => {
  useEffect(() => {
    //store.dispatch(getCurrentProfile());

    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Dashboard></Dashboard>}
          //   element={<PrivateRoute component={Dashboard} />}
        ></Route>

        {/* <Route
          path="/createProfile"
          element={<Createprofile></Createprofile>}
        ></Route> */}
      </Routes>
    </div>
  );
};

export default DashboardRouter;
