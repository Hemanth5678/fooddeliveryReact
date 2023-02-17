import axios from "axios";

var accessToken = localStorage.getItem("accessToken");

// Create an instance of axios
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  // Authorization: {
  //   Bearer: localStorage.getItem("accessToken"),
  // },
});

export default api;
