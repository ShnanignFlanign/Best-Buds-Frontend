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
      isLoggedIn: true
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

  render (){
    const isLoggedIn = this.state.isLoggedIn;
    let content;
    if (!isLoggedIn){
      content = <Welcome></Welcome>
    } else {
      content = <UserPortal users={this.state.users} handleChange={this.handleChange}></UserPortal>
    }
    return(
      <div>
      <Header updateUser={this.updateUser} handleChange={this.handleChange} />
      <Container className="pt-5 pb-5">
        { content }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
