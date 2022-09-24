import React, { Component } from "react";
import { Modal, Button, Container, Row, Col, Image} from "react-bootstrap";

class PlantModal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={this.openModal}>
            Plant Name
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Plant Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
            <Col xs={6} md={4}>
              <Image width={200} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
            </Col>
              <Col xs={12} md={8}>
               <i class="bi bi-droplet-half" style={{ fontSize: 25, color: '#333333'}}></i><h5>Water Need</h5> | <i class="bi bi-sun-fill" style={{ fontSize: 25, color: '#333333'}}></i><h5>Light Need</h5>
                <h5>Description</h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
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
