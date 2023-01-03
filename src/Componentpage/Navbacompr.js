import './NavStyles.css';
import React  from 'react'

import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';


const Navbarcompr = () => {
  const[color,setColor]=useState(false);

  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true);
        }else{
          setColor(false);
        }
        window.addEventListener("scroll",changeColor)
  }
  return (
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark"  className={color ? "header header-bg": "header"}>
      <Container >
        <Navbar.Brand><Link to='/'>React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link> <Link to='/'>HOME</Link></Nav.Link>
            <Nav.Link> <Link to='/about'>ABOUT</Link></Nav.Link>
            <Nav.Link> <Link to='/projects'>PROJECT</Link></Nav.Link>
            <Nav.Link> <Link to='/contact'>CONTACT</Link></Nav.Link>
           
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navbarcompr
