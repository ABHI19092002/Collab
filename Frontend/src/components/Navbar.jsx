import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Navigbar(){
    return (
        <div className="navbar">
          <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary px-5">
      
          <Navbar.Brand className="nav-brand" href="#home">Collaborators</Navbar.Brand>
          <Navbar.Toggle style={{marginBottom: "10px"}} aria-controls="navbarScroll" />
          <Navbar.Collapse className="menu" id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link style={{paddingLeft: "25px", paddingRight: "25px", width: "100%" }} href="#home">Home</Nav.Link>
            <Nav.Link style={{paddingLeft: "25px", paddingRight: "25px" }} href="#features">Features</Nav.Link>
            <Nav.Link style={{paddingLeft: "25px", paddingRight: "25px" }} href="#pricing">Pricing</Nav.Link>
            </Nav>
          <Form className="md-auto d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button style={{borderRadius: "100%"}} variant="outline-info">🔍</Button>
            <a href="/login"><img alt="avatar" src="../assets/images/noAvtr.png" /></a>
          </Form>
          
          </Navbar.Collapse>
  
      </Navbar>
    </div>
    );
}

export default Navigbar;