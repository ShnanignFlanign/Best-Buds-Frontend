import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component{
  render(){
    return(
      <Container fluid fixed="bottom" className="custom-foot">
        <Row className="custom-row">
        <Col style={{textAlign: "left"}}> <h4>&copy; Copyright 2022</h4></Col>
        <Col style={{textAlign: "left"}}>
          <h4>Developers</h4>
          <h5>Agustina Fin Scigliano  <i class="bi bi-github" style={{ fontSize: 20 }}></i> <i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></h5>
          <h5>Sean Flanagan <i class="bi bi-github" style={{ fontSize: 20 }}></i> <i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></h5>
          <h5>Victoria Coker <i class="bi bi-github" style={{ fontSize: 20 }}></i> <i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></h5>
        </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;
