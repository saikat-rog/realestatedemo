"use client";
import React from "react";
import Welcome from "./components/Welcome";
import Explore from "./components/Explore";
import Contact from "./components/Contact";


const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Explore />
      <Contact/>
    </>
  );
};

export default Home;
