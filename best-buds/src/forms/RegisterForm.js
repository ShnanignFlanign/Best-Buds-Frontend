import React, {Component} from 'react'

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

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddUser = (user) =>{
        const copyUsers = [...this.state.users]
        copyUsers.push(user)
        this.setState({
            users:copyUsers
        })
    }

    handleRegister = (e) =>{
        const data = JSON.stringify({
            username:this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        console.log(data)
        e.preventDefault()
        fetch('http://localhost:3003/users/signup', {
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
                username: '',
                email:'',
                password:''
            })
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleRegister}>
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        htmlFor="username"
                        id="username"
                        name="name"
                        value={this.state.username}
                        onChange={this.props.handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        htmlFor="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.props.handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        htmlFor="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.props.handleChange}
                    />
                    <input type="submit" value="Create Account"/>
                </form>
            </>
        )
    }
}

export default RegisterForm;
