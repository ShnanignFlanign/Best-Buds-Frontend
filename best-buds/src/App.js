import React, {Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome'
import userPortal from './components/userPortal'
import {Container} from "react-bootstrap"
import './App.css'

//base plants URL '/plants'
//base users URL '/users'

class App extends Component{
  constructor(){
    super()
    this.state = {
      plants:[],
      users: [],
      isLoggedIn: false
    }
  }

  render (){
    return(
      <div>
      <Header/>
      <Container className="pt-5 pb-5">
        {this.state.isLoggedIn ?
        {/* user portal component*/} :<Welcome></Welcome> 
        }
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
