import axios from "axios";

var accessToken = localStorage.getItem("accessToken");
console.log(localStorage.getItem("accessToken"));
export const api2 = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  // Authorization: {
  //   Bearer: localStorage.getItem("accessToken"),
  // },
});
export default api2;
