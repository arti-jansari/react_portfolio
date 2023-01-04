import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Aboutdetail = () => {
  return (
    <Container fluid="md">
      <Row className="text-center fs-4 text-light my-5">
        <Col>ABOUT ME</Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2} className="fs-2 text-warning">
          Education{" "}
        </Col>
        <Row>
          <Col xs={3}>Master of Engineering (E&C) </Col>
          <Col xs={3}>L.D Engineering College,Ahmedabad </Col>
          <Col xs={3}>2008-2010 </Col>
        </Row>
        <Row>
          <Col xs={3}>Bachlor of Engineering (E&C) </Col>
          <Col xs={3}>S.S. Engineering College,Bhavnagar </Col>
          <Col xs={3}>2004-2008 </Col>
        </Row>
      </Row>
      <Row>
        <Col xs={2} className="fs-2 text-warning">
          Experience
        </Col>
      </Row>
      <Row>
        <Col xs={3}>Assistant Professor</Col>
        <Col xs={3}>Sigma Institute of Engineering,Vadodara</Col>
        <Col>2019-2021</Col>
      </Row>
      <Row>
        <Col xs={3}>Assistant Professor</Col>
        <Col xs={3}>L.C Institute of Technology,Bhandu</Col>
        <Col>2010-2015</Col>
      </Row>
      <Row className="my-4">
        <Col xs={2} className="fs-2 text-warning">
          Skill{" "}
        </Col>
      </Row>

      <Row className="my-3">
        <Col>HTML</Col>
      </Row>
      <Row className="my-3">
        <Col>CSS</Col>
      </Row>
      <Row className="my-3">
        <Col>Bootstrap</Col>
      </Row>
      <Row className="my-3">
        <Col>Javascript</Col>
      </Row>
      <Row className="my-3">
        <Col>React js</Col>
      </Row>
      <Row>
        <Col xs={2} className="fs-2 text-warning">
          Strength{" "}
        </Col>
      </Row>
      <Row>
        <Col className="my-2">Analytical skill</Col>
      </Row>
      <Row>
        <Col className="my-2">Hardworking</Col>
      </Row>
    </Container>
  );
};
export default Aboutdetail;
