import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import HomePage from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function Layout() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
