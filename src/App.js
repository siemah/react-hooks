import React, { useReducer } from 'react';
import './App.css'

const init = (state) => state;

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {...state, count: state.count+1}
  
    case 'dec':
      return {...state, count: state.count-1}

    case 'reset':
      return init(action.payload)

    default:
      throw new Error('nothing to do')
      break;
  }
}
const initState = {count: 0};
const App = (props) => {
  
  const [ state, dispatch ] = useReducer(reducer, initState, init);

  const onClick = ({ target }) => {
    dispatch({ type: target.getAttribute('data-type') })
  }

  return (
    <div>
      count: {state.count}
      <button onClick={onClick} data-type="inc">+</button>
      <button onClick={onClick} data-type="dec">-</button>
      <button onClick={() => dispatch({ type: "reset", payload: initState })}>reset</button>
    </div>    
  )

}

export default App;
