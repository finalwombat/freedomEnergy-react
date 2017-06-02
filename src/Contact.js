import React, {Component} from 'react'
import { Button, Form, input, Message} from 'semantic-ui-react'

class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <Form success>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'></input>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'></input>
          </Form.Field>
          <Form.Input label='Email' placeholder='joe@schmoe.com' />
          <Message
            success
            header='Success'
            content="We will contact you shortly"
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>

    )
  }

}

export default Contact
