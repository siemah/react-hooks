import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import React, { lazy, Suspense } from 'react';
import './App.css'

const Block = lazy(() => import('./components/Block'))
const Cantact = lazy(() => import('./components/Cantact'))

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>hOME</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Switch>
       <Suspense fallback={<h1>Loading ..</h1>}>
          <Route exact path='/' component={Block} />
          <Route path='/contact' component={Cantact} /></Suspense>
      </Switch>
    </BrowserRouter>  
  )

}

export default App;
