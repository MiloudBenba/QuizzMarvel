// @ts-nocheck
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../App.css";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
import Header from "../Header";
import Landing from "../Landing";
import Login from "../Login";
import Signup from "../Signup";
import Welcome from "../Welcome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
