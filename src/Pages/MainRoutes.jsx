import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Signin } from "./Signin";


export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};
