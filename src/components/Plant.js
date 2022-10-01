import React, { Component} from 'react'
import {Col, Card, Nav} from "react-bootstrap";
import PlantModal from './PlantModal'
import EditModal from './EditModal'
import UserPortal from './userPortal'

class Plant extends Component{
  constructor(props){
    super(props)
    this.state = {
      // we need to set the plants array in state here or pass it down as props from app.js
      name: this.props.name,
      img: this.props.img,
      lightNeed: this.props.lightNeed,
      waterNeed: this.props.waterNeed,
      classification: this.props.classification,
      description: this.props.description,
      username:this.props.username,
      readMore: false
    }
  }

  //delete method 
  handleDeletePlant = (id) =>{
    fetch('http://localhost:3003/plants/' + id, {
      method:'DELETE'
    })
    .then(res =>{
      const copyPlants = [...this.state.plants]
      const findIndex = this.state.plants.findIndex((plant) => plant._id === id)
      copyPlants.splice(findIndex,1)
      this.setState({
        plants: copyPlants
      })
    })
  }
  

  //edit method

  //do we need the above functionality inside of app??

 render(){
   return(
     <Col>
     <Card className="shadow"  style={{ width: '20rem'}}>
     <Nav style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Nav.Item>
            {/* Edit functionality here */}
            <EditModal handleChange={this.props.handleChange} name={this.state.name} img={this.state.img} lightNeed={this.state.lightNeed} waterNeed={this.state.waterNeed} descritpion={this.state.description} classification={this.state.classification} username={this.props.username}/>
          </Nav.Item>
          <Nav.Item>
          {/* Delete functionality here */}
            <Nav.Link href="#" className="float-right"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#333333'}}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      {/* Map though the plants array here */}
      <Card.Img variant="top"  src={this.state.img}/>
      <Card.Body className="text-center">
        <PlantModal handleChange={this.props.handleChange} name={this.state.name} img={this.state.img} lightNeed={this.state.lightNeed} waterNeed={this.state.waterNeed} descritpion={this.state.description} classification={this.state.classification} username={this.state.username}/>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
