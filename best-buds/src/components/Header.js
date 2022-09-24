import React, { Component} from 'react'
import {Nav, Navbar, Container} from "react-bootstrap";
import RegisterSigninModal from './RegisterSigninModal'

class Header extends Component{
  render(){
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        {/* Link to home page here */}
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          {/* Link to sign in modal here */}
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
