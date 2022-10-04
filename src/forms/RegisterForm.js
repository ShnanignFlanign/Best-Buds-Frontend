import React, {Component} from 'react'
import {Form, Button} from "react-bootstrap";

class RegisterForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:'',
            users: []
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleRegister}>
                <fieldset className="formDesign">
                <h3 className="text-center d-block">Best Buds</h3>
                    <Form.Group className="mb-3 mt-4">
                    <Form.Label htmlFor="username"><h5>Username</h5></Form.Label>
                      <Form.Control
                        type="text"
                        htmlFor="username"
                        id="username"
                        name="name"
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
                  <h5 className="mt-4">Already have an account? <a style={{ color: '#333333'}}href={``}>Sign-in here.</a></h5>
            </>
        )
    }
}

export default RegisterForm;
