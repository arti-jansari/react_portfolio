import React from "react";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import image2 from "../assets/download.jpg";
import Projectfile1 from "../Componentpage/Projectfile1";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Imagefileproject = () => {
  return (
    <container-fluid>
      <Row>
        <Col>
          <div className="image_div">
            <img src={image2} alt="alterimage" />
            <Card className="text-center position-absolute top-50 start-50 translate-middle bg-transparent">
              <Card.Body>
                <Card.Title className="fs-1 fw-semibold text-light mb-5">
                  Some of my most recent works
                </Card.Title>
                <Card.Text className=" text-dark fw-semibold text-light ">
                  <Projectfile1 />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </container-fluid>
  );
};

export default Imagefileproject;
