import React from 'react'
import Slider from './imageSlider/Slider'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import residentialImage from '../public/images/solar_house.jpg'
import commercialImage from '../public/images/solar_commercial.jpg'
import utilityImage from '../public/images/solar_utility.jpg'

const Home = (props) => {

  const handleItemClick = (e) => {
  const name = e.target.name
  props.handleItemClick(name)
  }

  return (
    <div className="homeContainer">
      <Slider />
      <div className="mainContent">
        <div className="cards">
          <div className="card">
            <Link to='/residential'><Image src={residentialImage} onClick={handleItemClick} name='/residential'/>
              <h2>Residential</h2>
            </Link>
          </div>
          <div className="card">
            <Link to='/commercial'><Image src={commercialImage} onClick={handleItemClick} name='/commercial'/><h2>Commercial</h2></Link>
          </div>
          <div className="card"><Link to='/utilities'><Image src={utilityImage} onClick={handleItemClick} name='/utilities'/><h2>Utilities</h2></Link></div>
        </div>
      </div>
    </div>
  )

}

export default Home
