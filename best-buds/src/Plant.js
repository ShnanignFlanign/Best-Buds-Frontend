import React, { Component} from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import PlantModal from './PlantModal'

class Plant extends Component{
 render(){
   return(
     <Col>
     <Card style={{ width: '20rem' }}>
     <Nav style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Nav.Item>
            <Nav.Link href="#"><i class="bi bi-pencil" style={{ fontSize: 30, color: '#333333'}}></i> </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="float-right"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#333333'}}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      <Card.Img variant="top" src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" />
      <Card.Body className="text-center">
        <PlantModal/>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
