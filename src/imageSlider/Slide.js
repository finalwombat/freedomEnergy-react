import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { FadeIn } from 'animate-components'

const Slide = (props) => {

  const current = props.background[props.current]
  const background = {
    backgroundImage: `url(${current})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const heading = props.heading
  const text = props.text
  return (
    <FadeIn duration='2s' timingFunction='ease-in'>
    <div style={background} className="slide">
      <h1>{heading}</h1>
      <h2>{text}</h2>
      <Link to="/contact"><div className='contactButton'><Button size='big'>Contact Us</Button></div></Link>
    </div>
    </FadeIn>
  )
}

export default Slide
