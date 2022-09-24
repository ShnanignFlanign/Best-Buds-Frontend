import React, {Component} from 'react'

class AddPlantModal extends Component{
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
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    htmlFor="name"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <label htmlFor="img">Image Link</label>
                <input
                    type="text"
                    htmlFor="img"
                    id="img"
                    name="img"
                    value={this.state.img}
                    onChange={this.handleChange}
                />

                <label htmlFor="lightNeed">Light Need</label>
                <input
                    type="text"
                    htmlFor="lightNeed"
                    id="lightNeed"
                    name="lightNeed"
                    value={this.state.lightNeed}
                    onChange={this.handleChange}
                />

                <label htmlFor="waterNeed">Water Need</label>
                <input
                    type="text"
                    htmlFor="waterNeed"
                    id="waterNeed"
                    name="waterNeed"
                    value={this.state.waterNeed}
                    onChange={this.handleChange}
                />

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    htmlFor="description"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />

                <label htmlFor="classification">Classification</label>
                <input
                    type="text"
                    htmlFor="classification"
                    id="classification"
                    name="classification"
                    value={this.state.classification}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Add Bud!"/>
            </form>
        )
    }
}
