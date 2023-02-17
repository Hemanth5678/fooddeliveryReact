import logo from "./logo.svg";
import "./App.css";
import Header from "./app/core/components/layouts/Header";
import Landing from "./app/core/components/layouts/Landing";
import Footer from "./app/core/components/layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthRouters } from "./app/auth/routings/AuthRouters";
import { Provider } from "react-redux";
import store from "./redux/store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./app/auth/action/authAction";
import DashboardRouter from "./app/dashboard/routings/DashboardRouter";
import { FoodRouters } from "./app/food/routing/FoodRouters";
import Alert from "./app/core/components/Alert";
import { useEffect } from "react";
import Home from "./app/auth/components/Home";

if (localStorage.accessToken) {
  setAuthToken(localStorage.getItem("accessToken"));
  store.dispatch(loadUser(localStorage.getItem("accessToken")));
}

function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser(localStorage.getItem("accessToken")));
  // });
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />

          <Alert />

          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/api/*" element={<AuthRouters></AuthRouters>}></Route>
            <Route
              path="/dashboard/*"
              element={<DashboardRouter></DashboardRouter>}
            ></Route>
            <Route path="/food/*" element={<FoodRouters></FoodRouters>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
