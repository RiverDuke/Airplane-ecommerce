import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./layout";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    // <div style={{ position: "relative" }}>
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
    // </div>
  );
}

export default App;
