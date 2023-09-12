import React from "react";
import Navbarcompr from "../Componentpage/Navbacompr";
import Imagefile from "../Componentpage/Imagefile";
import Footer from "../Componentpage/Footer";
import "./index.css";

const Home = () => {
  return (
    <div className="bg-dark text-light">
      <Navbarcompr />
      <Imagefile />
      <Footer />
    </div>
  );
};

export default Home;
