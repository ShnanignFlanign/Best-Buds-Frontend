import React, {Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome'
import UserPortal from './components/userPortal'

import {Container} from "react-bootstrap"
import './App.css'
//base plants URL '/plants'
//base users URL '/users'

let baseURL = 'https://bestbud-backend.herokuapp.com'

class App extends Component{
  constructor(){
    super()
    this.updateUser = this.updateUser.bind(this)
    this.state = {
      plants:[],
      users: [],
      isLoggedIn: false
    }
  }

  updateUser = (user) =>{
    this.setState = ({
      users: user,
      isLoggedIn: true
    })
  }

  handleChange = (e) =>{
    console.log(e.target.value)
    this.setState({
        [e.target.id]: e.target.value
    })
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
      console.log(data);
      this.setState({ plants: data.plants });
     });
   }
         // TESTING METHODS
   handleAddUser = (user) =>{
    const copyUsers = [...this.state.users]
    copyUsers.push(user)
    this.setState = ({
        users:copyUsers
    })
  }   
  handleSignin = (e) =>{
    const data = JSON.stringify({
        email: this.state.email,
        password: this.state.password
    })
    console.log(data)
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
        console.log('resJson:' + resJson)
        this.updateUser(resJson)
        this.handleAddUser(resJson)
        this.setState = ({
            email:'',
            password:''
        })
    })
    // console.log(this.state.email)
    // fetch(baseURL + '/users/' + this.state.email)
    // .then((res) => {
    //   if (res.status === 200) {
    //    return res.json();
    //   } else {
    //    return [];
    //   }
    //  })
    //  .then((data) => {
    //   console.log("Data:" + data);
    //   this.setState({ user: data.username });
    //  });

  }
  
  componentDidMount(){
    this.getPlants()
  }
  //END TESTING METHODS

  render (){
    const isLoggedIn = this.state.isLoggedIn;
    let content;
    if (!isLoggedIn){
      content = <Welcome/>
    } else {
      content = <UserPortal users={this.state.users} handleChange={this.handleChange}/>
    }
    return(
      <div>
      <Header updateUser={this.updateUser} handleChange={this.handleChange} />
      <Container className="pt-5 pb-5">

        {/* SIGNIN FORM */}
        <form onSubmit={this.handleSignin}>
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
        </form>
        {/* END SIGNIN FORM */}

        { content }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
