import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import Plant from './Plant'
import {Container, Row, Col, Button} from "react-bootstrap"


class App extends Component{
  render (){
    return(
      <div>
      <Header/>
      <Container className="pt-5 pb-5">
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
        <Row className="pt-5">
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
