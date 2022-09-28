import React, {Component} from 'react'
import {Row, Col, Form, Button} from "react-bootstrap";

class EditForm extends Component{
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

    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <fieldset>
            <h3 className="text-center d-block">Change your Bud</h3>
            <Row className="justify-content-md-center">
            <Col xl={4}>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="name"><h5>Name</h5></Form.Label>
                <Form.Control
                    size="xl"
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
              </Col>
                <Col xl={6} className="pr-5">
                <Form.Group className="mb-3">
                <Form.Label htmlFor="lightNeed">
                  <i class="bi bi-sun-fill" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Light Need</span></i>
                  </Form.Label>
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
                <Form.Label htmlFor="waterNeed"><i class="bi bi-droplet-half" style={{ fontSize: 25, color: '#333333'}}><span style={{ fontSize:20}}> Water Need</span></i></Form.Label>
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
                <option>1</option>
                  <option>2</option>
                    <option>3</option>
                </Form.Select>
                </Form.Group>
              </Col>
              </Row>
              <div className="d-flex align-items-center justify-content-center">
              <Button className="buttonWidthLargeModal" variant="success" size="lg" type="submit">
              Save Changes
              </Button>
              </div>
                </fieldset>
            </form>
        )
    }
}

export default EditForm;
