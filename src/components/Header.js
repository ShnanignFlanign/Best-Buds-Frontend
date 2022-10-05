import React, { Component} from 'react'
import {Nav,Button,Navbar,Container,Image} from "react-bootstrap";
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

      //THIS IS THE SIGN OUT BUTTON //
      content = <Button variant="success" onClick={this.props.handleSignout}>Sign Out</Button>

    }
    return(
      <div className="custom-hdr">
      <Navbar expand="lg">
      <Container>
        {/* Link to home page here */}
        <Navbar.Brand>
        <Image width={200} src="https://i.imgur.com/a5HXVrf.png" roundedCirle />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="ms-auto">
          {content}
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
