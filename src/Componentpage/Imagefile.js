import "./Imagestyle.css";
import image1 from "../assets/colorful.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
import { Link } from "react-router-dom";
import "./Imagestyle.css";

const Imagefile = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
        <div className="image_div">
        <img src={image1} alt="alterimage" />
        <Card className="text-center position-absolute top-50 start-50 translate-middle bg-transparent">
          <Card.Body>
            <Card.Title className="fs-2 fw-normal">Hi! I am Arti Jansari</Card.Title>
            <Card.Text className="fs-1 fw-semibold text-light ">React Developer</Card.Text>
            <div>
            <Link to="/Projects" className="btn btn-warning mx-3 fw-semibold">PROJECT</Link>
            <Link to="/Projects" className="btn btn-outline-light text-light fw-semibold">CONTACT</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
        </div>
      </div>
   
    </div>
  );
};

export default Imagefile;
