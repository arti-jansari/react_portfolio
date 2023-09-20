import React from "react";
// import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import image2 from "../assets/download.jpg";
import Projectfile1 from "../Componentpage/Projectfile1";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Componentpage/Projectfile1style.css'

const Imagefileproject = () => {
 
  return (
    <container-fluid>
      <Row>,
        <Col>
          <div className="image_div position-relatice z-index-130" >
                    
          </div>
          <Card className="text-center position-absolute top-50 start-50 translate-middle z-index-1 bg-transparent">
              <Card.Body>
                          
                <Card.Text className=" text-dark fw-semibold text-light ">
                <h3 className="text-light">    Some of my Project works</h3>  
                <a className=" btn btn-primary" href="https://javascript-project-master-ge6o.vercel.app/">Project</a>            
                  {/* <Projectfile1 /> */}
                                 </Card.Text>
              </Card.Body>.
            </Card>
        </Col>
      </Row>
    </container-fluid>
  );
};

export default Imagefileproject;
