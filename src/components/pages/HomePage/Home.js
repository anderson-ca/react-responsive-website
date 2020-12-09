import React from "react";
import HeroSection from "../HeroSection";
import { homeObject } from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection {...homeObject} />
    </>
  );
};

export default Home;
