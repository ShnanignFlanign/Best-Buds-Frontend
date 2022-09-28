import React, { Component} from 'react'
import {Nav, Navbar, Container} from "react-bootstrap";
import RegisterSigninModal from './RegisterModal'
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
          <SignInModal updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
          <RegisterModal updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
