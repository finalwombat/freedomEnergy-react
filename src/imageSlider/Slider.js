import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import './Slider.css'
import axios from 'axios'
import Slide from './Slide'
import Dots from './Dots'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'


export default class Slider extends Component {
  constructor(props){
    super(props)

    this.state = {
      background: [],
      current: undefined,
      ready: false,
      slideIn: false
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.dotClick = this.dotClick.bind(this)
  }

  componentWillMount() {
    axios.get('slider-config.json')
    .then((res) => {
      this.setImageArray(res.data)
      this.autoSlide()
    })
    this.setState({slideIn: true})
    console.log(this.state.slideIn)
  }

  componentWillUnmount(){
    this.setState({slideIn: false})
    console.log(this.state.slideIn)
  }

  setImageArray(imageArray) {

    const newArray = imageArray.map(item => {
      return item.image;
    })

    this.setState({ background: newArray, current: 0, ready: true})
  }

  render(){
    return (
      <div className="slider">
        {
          this.state.ready ?
            <Slide
              key={this.state.current}
              background={this.state.background}
              current={this.state.current}
              ready={this.state.ready}
              className={this.state.slideIn ? 'slide-in' : 'slide-out' }
            />
          : null
        }
        <div className='contactButton'><Button color='green'>Contact Us</Button></div>
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
        <Dots
          numberOfDots={this.state.background.length}
          isCurrent={this.state.current}
          dotClick={this.dotClick}
        />
      </div>
    )
  }

  dotClick(dotIndex){
    this.setState({ current: dotIndex})
  }

  nextSlide() {
    let current = this.state.current
    let imageArray = this.state.background.length - 1;

    if((current >= 0) && (current !== imageArray))
      this.setState({ current: current + 1 })
    if(current === imageArray)
      this.setState({ current: 0})

  }

  previousSlide() {
  let current = this.state.current
  let imageArray = this.state.background.length - 1;

  if(current >= 1)
    this.setState({ current: current -1 })
  if(current === 0)
    this.setState({ current: imageArray})

}

  autoSlide() {
    setInterval( () => { this.nextSlide(); console.log('nextSlide')}, 8000 )
  }
}
