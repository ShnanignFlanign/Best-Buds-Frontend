import React, {Component} from 'react'
import { Modal, Container, Row, Col, Nav} from "react-bootstrap";
import EditForm from '../forms/EditForm'

class EditModal extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Nav.Link href="#" onClick={this.openModal}><i class="bi bi-pencil" style={{ fontSize: 30, color: '#333333'}}></i> </Nav.Link>
        </div>
        <Modal className="modal-xl pt-5 pr-5 pl-5" show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header className="border-0" closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
            <Col>
            <EditForm/>
              </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EditModal;
