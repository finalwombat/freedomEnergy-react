import React from 'react'
import { FadeIn } from 'animate-components'

const Slide = (props) => {

  const current = props.background[props.current]
  const background = {
    backgroundImage: `url(${current})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <FadeIn duration='2s' timingFunction='ease-in'>
    <div style={background} className="slide">
    </div>
    </FadeIn>
  )
}

export default Slide
