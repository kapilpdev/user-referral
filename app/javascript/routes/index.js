import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Registration from "../components/Registration";
import Login from "../components/Login";
import DashBoard from "../components/Dashboard";
import PrivateRoute from "./privateRoute";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route path="/login" element={<Login />} exact/>
      <Route path="/registration" element={<Registration />} exact/>
      <Route
        path="/dashboard"
        element={<PrivateRoute component={DashBoard} />}
      />
    </Routes>
  </Router>
);
