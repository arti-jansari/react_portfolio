import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Componentpage/Projectfile1style.css"

const Projectfile1 = () => {

    
  return (
    <div className=' container-fluid projectfile1 '>
        <div className="row">
            <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card >
     <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
     </Card.Body>
   </Card>
            </div>
            <div className="col-lg-4">
            <Card >
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
            </div>
        </div>
   
     
   
  </div>
  )
}

export default Projectfile1
