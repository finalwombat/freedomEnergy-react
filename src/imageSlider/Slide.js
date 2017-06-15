import React from 'react'
import { FadeIn } from 'animate-components'

const Slide = (props) => {

  const current = props.background[props.current]
  const background = {
    backgroundImage: `url(${current})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const heading = props.heading
  return (
    <FadeIn duration='2s' timingFunction='ease-in'>
    <div style={background} className="slide">
      <h1>{heading}</h1>
    </div>
    </FadeIn>
  )
}

export default Slide
