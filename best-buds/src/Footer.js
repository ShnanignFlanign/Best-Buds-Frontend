import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component{
  render(){
    return(
      <Container fluid fixed="bottom">
        <Row>
        <Col> &copy; Copyright 2022</Col>
        <Col>
          <h4>Developers</h4>
          <h5>Augustina</h5>
          <h5>Sean</h5>
          <h5>Victoria Coker</h5>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;
