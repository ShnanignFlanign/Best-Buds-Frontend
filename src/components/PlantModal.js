import React, { Component } from "react";
import { Modal, Button, Container, Row, Col, Image} from "react-bootstrap";

class PlantModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      name: this.props.name,
      img: this.props.img,
      lightNeed: this.props.lightNeed,
      waterNeed: this.props.waterNeed,
      classification: this.props.classification,
      description: this.props.description,
      username:this.props.username
    }
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button className="plantNameColor" style={{backgroundColor:"transparent"}}  onClick={this.openModal}>
            <h4>{this.props.name}</h4>
          </Button>
        </div>
        <Modal className="modal-xl pt-5 pr-5 pl-5" show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header className="border-0" closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-5 pb-5">
          <Container>
            <Row className="justify-content-md-center">
            <Col xl={4}>
              <h2>{this.props.name}</h2>
              <Image style={{ width:300, height:300, objectFit:'cover',}} src={this.state.img} roundedCircle />
            </Col>
              <Col xl={6}>
              <ul className="noListStyle">
              <li><i class="bi bi-sun-fill" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Light Need: {this.props.lightNeed}</span></i></li>
              <li><i class="bi bi-droplet-half" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Water Need: {this.props.waterNeed}</span></i></li>
              <li><i class="bi bi-calendar-heart" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Last Watered: {this.props.lastWatered}</span></i></li>
              </ul>
              <h5>Description:</h5>
                <p>{this.props.description}</p>
                <h5>Classification: {this.props.classification}</h5>
                </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PlantModal;


//got code from here https://www.pluralsight.com/guides/how-to-trigger-modal-for-react-bootstrap
