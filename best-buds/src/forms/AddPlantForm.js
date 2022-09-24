import React, {Component} from 'react'
import {Form, Button} from "react-bootstrap";

class AddPlantForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            img:'',
            lightNeed:'',
            waterNeed:'',
            description:'',
            classification:'',
            username:'',
            plants: []
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddPlant = (plant) =>{
        const copyPlants = [...this.state.plants]
        copyPlants.push(plant)
        this.setState({
            plants:copyPlants
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3003/plants', {
            method:'POST',
            body: JSON.stringify({
                name:this.state.name,
                img:this.state.img,
                lightNeed:this.state.lightNeed,
                waterNeed:this.state.waterNeed,
                description:this.state.description,
                calssification:this.state.classification,
                //need a way to attach the username to the plant that is being created
                username:''
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log('NewPlant - resJson' + resJson)
            this.handleAddPlant(resJson)
            this.setState = ({
                name:'',
                img:'',
                lightNeed:'',
                waterNeed:'',
                description:'',
                classification:'',
                username:''
            })
        })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <fieldset>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="name"><h4>Plant Name</h4></Form.Label>
                <Form.Control
                    type="text"
                    htmlFor="name"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="img"><h4>Image Link</h4></Form.Label>
                <Form.Control
                    type="text"
                    htmlFor="img"
                    id="img"
                    name="img"
                    value={this.state.img}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="lightNeed"><h4>Light Need</h4></Form.Label>
                <Form.Control
                    type="text"
                    htmlFor="lightNeed"
                    id="lightNeed"
                    name="lightNeed"
                    value={this.state.lightNeed}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="waterNeed"><h4>Water Need</h4></Form.Label>
                <Form.Control
                    type="text"
                    htmlFor="waterNeed"
                    id="waterNeed"
                    name="waterNeed"
                    value={this.state.waterNeed}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="description"><h4>Description</h4></Form.Label>
                <Form.Control
                    type="text"
                    htmlFor="description"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="classification"><h4>Classification</h4></Form.Label>
                <Form.Select
                    htmlFor="classification"
                    id="classification"
                    name="classification"
                    value={this.state.classification}
                    onChange={this.handleChange}
                >
                <option>1</option>
                  <option>2</option>
                    <option>3</option>
                </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit">
                "Add Bud!
                </Button>
                </fieldset>
            </form>
        )
    }
}

export default AddPlantForm;
