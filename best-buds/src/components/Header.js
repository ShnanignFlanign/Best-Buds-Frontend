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
        <SignInModal handleSignin={this.props.handleSignin}  updateUser={this.props.updateUser} handleChange={this.props.handleChange}/>
        <RegisterModal handleRegister={this.props.handleRegister} updateUserReg={this.props.updateUserReg} handleChange={this.props.handleChange}/>
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
        {/* REGISTER FORM */}
        {/* <form onSubmit={this.props.handleRegister}>
            <label htmlFor="username">Userame:</label>
            <input
                type="text"
                htmlFor="username"
                id="username"
                name="username"
                onChange={this.props.handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                htmlFor="email"
                id="email"
                name="email"
                onChange={this.props.handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                htmlFor="password"
                id="password"
                onChange={this.props.handleChange}
            />
            <input type="submit" value="Create Account"/>
        </form> */}
        {/* END REGISTER FORM */}

        {/* SIGNIN FORM */}
        {/* <form onSubmit={this.props.handleSignin}>
          <label htmlFor="email">Email:</label>
          <input
              type="email"
              htmlFor="email"
              id="email"
              name="email"
              onChange={this.props.handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
              type="password"
              htmlFor="password"
              id="password"
              onChange={this.props.handleChange}
          />
          <input type="submit" value="Sign In"/>
        </form> */}
        {/* END SIGNIN FORM */}
      </Container>
      </Navbar>
      </div>
    )
  }
}

export default Header;
