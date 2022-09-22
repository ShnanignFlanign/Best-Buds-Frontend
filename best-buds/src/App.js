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
      <Container>
        <Row>
          <Col>
          <h1>Nuture your green thumbs with Best Buds. The app that helps you take care of your plants!</h1>
          </Col>
          <Col>
          <Image width={500} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
          </Col>
        </Row>
        <Row>
        <h2>Your Buds</h2>
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
