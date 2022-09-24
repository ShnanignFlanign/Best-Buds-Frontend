import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col} from "react-bootstrap";
import AddPlantForm from '../forms/AddPlantForm'

class AddPlantModal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="outline-success" onClick={this.openModal}>
            Add a Plant
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
            <Col>
            <AddPlantForm/>
              </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddPlantModal;
