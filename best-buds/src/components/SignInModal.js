import React, {Component} from 'react'
import { Modal, Button, Container, Row, Col} from "react-bootstrap";
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
          <Button className="signInColor" onClick={this.openModal}>
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
            <SignInForm handleChange={this.props.handleChange} updateUser={this.props.updateUser}/>
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
