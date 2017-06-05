import React, { Component } from 'react';
import Menu from './Menu'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Routes from './Routes'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
