import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Signup from "./pages/Signup";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
         
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          
         
        </Routes>
      </Router>
    </>
  );
};

export default App;
