import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Block from './components/Block'
import Contact from './components/Cantact'
import ErrorBoundary from './components/ErrorBoundary'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path='/' exact component={Block} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    )
  }
}
