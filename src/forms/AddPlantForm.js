import React, {Component} from 'react'
import {Form, Button} from "react-bootstrap";

let baseURL = 'https://bestbud-backend.herokuapp.com/plants'

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
        console.log(e.target.value)
        console.log(e.target.id)
        this.setState({[e.target.id]: e.target.value})
    }

    handleAddPlant = (plant) =>{
        const copyPlants = [...this.state.plants]
        copyPlants.push(plant)
        this.setState({
            plants:copyPlants
        })
    }

    //NEED A WAY TO RE RENDER PAGE SO THAT THE NEW PLANT SHOWS UP
    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        const plant =  JSON.stringify({
            name:this.state.name,
            img:this.state.img,
            lightNeed:this.state.lightNeed,
            waterNeed:this.state.waterNeed,
            description:this.state.description,
            classification:this.state.classification,
            username:this.props.username
        })
        console.log(plant)
        fetch(process.env.REACT_APP_BACKEND_URL + '/plants', {
            method:'POST',
            body: plant,
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.handleAddPlant(resJson)
            this.setState({
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
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="description"><h5>Description</h5></Form.Label>
                <Form.Control as="textarea" rows={4}
                    htmlFor="description"
                    id="description"
                    name="description"
                    onChange={this.handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="classification"><h5>Classification</h5></Form.Label>
                <Form.Select
                    htmlFor="classification"
                    id="classification"
                    name="classification"
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
