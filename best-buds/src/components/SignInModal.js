import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col, Image} from "react-bootstrap";
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
          <Button variant="success" onClick={this.openModal}>
            Sign In
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
            <Col>
            {/* <input type="text" onChange={this.props.handleChange}/> */}
            <form onSubmit={this.props.handleSignin}>
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
              <input type="submit" value="Sign In"/>
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

