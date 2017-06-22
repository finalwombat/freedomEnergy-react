import React from 'react'
import Slider from './imageSlider/Slider'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import residentialImage from '../public/images/solar_house.jpg'
import commercialImage from '../public/images/solar_commercial.jpg'
import utilityImage from '../public/images/solar_utility.jpg'

const residentialBackground = {
  backgroundImage: `url(${residentialImage})`,
}

const commercialBackground = {
  backgroundImage: `url(${commercialImage})`
}

const utilityBackground = {
  backgroundImage: `url(${utilityImage})`
}

const Home = (props) => {

  const handleItemClick = (e) => {
  const name = e.target.name
  props.handleItemClick(name)
  }

  return (
    <div className="homeContainer">
      <Slider />
        <div className="cards">
        <Link to='/residential'>
          <div className="card" style={residentialBackground} onClick={handleItemClick} name='/residential'>
              <h2>Residential</h2>
              <h3>Take control of your electricity bill with Freedom Solar</h3>
          </div>
        </Link>
        <Link to='/commercial'>
          <div className="card" style={commercialBackground} onClick={handleItemClick} name='/commercial'>
              <h2>Commercial</h2>
              <h3>Cash flow positive energy solutions with $0 up front cost</h3>
          </div>
        </Link>
        <Link to='/utilities'>
          <div className="card" style={utilityBackground} onClick={handleItemClick} name='/utilities'>
              <h2>Utilities</h2>
              <h3>Creating a better grid with renewable energy solutions</h3>
          </div>
        </Link>
        </div>
    </div>
  )

}

export default Home
