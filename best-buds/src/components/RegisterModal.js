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
          <Modal.Header className="border-0" closeButton>
          </Modal.Header>
          <Modal.Body className="pb-4">
          <Container>
            <Row>
              <Col>
                <form onSubmit={this.props.handleRegister}>
                  <label htmlFor="username">Userame:</label>
                  <input
                      type="text"
                      htmlFor="username"
                      id="username"
                      name="username"
                      onChange={this.props.handleChange}
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      htmlFor="email"
                      id="email"
                      name="email"
                      onChange={this.props.handleChange}
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      htmlFor="password"
                      id="password"
                      onChange={this.props.handleChange}
                  />
                  <input type="submit" value="Create Account"/>
              </form>
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
