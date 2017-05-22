import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/Products" component={Products}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
