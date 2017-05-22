import React, {Component} from 'react'
import { Menu as SemanticMenu} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'

export default class Menu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render(){
    const {activeItem} = this.state
    return (
      <Router>
        <div>
          <SemanticMenu pointing secondary>
            <Link to="/"><SemanticMenu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/></Link>
            <Link to="/about"><SemanticMenu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/></Link>
            <Link to="/products"><SemanticMenu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick}/></Link>
          </SemanticMenu>
          <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/Products" component={Products}/>
          </div>
        </div>
      </Router>

    )

  }
}
