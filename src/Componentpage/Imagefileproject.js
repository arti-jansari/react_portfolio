import React from "react";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import image2 from "../assets/download.jpg";

const Imagefileproject = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="image_div">
            <img src={image2} alt="alterimage" />
            <Card className="text-center position-absolute top-50 start-50 translate-middle bg-transparent">
              <Card.Body>
                <Card.Title className="fs-1 fw-semibold text-light">
                  PROJECTS
                </Card.Title>
                <Card.Text className="fs-1 fw-semibold text-light ">
                  Some of my most recent works{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="row">
      <div className="col">

      </div>
        </div>
      </div>
    </div>
  );
};

export default Imagefileproject;
