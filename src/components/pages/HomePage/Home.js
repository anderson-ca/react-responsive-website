import React from "react";
import HeroSection from "../HeroSection";
import { homeObject, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection {...homeObject} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
};

export default Home;
