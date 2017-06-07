import React, {Component} from 'react'
import { Menu as SemanticMenu} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Residential from './Residential'
import Commercial from './Commercial'
import Utilities from './Utilities'
import Contact from './Contact'


export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: this.props.location }
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({activeItem: nextProps.location})
  }


  handleItemClick = (e, { name }) => {
  this.props.handleItemClick(name ? name : '/')
  }

  render(){
    const {activeItem} = this.state
    return (

        <div className="mainMenu">
          <Link to="/" name='/'><img src="logo.png" className="logo"  onClick={this.handleItemClick}/></Link>
          <SemanticMenu secondary pointing >
            <Link to="/residential"><SemanticMenu.Item name='/residential'active={activeItem === '/residential'} onClick={this.handleItemClick}/></Link>
            <Link to="/commercial"><SemanticMenu.Item name='/commercial' active={activeItem === '/commercial'} onClick={this.handleItemClick}/></Link>
            <Link to="/utilities"><SemanticMenu.Item name='/utilities' active={activeItem === '/utilities'} onClick={this.handleItemClick}/></Link>
            <Link to="/contact"><SemanticMenu.Item name='/contact' active={activeItem === '/contact'} onClick={this.handleItemClick}/></Link>
          </SemanticMenu>
        </div>

    )

  }
}
