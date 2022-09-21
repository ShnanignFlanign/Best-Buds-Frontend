import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

class Header extends Component{
  render(){
    return(
      <Navbar expand="lg">
      <Container fluid className="custom-hdr">
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Sign-In</Nav.Link>
          <Button variant="outline-success">Register</Button>
        </Nav>
      </Container>
      </Navbar>
    )
  }
}

export default Header;
