import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <Link to="/"><h1>Freedom Solar</h1></Link>
        <div className='links'>
          <Button color='blue' icon='facebook' />
          <Link to="/residential"><h3>Residential</h3></Link>
          <Link to="/commercial"><h3>Commercial</h3></Link>
          <Link to="/utility"><h3>utility</h3></Link>
          <Link to="/contact"><h3>Contact</h3></Link>
        </div>
    </div>
  )
}

export default Footer
