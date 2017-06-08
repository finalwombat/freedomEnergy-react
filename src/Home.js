import React from 'react'
import Slider from './imageSlider/Slider'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import residentialImage from '../public/images/commerce1.jpg'
import commercialImage from '../public/images/commerce1.jpg'
import utilityImage from '../public/images/commerce1.jpg'

const Home = (props) => {

  const handleItemClick = (e, { name }) => {
  props.handleItemClick(name)
  }

  return (
    <div className="homeContainer">
      <Slider />
      <div className="mainContent">
        <div className="cards">
          <Card>
            <Image src={residentialImage} />
            <Card.Content>
              <Card.Header onClick={handleItemClick} name='/residential'><Link to='/residential'>Residential</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src={commercialImage} />
            <Card.Content>
              <Card.Header onClick={handleItemClick} name='/commercial'><Link to='/commercial'>Commercial</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src={utilityImage}/>
            <Card.Content>
              <Card.Header onClick={handleItemClick} name='/utilities'><Link to='/utilities'>Utilities</Link></Card.Header>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  )

}

export default Home
