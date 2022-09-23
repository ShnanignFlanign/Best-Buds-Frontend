import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

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
          {/* Link to log in modal here */}
          <Button variant="outline-success">Register</Button>
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
