import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Signin } from "./Signin";
import { ForgotPassword } from "./ForgotPassword";


export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};
