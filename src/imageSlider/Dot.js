import React from 'react'

const Dot = ({ name, dotClick, dotIndex }) => {
  return <span className={name} onClick={ () => dotClick(dotIndex)}></span>
}

export default Dot
