import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Componentpage/Projectfile1style.css";
import todolist from "../assets/todolist.jpg"
import calc from "../assets/calculator.jpg"
import portfolio from "../assets/portfolio.jpg"
import "./Projectfile1style.css"

const Projectfile1 = () => {
  return (
    <div className=" container-fluid projectfile1 ">
      <div className="row">
        <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" src={todolist}  width='100%' height='100%'/>
            <Card.Body className="">
              <Card.Title>TODO LIST</Card.Title>
              <Card.Text>Used CRUD operation,LocalStorage</Card.Text>
              <Button variant="primary">See in Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" src={calc}  />
            <Card.Body>
              <Card.Title>CALCULATOR</Card.Title>
              <Card.Text>Using React js</Card.Text>
              <Button variant="primary">See in Detail</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" src={portfolio} />
            <Card.Body>
              <Card.Title>Portfolio</Card.Title>
              <Card.Text>Using react</Card.Text>
              <Button variant="primary">See in Detail</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projectfile1;
