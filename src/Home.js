import React from 'react'
import Slider from './imageSlider/Slider'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = (props) => {

  console.log(props)
  const handleItemClick = (e, { name }) => {
  props.handleItemClick(name)
  }

  return (
    <div className="homeContainer">
      <Slider />
      <div className="mainContent">
        <div className="cards">
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header onClick={handleItemClick} name='/residential'><Link to='/residential'>Residential</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header name='/commercial'><Link to='/commercial'>Commercial</Link></Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Image src='../public/images/commerce1.jpg' />
            <Card.Content>
              <Card.Header name='/utilities'><Link to='/utilities'>Utilities</Link></Card.Header>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  )

}

export default Home
