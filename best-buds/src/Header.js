import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component{
  render(){
    return(
      <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Register</Nav.Link>
          <Nav.Link href="#">Sign-In</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
    )
  }
}

export default Header;
