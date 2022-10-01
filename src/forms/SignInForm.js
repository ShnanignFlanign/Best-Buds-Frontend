import React, {Component} from 'react'
import {Form, Button} from "react-bootstrap";

class SignInForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            users:[]
        }
    }

    //this needs to be changed to log the user in
    handleSignin = (e) =>{
        const data = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
        console.log(data)
        e.preventDefault()
        fetch('http://localhost:3003/users/signin', {
            method:'POST',
            body: data,
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log('NewUser - resJson' + resJson)
            this.props.updateUser(resJson)
            this.handleAddUser(resJson)
            this.setState = ({
                email:'',
                password:''
            })
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSignin}>
                <fieldset className="formDesign">
                <h3 className="text-center d-block">Best Buds</h3>
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
                    Sign In
                    </Button>
                    </div>

                    </fieldset>
                </form>
                <h5 className="mt-4">Don't have an account? <a style={{ color: '#333333'}}href={``}>Register here.</a></h5>
            </>
        )
    }
}

export default SignInForm;
