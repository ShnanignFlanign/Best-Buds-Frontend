import React, { Component} from 'react'
import {Nav, Navbar, Container, Button,} from "react-bootstrap";
import RegisterModal from './RegisterModal'

class Header extends Component{
  render(){
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Sign-In</Nav.Link>
          <RegisterModal/>
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
