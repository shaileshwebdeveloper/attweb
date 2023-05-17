import React from "react";
import { TopSection } from "../Components/Home/TopSection";
import { Footer } from "../Components/Common/Footer";
import { Membership } from "../Components/Home/Membership";

export const Home = () => {
  return (
    <div>
      <TopSection />
      <br />
      <Membership />

      <Footer />
    </div>
  );
};
