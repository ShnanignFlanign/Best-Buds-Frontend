import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import Plant from './Plant'
import {Container, Row, Col, Image} from "react-bootstrap"


class App extends Component{
  render (){
    return(
      <div>
      <Header/>
      <Container className="pt-5 pb-5">
        <Row>
          <Col>
          <h1>Nuture your green thumbs with Best Buds. The app that helps you take care of your plants!</h1>
          </Col>
          <Col>
          <Image width={500} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
        <h2>Your Buds</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end">
        <Button variant="outline-success">
          Add a Plant
        </Button>
        </Col>
        </Row>
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
