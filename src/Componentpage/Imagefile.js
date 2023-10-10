import "./Imagestyle.css";
import image1 from "../assets/colorful.jpg";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";
import { Link } from "react-router-dom";
import "./Imagestyle.css";

const Imagefile = () => {
  return (
    <container-fluid>
      <Row>
        <Col>
          <div className="image_div">
            <img src={image1} alt="alterimage" />
            <Card className="text-center position-absolute top-50 start-50 translate-middle bg-transparent">
              <Card.Body>
                <Card.Title className="fs-2 fw-normal">
                <h2 class="title">
    <span class="title-word title-word-1">This</span>
    <span class="title-word title-word-2">is</span>
    <span class="title-word title-word-3">my</span>
    <span class="title-word title-word-4">text</span>
  </h2>
                </Card.Title>
                <Card.Text className="fs-1 fw-semibold text-light ">
                  React js Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </container-fluid>
  );
};

export default Imagefile;
