import React, { Component} from 'react'
import {Nav, Navbar, Container, Button,} from "react-bootstrap";
import RegisterSigninModal from './RegisterSigninModal'

class Header extends Component{
  render(){
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Sign-In</Nav.Link>
          <RegisterSigninModal/>
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
