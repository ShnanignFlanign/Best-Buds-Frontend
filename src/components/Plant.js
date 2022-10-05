import React, { Component} from 'react'
import {Col, Card, Nav} from "react-bootstrap";
import PlantModal from './PlantModal'
import EditModal from './EditModal'


class Plant extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name,
      img: this.props.img,
      lightNeed: this.props.lightNeed,
      waterNeed: this.props.waterNeed,
      classification: this.props.classification,
      description: this.props.description,
      username:this.props.username,
      readMore: false,
      id: this.props.id,
      plants:this.props.plants
    }
  }  
 

 render(){
   return(
     <Col>
     <Card className="shadow"  style={{ width: '20rem'}}>
     <Nav style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Nav.Item>
            <EditModal handleChange={this.props.handleChange} name={this.props.name} img={this.props.img} lightNeed={this.props.lightNeed} waterNeed={this.props.waterNeed} description={this.props.description} classification={this.props.classification} username={this.props.username} id={this.state.id} handleUpdatePortal={this.props.handleUpdatePortal} handleEdit={this.props.handleEdit}/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="float-right"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#333333'}} onClick={()=>this.props.handleDeletePlant(this.state.id)}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      <Card.Img variant="top"  src={this.state.img}/>
      <Card.Body className="text-center">
        <PlantModal handleChange={this.props.handleChange} name={this.props.name} img={this.state.img} lightNeed={this.state.lightNeed} waterNeed={this.state.waterNeed} description={this.state.description} classification={this.state.classification} username={this.state.username}/>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
