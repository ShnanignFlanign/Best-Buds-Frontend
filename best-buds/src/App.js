import React, {Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Plant from './components/Plant'
import AddPlantModal from './components/AddPlantModal'
import {Container, Row, Col, Button} from "react-bootstrap"
import './App.css'
//base plants URL '/plants'
//base users URL '/users'

let baseURL = process.env.REACT_APP_BASE_URL
class App extends Component{
  constructor(){
    super()
    this.state = {
      plants:[],
      users: [],
    }
  }


  handleSubmit = (e) =>{
    e.preventDefault()
    fetch('http://localhost:3003/users/signin', {
        method:'POST',
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(resJson => {
        let copyUsers = [...this.state.users]
        copyUsers.push(resJson)
        this.setState = ({
            email:'',
            password:'',
            users: copyUsers
        })
    })
  }

  updateUser = (user) =>{
    this.setState = ({
      users: user
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
    return(
      <div>
      <Header handleSubmit={this.handleSubmit} updateUser={this.updateUser}/>
      <Container className="pt-5 pb-5">
        <Row>
        <Col xs={12} md={6}>
        <h2>Your Buds</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end">
        <Button variant="outline-success">
          <AddPlantModal/>
        </Button>
        </Col>
        </Row>
        <Row className="pt-5">
        {/* shouldnt we be mapping?? */}
        {/* should we be using seeded data and a separate modal */}
        <Plant/>
        <Plant/>
        <Plant/>
        </Row>
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
