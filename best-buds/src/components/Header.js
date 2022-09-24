import React, { Component} from 'react'
import {Nav, Navbar, Container, Button,} from "react-bootstrap";
import RegisterSigninModal from './RegisterSigninModal'
import SignInModal from './SignInModal'

class Header extends Component{
  constructor(props){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        {/* Link to home page here */}
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          {/* Link to sign in modal here */}
          <SignInModal handleSubmit={this.props.handleSubmit}/>
          <RegisterSigninModal updateUser={this.props.updateUser}/>
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
