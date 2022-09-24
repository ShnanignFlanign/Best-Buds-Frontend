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

    // handleEdit = (plant) =>{
    //     fetch('http://localhost:3003/plants' + plant._id, {
    //         method:'PUT',
    //         body: JSON.stringify({
    //             name:this.state.name,
    //             img:this.state.img,
    //             lightNeed:this.state.lightNeed,
    //             waterNeed:this.state.waterNeed,
    //             description:this.state.description,
    //             classification:this.state.classification,
    //         }),
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(resJson => {
    //         const copyPlants = [...this.state.plants]
    //         const findIndex = this.state.plants.findIndex(plant => plant._id === resJson.id)
    //         copyPlants[findIndex] = resJson
    //         this.setState = ({
    //             plants:[copyPlants]
    //         })
    //     })
    // }


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