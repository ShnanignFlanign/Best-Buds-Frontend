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
      lastWatered: this.props.lastWatered,
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
     <Card className="shadow mt-4"  style={{ width: '20rem'}}>
     <Nav style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Nav.Item>
            <EditModal handleChange={this.props.handleChange} name={this.props.name} img={this.props.img} lightNeed={this.props.lightNeed} waterNeed={this.props.waterNeed} description={this.props.description} classification={this.props.classification} username={this.props.username} id={this.state.id} handleUpdatePortal={this.props.handleUpdatePortal} handleEdit={this.props.handleEdit} lastWatered={this.props.lastWatered}/>
          </Nav.Item>
          <Nav.Item>
          {/* Delete functionality here */}
            <Nav.Link href="#" className="float-right"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#8e8e8e'}} onClick={()=>this.props.handleDeletePlant(this.state.id)}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      <Card.Img variant="top" style={{ width:320, height:320, objectFit:'cover',}} src={this.state.img}/>
      <Card.Body className="text-center">
        <PlantModal handleChange={this.props.handleChange} name={this.props.name} img={this.state.img} lightNeed={this.state.lightNeed} waterNeed={this.state.waterNeed} description={this.state.description} classification={this.state.classification} username={this.state.username} lastWatered={this.state.lastWatered}/>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
