import React, { Component } from 'react';
import Menu from './Menu'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Residential from './Residential'
import Commercial from './Commercial'
import Utilities from './Utilities'
import Contact from './Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <div>
            <Menu />
            <div className="main">
              <Route exact path="/" component={Home}/>
              <Route path="/residential" component={Residential}/>
              <Route path="/commercial" component={Commercial}/>
              <Route path="/utilities" component={Utilities}/>
              <Route path="/Contact" component={Contact}/>
            </div>
            <Footer />
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
