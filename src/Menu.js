import React, {Component} from 'react'
import { Menu as SemanticMenu} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Residential from './Residential'
import Commercial from './Commercial'
import Utilities from './Utilities'
import Contact from './Contact'


export default class Menu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render(){
    const {activeItem} = this.state
    return (
      <Router>
        <div>
          <Link to="/"><img src="logo.png" className="logo" onClick={this.handleItemClick}/></Link>
          <SemanticMenu pointing secondary>
            <Link to="/residential"><SemanticMenu.Item name='residential' active={activeItem === 'residential'} onClick={this.handleItemClick}/></Link>
            <Link to="/commercial"><SemanticMenu.Item name='commercial' active={activeItem === 'commercial'} onClick={this.handleItemClick}/></Link>
            <Link to="/utilities"><SemanticMenu.Item name='utilities' active={activeItem === 'utilities'} onClick={this.handleItemClick}/></Link>
            <Link to="/contact"><SemanticMenu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}/></Link>
          </SemanticMenu>
          <div>
          <Route exact path="/" component={Home}/>
          <Route path="/residential" component={Residential}/>
          <Route path="/commercial" component={Commercial}/>
          <Route path="/utilities" component={Utilities}/>
          <Route path="/Contact" component={Contact}/>
          </div>
        </div>
      </Router>

    )

  }
}
