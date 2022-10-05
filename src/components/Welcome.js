import React, {Component} from 'react'
import Plant from './Plant'
import AddPlantModal from './AddPlantModal'
import {Row, Col, Image} from "react-bootstrap"

class Welcome extends Component{
  constructor(props){
    super(props)
    this.state = {
      plants: []
    }
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

  render (){
    return(
      <div>
        <Row>
          <Col>
          <h1>Nuture your green thumbs with Best Buds. The app that helps you take care of your plants!</h1>
          </Col>
          <Col>
          <Image width={500} src="https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg" roundedCirle />
          </Col>
        </Row>
        <Row>
       
        
        <Row>
        <Col xs={12} md={6}>
          <h2>Your Buds</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-end">
          <AddPlantModal/>
        </Col>
        </Row>
        <Row className="pt-5">
        {this.state.plants.map((plant) =>{
            if(plant.username === 'default'){
              return (<Plant key={plant._id} name={plant.name} img={plant.img} lightNeed={plant.lightNeed} waterNeed={plant.waterNeed} descritpion={plant.description} classification={plant.classification}/>)
            }
          })
        }
        </Row>
        
        </Row>

      </div>
    )
  }
}

export default Welcome;
