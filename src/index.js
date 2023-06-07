import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

// axios intercepters
axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/";
    } else return Promise.reject(error);
  }
);
//// axios intercepters end

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
