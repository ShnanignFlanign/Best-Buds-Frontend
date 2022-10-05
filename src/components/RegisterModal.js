import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col, Form} from "react-bootstrap";
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
                <fieldset className="formDesign">
                <h3 className="text-center d-block">Best Buds</h3>
                    <Form.Group className="mb-3 mt-4">
                    <Form.Label htmlFor="username"><h5>Username</h5></Form.Label>
                      <Form.Control
                      type="text"
                      htmlFor="username"
                      id="username"
                      name="username"
                      onChange={this.props.handleChange}
                  />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label htmlFor="email"><h5>Email</h5></Form.Label>
                  <Form.Control
                      type="email"
                      htmlFor="email"
                      id="email"
                      name="email"
                      onChange={this.props.handleChange}
                  />
                  </Form.Group>

                  <Form.Group className="mb-3">
                  <Form.Label htmlFor="password"><h5>Password</h5></Form.Label>
                  <Form.Control
                      type="password"
                      htmlFor="password"
                      id="password"
                      onChange={this.props.handleChange}
                  />
                  </Form.Group>

                  <div className="d-flex align-items-center justify-content-center">
                  <Button className="buttonWidth" variant="success" size="lg" type="submit">
                  Create Account
                  </Button>
                  </div>
                  </fieldset>
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
