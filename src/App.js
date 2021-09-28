import React, { Component } from 'react'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import PokemonDetail from './components/PokemonDetail'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route
         path="/"
         exact
         render={(routerProps) => <Home {...routerProps}/>}
          />
          <Route
         path="/Pokemon/"
         exact
         render={(routerProps) => <SearchPage {...routerProps}/>}
          />
          <Route
         path="/Pokemon/:_id"
         exact
         render={(routerProps) => <PokemonDetail {...routerProps}/>}
          />
  
     
      </Switch>
      </Router>
    )
  }
}
