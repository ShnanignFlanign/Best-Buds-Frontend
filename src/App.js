import React, {Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome'
import UserPortal from './components/userPortal'

import {Container} from "react-bootstrap"
import './App.css'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
//base plants URL '/plants'
//base users URL '/users'

let baseURL = process.env.REACT_APP_BACKEND_URL

class App extends Component{
  constructor(){
    super()
    this.state = {
      plants:[],
      username: '',
      isLoggedIn: false
    }
  }

  updateUser = (user) =>{
    this.setState({
      isLoggedIn:true, 
      username: user.foundUser.username
    })
  }

  updateUserReg = (content) =>{
    this.setState({ 
      isLoggedIn:true, 
      username: content.user.username
    })
  }

  handleChange = (e) =>{
    this.setState({[e.target.id]: e.target.value})
  }

  getPlants = () => {
    fetch(baseURL + '/plants')
     .then((res) => {
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      this.setState({ plants: data.plants });
     });
   }


  //START HANDLE REGISTER 
  handleRegister = (e) =>{
    const data = JSON.stringify({
        username:this.state.username,
        email: this.state.email,
        password: this.state.password
    })
    console.log(data)
    e.preventDefault()
    fetch(baseURL + '/users/signup', {
        method:'POST',
        body: data,
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(resJson => {
        console.log(resJson)
        this.updateUserReg(resJson)
        this.setState ({
            email:'',
            password:''
        })
      })
  }//END HANDLE REGISTER

  //START HANDLE SIGNIN
  handleSignin = (e) =>{
    const data = JSON.stringify({
        email: this.state.email,
        password: this.state.password
    })
    e.preventDefault()
    fetch(baseURL + '/users/signin', {
        method:'POST',
        body: data,
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(resJson => {
        this.updateUser(resJson)
        this.setState({email:'',password:''})
    })
  } //END handle signin

  handleSignout = () => {
    this.setState({
      isLoggedIn: false, 
      username: ''
    })
  }
  
  componentDidMount(){
    this.getPlants()
  }

  render (){
    const isLoggedIn = this.state.isLoggedIn;
    let content;
    if (!isLoggedIn){
      content = <Welcome plants={this.state.plants}/>
    } else {
      content = <UserPortal username={this.state.username}handleChange={this.handleChange}/>
    }
    return(
      <div>
      <Header handleSignin={this.handleSignin} handleRegister={this.handleRegister} handleSignout={this.handleSignout} updateUser={this.updateUser} updateUserReg={this.updateUserReg} handleChange={this.handleChange} isLoggedIn={this.state.isLoggedIn} />
      <Container className="pt-5 pb-5">
        { content }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
