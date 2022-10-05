import React, {Component} from 'react'
import AddPlantModal from './AddPlantModal'
import EditModal from './EditModal'
import Plant from './Plant'

let baseURL = process.env.REACT_APP_BASE_URL

class UserPortal extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:this.props.username,
      plants:[],
    }
  }


  handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
  }


  getPlants = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/plants')
     .then((res) => {
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      this.setState({ plants: data.plants });
     });
  }

  componentDidMount(){
    this.getPlants()
  }

  handleUpdatePortal = (plant) =>{
    const copyPlants = [...this.state.plants]
    copyPlants.push(plant)
    this.setState({
        plants:copyPlants,
    })
  }


  handleAddPlant = (plant) =>{
    const copyPlants = [...this.state.plants]
    copyPlants.push(plant)
    this.setState({
        plants:copyPlants,
    })
  }

  //delete method 
  handleDeletePlant = (id) =>{
      console.log(id)
      fetch(process.env.REACT_APP_BACKEND_URL + '/plants/' + id, {
        method:'DELETE'
      })
      .then(res =>{
        const copyPlants = [...this.state.plants]
        const findIndex = this.state.plants.findIndex((plant) => plant._id === id)
        copyPlants.splice(findIndex,1)
        this.setState({
          plants: copyPlants
        })
      })
  }

    handleEdit = (e, plant) =>{
      e.preventDefault()
      fetch(process.env.REACT_APP_BACKEND_URL+ '/plants/' + plant.id, {
          method:'PUT',
          body: JSON.stringify(plant),
          headers:{
              'Content-Type':'application/json'
          }
      })
      .then(res => {
        if(res.ok === true){
          return res.json()
        }
      })
      .then(resJson => {
          console.log(resJson)
          const copyPlants = [...this.state.plants]
          const findIndex = this.state.plants.findIndex(foo => foo._id === resJson._id)
          console.log(findIndex)
          copyPlants[findIndex] = resJson
          console.log(copyPlants)
          this.setState({plants:copyPlants})
      })
  }

  

    render (){
      return(
        <div>
          <AddPlantModal handleAddPlant={this.handleAddPlant} handleChange={this.props.handleChange} username={this.state.username}/>
          {this.state.plants.map((plant,i) =>{
            console.log(plant)
            if(plant.username === this.state.username){
              return (<Plant handleDeletePlant={this.handleDeletePlant} name={plant.name} img={plant.img} lightNeed={plant.lightNeed} waterNeed={plant.waterNeed} description={plant.description} classification={plant.classification} username={this.state.username} key={i} id={plant._id} plants={this.state.plants} handleUpdatePortal={this.handleUpdatePortal} handleEdit={this.handleEdit}/>)
            }
          })
          }
        </div>
      )
    }
  }
  
  export default UserPortal;
  