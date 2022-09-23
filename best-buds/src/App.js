import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import Plant from './Plant'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './App.css'

//base plants URL
//base users URL

class App extends Component{
  constructor(){
    super()
    this.state = {
      plants:[],
      users: [],
    }
  }



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
        {/* shouldnt we be mapping?? */}
        {/* should we be using seeded data and a separate modal */}
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
