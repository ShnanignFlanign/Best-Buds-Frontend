import React, { Component} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component{
  render(){
    return(
      <div>
      <Container fluid fixed="bottom" className="custom-foot">
        <Row className="custom-row">
        <Col xs={4} md={6} style={{textAlign: "left"}}> <h2>Logo</h2><h5>&copy; Copyright 2022</h5></Col>
        <Col xs={8} md={6} style={{textAlign: "right"}}>
          {/* Should these be links?  */}
          {/* Can we haave the icons link to the associated websites? */}
          <h4>Developers</h4>
          <h5>Agustina Fin Scigliano
          <a href="https://github.com/goosefin"><i class="bi bi-github" style={{ fontSize: 20, padding: 5}}></i></a>
           <a href="www.linkedin.com/in/agustina-fin"><i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></a>
           </h5>
          <h5>Sean Flanagan
              <a href="https://github.com/ShnanignFlanign"><i class="bi bi-github" style={{ fontSize: 20, padding: 5 }}></i></a>
              <a href="https://www.linkedin.com/in/seanflanagan-pg/"><i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></a>
          </h5>
          <h5>Victoria Coker
          <a href="https://github.com/Vic-e"><i class="bi bi-github" style={{ fontSize: 20, padding: 5 }}></i></a>
           <a href="https://www.linkedin.com/in/victoria-coker-2149611b/"><i class="bi bi-linkedin" style={{ fontSize: 20 }}></i></a>
           </h5>
        </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Footer;
