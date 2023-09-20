import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Componentpage/Projectfile1style.css";
import todolist from "../assets/todolist.jpg";
import calc from "../assets/calculator.jpg";
import portfolio from "../assets/portfolio.jpg";
import "./Projectfile1style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Projectfile1 = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={todolist} width="100%" height="100%" />
            <Card.Body className="">
              <Card.Title>TODO LIST</Card.Title>
              <Card.Text>Used CRUD operation,LocalStorage</Card.Text>

              <a className="text-primary" href="https://javascript-project-master-ge6o.vercel.app/">
                See in Detail
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={calc} width="100%" height="100%" />
            <Card.Body className="">
              <Card.Title>CALCULATOR</Card.Title>
              <Card.Text>Using React js</Card.Text>

              <a className="text-light" href="https://javascript-project-master-ge6o.vercel.app/">
                {" "}
                See in Detail
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={portfolio}
              width="100%"
              height="100%"
            />
            <Card.Body className="">
              <Card.Title>PORTFOLIO</Card.Title>
              <Card.Text>Using React js</Card.Text>

              <a className="text-light" href="https://javascript-project-master-ge6o.vercel.app/">
                {" "}
                See in Detail
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>
        
      </div>
    </Container>
  );
};

export default Projectfile1;
