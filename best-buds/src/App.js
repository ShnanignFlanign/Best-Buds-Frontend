import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class App extends Component{
  render (){
    return(
      <div>
      <Header/>
      <Container fliud>
        <Row>
          <Col>
          <h1>Green thumbs up! Learn how to grow your plants one drop at a time.</h1>
          </Col>
          <Col>
          <Image width={500} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
          </Col>
        </Row>
      </Container>
       <Footer/>
      </div>
    )
  }
}

export default App;
