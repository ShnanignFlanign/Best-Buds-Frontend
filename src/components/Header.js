import React, { Component} from 'react'
import {Nav,Button, Navbar, Container} from "react-bootstrap";
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
        <SignInModal handleSignin={this.props.handleSignin}  updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
        <RegisterModal handleRegister={this.props.handleRegister} updateUserReg={this.props.updateUserReg} handleChange={this.props.handleChange}/>
      </>
    } else {
      content = <Button variant="success" onClick={this.props.handleSignout}>Sign Out</Button>
    }
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        {/* Link to home page here */}
        <Navbar.Brand href="#">Best Buds</Navbar.Brand>
        <Nav>
          {content}
        </Nav>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
