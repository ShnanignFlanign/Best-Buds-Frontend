import React, {Component} from 'react'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddUser = (user) =>{

    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3003/plants', {
            method:'POST',
            body: JSON.stringify({
                username:this.state.name,
                email: this.state.email,
                password: this.state.password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log('NewForm - resJason' + resJson)
            //
            //
            // Need to create a method to add a user
            //
            //
            //this.props.handleAddHoliday(resJson)
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        htmlFor="username"
                        id="username"
                        name="name"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

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

export default RegisterModal;
