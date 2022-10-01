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

  updateUserPortal = (plant) =>{
    console.log({plants: plant})
    this.setState({plants: plant})
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


    render (){
      return(
        <div>
          {/* pass down handle change to necessary modals */}
          {this.state.plants.map((plant,i) =>{
            if(plant.username === this.state.username){
              return <Plant name={plant.name} img={plant.img} lightNeed={plant.lightNeed} waterNeed={plant.waterNeed} description={plant.description} classification={plant.classification} username={this.state.username} id={plant._id} plants={this.state.plants} key={i}/>
            }
          })
          }
          <AddPlantModal handleChange={this.props.handleChange} username={this.state.username} updateUserPortal={this.updateUserPortal}/>
        </div>
      )
    }
  }
  
  export default UserPortal;
  