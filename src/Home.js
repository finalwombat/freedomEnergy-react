import React from 'react'
import Slider from './imageSlider/Slider'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homeContainer">
      <Slider />
      <div className="mainContent">
        <div className="cards">
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header><Link to='/residential'>Residential</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header><Link to='/commercial'>Commercial</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header><Link to='/utilities'>Utilities</Link></Card.Header>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  )

}

export default Home
