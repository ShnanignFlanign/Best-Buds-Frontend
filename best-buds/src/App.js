import React, {Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome'
import UserPortal from './components/userPortal'

import {Container} from "react-bootstrap"
import './App.css'
//base plants URL '/plants'
//base users URL '/users'

let baseURL = process.env.REACT_APP_BASE_URL
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


  // handleSubmit = (e) =>{
  //   e.preventDefault()
  //   fetch('http://localhost:3003/users/signin', {
  //       method:'POST',
  //       body: JSON.stringify({
  //           email: this.state.email,
  //           password: this.state.password
  //       }),
  //       headers:{
  //           'Content-Type':'application/json'
  //       }
  //   })
  //   .then(res => res.json())
  //   .then(resJson => {
  //       let copyUsers = [...this.state.users]
  //       copyUsers.push(resJson)
  //       this.setState = ({
  //           email:'',
  //           password:'',
  //           users: copyUsers
  //       })
  //   })
  // }

  updateUser = (user) =>{
    this.setState = ({
      users: user,
      isLoggedIn: true
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

  render (){
    const isLoggedIn = this.state.isLoggedIn;
    let content;
    if (!isLoggedIn){
      content = <Welcome></Welcome>
    } else {
      content = <UserPortal users={this.state.users} ></UserPortal>
    }
    return(
      <div>
      <Header handleSubmit={this.handleSubmit} updateUser={this.updateUser}/>
      <Container className="pt-5 pb-5">
        { content }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
