import React, {Component} from 'react'
import { Button, Form, input, Message} from 'semantic-ui-react'

class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      state: '',
      suburb: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    console.log(this.state)
    event.preventDefault();
  }
  render(){
    return (
      <div className='contactContainer'>
        <h2>Contact</h2>
        <div className='contactForm'>
          <Form success>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' name='firstName' onChange={this.handleInputChange} value={this.state.firstName}></input>
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' name='lastName' onChange={this.handleInputChange} value={this.state.lastName}></input>
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <label>Phone number</label>
              <input placeholder='Phone Number' name='phoneNumber' type='tel' onChange={this.handleInputChange} value={this.state.phoneNumber}></input>
            </Form.Field>
            <Form.Input label='Email' name='email' placeholder='joe@schmoe.com' onChange={this.handleInputChange} value={this.state.email}/>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>State</label>
                <input placeholder='state' name='state' onChange={this.handleInputChange} value={this.state.state}></input>
              </Form.Field>
              <Form.Field>
                <label>Suburb</label>
                <input placeholder='Suburb' name='suburb' onChange={this.handleInputChange} value={this.state.suburb}></input>
              </Form.Field>
            </Form.Group>

            <Message
              success
              header='Success'
              content="We will contact you shortly"
            />
            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>

    )
  }

}

export default Contact
