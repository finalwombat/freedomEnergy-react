import React, { Component } from 'react';
import Menu from './Menu'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Footer from './Footer'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {location: '/'}
    this.getLocation = this.getLocation.bind(this)
    this.setLocation = this.setLocation.bind(this)
  }


  setLocation(name){
    const location = name ? name : this.getLocation()
    this.setState({location})
  }

  componentWillMount(){
    this.setLocation()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu handleItemClick={this.setLocation} location={this.state.location}/>
          <Routes handleItemClick={this.setLocation}/>
          <Footer handleItemClick={this.setLocation}/>
        </div>
      </Router>
    );
  }

  getLocation() {
    const loc = {location}
    return(loc.location.pathname)
  }
}



export default App;
