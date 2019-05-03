import React, { lazy, Suspense } from 'react';
import './App.css'

const Block = lazy(() => import('./components/Block'))


const App = (props) => {
  
  return (
    <div>
      <Suspense fallback={<h2>Loading ..</h2>}>
        <Block />
      </Suspense>
    </div>    
  )

}

export default App;
