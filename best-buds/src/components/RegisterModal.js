import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col} from "react-bootstrap";
import RegisterForm from '../forms/RegisterForm'

class RegisterModal extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    };
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="success" onClick={this.openModal}>
            Register
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
              <Col>
                <RegisterForm handleChange={this.props.handleChange} updateUser={this.props.updateUser}/>
              </Col>
            </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default RegisterModal;
