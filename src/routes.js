
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ProductPage from './Pages/ProductPage/ProductPage'

export default function routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/product/:_id' component={ProductPage}></Route>
      </Switch>
    </div>
  )
}