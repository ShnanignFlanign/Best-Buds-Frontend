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
    handleAddUser = (user) =>{
        const copyUsers = [...this.state.users]
        copyUsers.push(user)
        this.setState({
            users:copyUsers
        })
    }
    //this needs to be changed to log the user in
    handleSignin = (e) =>{
        const data = JSON.stringify({
            username:this.state.username,
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
            this.props.updateUser(resJson, true)
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
                <form onSubmit={this.handleSignin}>

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
