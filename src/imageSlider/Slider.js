import React, {Component} from 'react'
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
      slideIn: false,
      slideInterval: null,
      headings: [],
      text: []
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.dotClick = this.dotClick.bind(this)
  }

  componentWillMount() {
    axios.get('slider-config.json')
    .then((res) => {
      this.setImageArray(res.data)
      this.setHeadings(res.data)
      this.setText(res.data)
      this.slideInterval = this.autoSlide()
    })
    this.setState({slideIn: true})
  }

  componentWillUnmount(){
    this.setState({slideIn: false})
    clearInterval(this.slideInterval)
  }

  setImageArray(config) {

    const newArray = config.map(item => {
      return item.image;
    })

    this.setState({ background: newArray, current: 0, ready: true})
  }

  setHeadings(config) {
    const headings = config.map(item => {
      return item.heading;
    })

    this.setState({headings})
  }

  setText(config) {
    const text = config.map(item => {
      return item.text
    })

    this.setState({text})
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
              heading={this.state.headings[this.state.current]}
              text={this.state.text[this.state.current]}
              dots={  <Dots
                  numberOfDots={this.state.background.length}
                  isCurrent={this.state.current}
                  dotClick={this.dotClick}
                />}
              leftArrow={
                <LeftArrow previousSlide={this.previousSlide} />
              }
              rightArrow={
                <RightArrow nextSlide={this.nextSlide} />
              }
            />
          : null
        }
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
    return (
      setInterval( () => {this.nextSlide(); console.log('nextSlide')}, 8000)
    )

  }
}
