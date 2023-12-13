/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

function Home(props) {
  return (
    <div>
      <div className="font-poppins">
        
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default Home;
