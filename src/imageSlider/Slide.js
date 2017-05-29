import React from 'react'

const Slide = (props) => {

  const current = props.background[props.current]
  const background = {
    backgroundImage: `url(${current})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide slide-in"></div>
}

export default Slide
