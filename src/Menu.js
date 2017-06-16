import React, {Component} from 'react'
import { Menu as SemanticMenu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Menu extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: this.props.location }
  }

  componentWillReceiveProps(nextProps){
    this.setState({activeItem: nextProps.location})
  }


  handleItemClick = (e, { name }) => {
  this.props.handleItemClick(name ? name : '/')
  }

  render(){
    const {activeItem} = this.state
    return (

        <div className="mainMenu">
          <Link to="/" name='/'><img src="logo2.png" alt='logo' className="logo"  onClick={this.handleItemClick}/></Link>
          <SemanticMenu secondary pointing size='large'>
            <Link to="/residential"><SemanticMenu.Item name='/residential'active={activeItem === '/residential'} onClick={this.handleItemClick}/></Link>
            <Link to="/commercial"><SemanticMenu.Item name='/commercial' active={activeItem === '/commercial'} onClick={this.handleItemClick}/></Link>
            <Link to="/utilities"><SemanticMenu.Item name='/utilities' active={activeItem === '/utilities'} onClick={this.handleItemClick}/></Link>
            <Link to="/contact"><SemanticMenu.Item name='/contact' active={activeItem === '/contact'} onClick={this.handleItemClick}/></Link>
            <SemanticMenu.Menu position='right'>
              <SemanticMenu.Item href='tel:+1300695644' title="Call Freedom Solar" className='call' name='1300 695 644' color='green'/>
            </SemanticMenu.Menu>
          </SemanticMenu>
        </div>

    )

  }
}
