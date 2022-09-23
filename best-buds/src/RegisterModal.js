import React, {Component} from 'react'

const baseURL = 'http://localhost:3003/plants'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:'',
            users: []
        }
    }

    //This can go in app.js and be passed down as props 
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    getUsers = () =>{
        fetch(baseURL + 'users')
        .then(res => {
            if(res.status === 200){
                return res.json()
            }else{
                return []
            }
        })
        .then(data => {
            this.setState({users: data.users})
        })
    }

    handleAddUser = (user) =>{
        const copyUsers = [...this.state.users]
        console.log(user)
        this.setState({
            users: copyUsers
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        //
        //
        //What do I need to add to hit the right route???
        //
        //
        fetch(baseURL, {
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
            this.state.handleAddUser(resJson)
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