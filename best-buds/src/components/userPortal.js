import React, {Component} from 'react'
import Plant from './Plant'

class UserPortal extends Component{
  constructor(){
    super()
  }

  handleEdit = (plant) =>{
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
          
          <Plant></Plant>
          <Plant></Plant>

  
        </div>
      )
    }
  }
  
  export default UserPortal;
  