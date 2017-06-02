import React, {Component} from 'react'
import { Button, Form, input, Message} from 'semantic-ui-react'

class Contact extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
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
      <div>
        <h2>Contact</h2>
        <Form success>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' name='firstName' onChange={this.handleInputChange} value={this.state.firstName}></input>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' name='lastName' onChange={this.handleInputChange} value={this.state.lastName}></input>
          </Form.Field>
          <Form.Input label='Email' name='email' placeholder='joe@schmoe.com' onChange={this.handleInputChange} value={this.state.email}/>
          <Message
            success
            header='Success'
            content="We will contact you shortly"
          />
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>

    )
  }

}

export default Contact
