import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Residential from './Residential'
import Commercial from './Commercial'
import Utilities from './Utilities'
import Contact from './Contact'

const Routes = () => {
  return (
    <div className='main'>
      <Route exact path="/" component={Home}/>
      <Route path="/residential" component={Residential}/>
      <Route path="/commercial" component={Commercial}/>
      <Route path="/utilities" component={Utilities}/>
      <Route path="/Contact" component={Contact}/>
    </div>
  )
}

export default Routes
