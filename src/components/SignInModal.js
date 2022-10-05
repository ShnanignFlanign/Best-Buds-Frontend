import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col, Form, Image} from "react-bootstrap";
import SignInForm from '../forms/SignInForm'

class SignInModal extends Component {
    constructor(props){
        super(props)
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
          <Button size="lg" className="signInColor" onClick={this.openModal}>
            Sign In
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header className="border-0" closeButton>
          </Modal.Header>
          <Modal.Body className="pb-4">
          <Container>
            <Row>
            <Col>
            {/* <input type="text" onChange={this.props.handleChange}/> */}
            <form onSubmit={this.props.handleSignin}>
            <fieldset className="formDesign">
          <Image width={200} className="m-auto d-block" src="https://i.imgur.com/a5HXVrf.png" />
            <Form.Group className="mb-3 mt-4">
            <Form.Label htmlFor="email"><h5>Email</h5></Form.Label>
            <Form.Control
                  type="email"
                  htmlFor="email"
                  id="email"
                  name="email"
                  onChange={this.props.handleChange}
              />
              </Form.Group>

              <Form.Group className="mb-3 mt-4">
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
                Sign In
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

export default SignInModal
