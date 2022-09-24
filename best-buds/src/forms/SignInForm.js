import React, {Component} from 'react'

class SignInForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            users:[]
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //this needs to be changed to log the user in
    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3003/users/signin', {
            method:'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            let copyUsers = [...this.state.users]
            copyUsers.push(resJson)
            this.setState = ({
                email:'',
                password:'',
                users: copyUsers
            })
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        htmlFor="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        htmlFor="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Create Account"/>
                </form>
            </>
        )
    }
}

export default SignInForm;
