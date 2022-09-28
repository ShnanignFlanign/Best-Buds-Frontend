import React, {Component} from 'react'
import Plant from './Plant'
import AddPlantModal from './AddPlantModal'
import {Row, Col, Image} from "react-bootstrap"


class Welcome extends Component{
  render (){
    return(
      <div>
        <Row>
          <Col>
          <h1>Nuture your green thumbs with Best Buds. The app that helps you take care of your plants!</h1>
          </Col>
          <Col>
          <Image width={500} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
          </Col>
        </Row>
        <Row>
       
        
        <Row>
        <Col xs={12} md={6}>
        <h2>Your Buds</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end">
        {/* <Button variant="outline-success"> */}
          <AddPlantModal/>
        {/* </Button> */}
        </Col>
        </Row>
        <Row className="pt-5">
        {/* shouldnt we be mapping?? */}
        {/* should we be using seeded data and a separate modal */}
          <Plant></Plant>
          <Plant></Plant>
        </Row>
        
        </Row>

      </div>
    )
  }
}

export default Welcome;
