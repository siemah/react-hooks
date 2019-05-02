import React, { useState, useEffect } from 'react';
import './App.css'

const App = props => {
  
  const [ count, setCount] = useState(0);
  const [ name, setName ] = useState('guest');
  const updateTitle = () => {
    console.log("effect of updating a title", count);
    document.title = `You clicked ${count} time :)`;
  };
  useEffect(updateTitle);

  return (
    <div className="App" style={{height: '200vh'}}>
      <p>{name} clicked {count} time :)</p>
      <button onClick={() => setCount(count+1)}>click me</button>
      <input onChange={({target}) => setName(target.value)} />
    </div>
  )
}

export default App;
