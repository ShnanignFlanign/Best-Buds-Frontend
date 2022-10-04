import React, { Component} from 'react'
import {Nav,Button, Navbar, Container} from "react-bootstrap";
import RegisterModal from './RegisterModal'
import SignInModal from './SignInModal'

const homePage = 'https://bestbuds-app.herokuapp.com'

class Header extends Component{
  constructor(props){
    super(props)
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
        <Navbar.Brand href={homePage}>Best Buds</Navbar.Brand>
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
