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
            <fieldset className="formDesign">
              <h3 className="text-center d-block">New Bud</h3>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="name"><h5>Plant Name</h5></Form.Label>
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
                <Form.Label htmlFor="img"><h5>Image Link</h5></Form.Label>
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
                <Form.Label htmlFor="lightNeed"><h5>Light Need</h5></Form.Label>
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
                <Form.Label htmlFor="waterNeed"><h5>Water Need</h5></Form.Label>
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
                <Form.Label htmlFor="description"><h5>Description</h5></Form.Label>
                <Form.Control as="textarea" rows={4}
                    htmlFor="description"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="classification"><h5>Classification</h5></Form.Label>
                <Form.Select
                    htmlFor="classification"
                    id="classification"
                    name="classification"
                    value={this.state.classification}
                    onChange={this.handleChange}
                >
                <option>Algae</option>
                  <option>Moss</option>
                    <option>Fern</option>
                        <option>Coniferous</option>
                            <option>Flowering</option>
                </Form.Select>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center">
                <Button className="buttonWidth" variant="success" size="lg" type="submit">
                Add Your Bud!
                </Button>
                </div>
                </fieldset>
            </form>
        )
    }
}

export default AddPlantForm;
