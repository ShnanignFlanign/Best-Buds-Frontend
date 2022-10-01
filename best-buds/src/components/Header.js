import React, { Component} from 'react'
import {Nav, Navbar, Container} from "react-bootstrap";
import RegisterModal from './RegisterModal'
import SignInModal from './SignInModal'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render(){
    let content;
    if (!this.props.isLoggedIn){
      content = <>
        <SignInModal updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
        <RegisterModal updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
      </>
    } else {
      content = <div>Sign Out Button</div>
    }
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        {/* Link to home page here */}
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          {/* Link to sign in modal here */}
          {content}
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
