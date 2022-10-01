import React, {Component} from 'react'
import AddPlantModal from './AddPlantModal'
import EditModal from './EditModal'
import Plant from './Plant'

let baseURL = 'https://bestbud-backend.herokuapp.com'

class UserPortal extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'',
      img: '',
      lightNeed:'',
      waterNeed: '',
      description: '',
      classification: '',
      username:this.props.username,
      plants:[]
    }
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
  }


  getPlants = () => {
    fetch(baseURL + '/plants')
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
    console.log()
  }

  handleAddPlant = (plant) =>{
    const copyPlants = [...this.state.plants]
    copyPlants.unshift(plant)
    this.setState({
        plants:copyPlants,
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
            username: this.state.username
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
        this.setState({plants:[copyPlants]})
    })
  }

    //delete method 
    handleDeletePlant = (id) =>{
      console.log(id)
      fetch(baseURL + '/plants/' + id, {
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

  

    render (){

      return(
        <div>
          {/* pass down handle change to necessary modals */}
          {this.state.plants.map((plant) =>{
            if(plant.username === this.state.username){
              return (<Plant handleDeletePlant={this.handleDeletePlant} name={plant.name} img={plant.img} lightNeed={plant.lightNeed} waterNeed={plant.waterNeed} descritpion={plant.description} classification={plant.classification} username={this.state.username} key={plant._id} id={plant._id} plants={this.state.plants}/>)
            }
          })
          }
          <AddPlantModal handleAddPlant={this.handleAddPlant} handleChange={this.props.handleChange} username={this.state.username} updateUserPortal={this.updateUserPortal}/>
        </div>
      )
    }
  }
  
  export default UserPortal;
  