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
      plant: this.props.plant,
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
            <EditModal handleChange={this.props.handleChange}/>
          </Nav.Item>
          <Nav.Item>
          {/* Delete functionality here */}
            <Nav.Link href="#" className="float-right"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#333333'}}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      {/* Map though the plants array here */}
      <Card.Img variant="top"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Plant_No_Image.svg/2048px-Plant_No_Image.svg.png"/>
      <Card.Body className="text-center">
        <PlantModal handleChange={this.props.handleChange}/>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
