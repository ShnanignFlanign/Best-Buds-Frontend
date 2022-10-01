import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col} from "react-bootstrap";
import AddPlantForm from '../forms/AddPlantForm'


class AddPlantModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  

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
          <Modal.Header className="border-0" closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
            <Col>
            <AddPlantForm username={this.props.username} handleChange={this.props.handleChange} updateUserPortal={this.props.updateUserPortal}/>
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
