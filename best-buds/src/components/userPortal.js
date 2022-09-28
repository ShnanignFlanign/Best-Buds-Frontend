import React, {Component} from 'react'
import AddPlantModal from './AddPlantModal'
import EditModal from './EditModal'
import Plant from './Plant'

class UserPortal extends Component{
  constructor(){
    super()
    this.state = {
      name:'',
      img: '',
      lightNeed:'',
      waterNeed: '',
      description: '',
      classification: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
}

  handleEdit = (plant) =>{
    //process.env.REACT_APP_BACKENDURL goes in fetch upon deployment of server
    fetch('http://localhost:3003/plants' + plant._id, {
        method:'PUT',
        body: JSON.stringify({
            name:this.state.name,
            img:this.state.img,
            lightNeed:this.state.lightNeed,
            waterNeed:this.state.waterNeed,
            description:this.state.description,
            classification:this.state.classification,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(resJson => {
        const copyPlants = [...this.state.plants]
        const findIndex = this.state.plants.findIndex(plant => plant._id === resJson.id)
        copyPlants[findIndex] = resJson
        this.setState = ({
            plants:[copyPlants]
        })
    })
  }

    render (){
      return(
        <div>
          {/* pass down handle change to necessary modals */}
          <Plant handleChange={this.props.handleChange} />
          <AddPlantModal handleChange={this.props.handleChange} />
        </div>
      )
    }
  }
  
  export default UserPortal;
  