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

let baseURL = 'https://bestbud-backend.herokuapp.com'

class App extends Component{
  constructor(){
    super()
    this.state = {
      plants:[],
      users: [],
      username: '',
      isLoggedIn: false
    }
    this.updateUser = this.updateUser.bind(this)
    this.handleSignin= this.handleSignin.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  updateUser = (user) =>{
    this.setState({users: user, isLoggedIn:true, username: user.foundUser.username})
  }

  handleChange = (e) =>{
    console.log(e.target.value)
    console.log(e.target.id)
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

         // TESTING METHODS
   handleAddUser = (user) =>{
    const copyUsers = [...this.state.users]
    copyUsers.push(user)
    this.setState({
        users:copyUsers
    })
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
        this.updateUser(resJson)
        this.handleAddUser(resJson)
        this.setState ({
            username: '',
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
        // console.log(resJson.foundUser.username)
        this.updateUser(resJson)
        this.handleAddUser(resJson)
        this.setState({email:'',password:''})
    })
  } //END handle signin
  
  componentDidMount(){
    this.getPlants()
  }
  //END TESTING METHODS

  render (){
    const isLoggedIn = this.state.isLoggedIn;
    let content;
    if (!isLoggedIn){
      content = <Welcome plants={this.state.plants}/>
    } else {
      content = <UserPortal users={this.state.users} username={this.state.username}handleChange={this.handleChange}/>
    }
    return(
      <div>
      <Header handleSignin={this.handleSignin} handleRegister={this.handleRegister} updateUser={this.updateUser} handleChange={this.handleChange} isLoggedIn={this.state.isLoggedIn} />
      <Container className="pt-5 pb-5">

        {/* REGISTER FORM */}
        <form onSubmit={this.handleRegister}>
            <label htmlFor="username">Userame:</label>
            <input
                type="text"
                htmlFor="username"
                id="username"
                name="username"
                onChange={this.handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                htmlFor="email"
                id="email"
                name="email"
                onChange={this.handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                htmlFor="password"
                id="password"
                onChange={this.handleChange}
            />
            <input type="submit" value="Create Account"/>
        </form>
        {/* END REGISTER FORM */}

        {/* SIGNIN FORM */}
        {/* <form onSubmit={this.handleSignin}>
          <label htmlFor="email">Email:</label>
          <input
              type="email"
              htmlFor="email"
              id="email"
              name="email"
              onChange={this.handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
              type="password"
              htmlFor="password"
              id="password"
              onChange={this.handleChange}
          />
          <input type="submit" value="Sign In"/>
        </form> */}
        {/* END SIGNIN FORM */}

        { content }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
