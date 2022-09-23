import React, { Component} from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Plant extends Component{
 render(){
   return(
     <Col>
     <Card style={{ width: '20rem' }}>
     <Nav>
          <Nav.Item>
            <Nav.Link href="#"><i class="bi bi-pencil" style={{ fontSize: 30, color: '#333333'}}></i> </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#"><i class="bi bi-x-square" style={{ fontSize: 30, color: '#333333'}}></i></Nav.Link>
          </Nav.Item>
      </Nav>
      <Card.Img variant="top"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Plant_No_Image.svg/2048px-Plant_No_Image.svg.png"/>
      <Card.Body className="text-center">
        <Card.Title>Plant Name</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     </Col>
   )
 }
}

export default Plant;
