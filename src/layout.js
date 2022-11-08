import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
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
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default Layout;
