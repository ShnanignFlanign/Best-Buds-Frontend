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
        <Modal className="modal-xl pt-5 pr-5 pl-5" show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header className="border-0" closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row className="justify-content-md-center">
            <Col xl={4}>
              <h5>Plant Name</h5>
              <Image width={200} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
            </Col>
              <Col xl={6}>
           <i class="bi bi-sun-fill" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Light Need</span></i>
             <i class="bi bi-droplet-half" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Water Need</span></i>
                <h5>Description</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.</p>
                <h5>Classification</h5>
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
