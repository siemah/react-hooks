import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {...state, count: state.count+1 }  
    default:
      throw new Error("action dosn't exist!")
  }
}

export default function Cantact() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const onClick = ({ target }) => dispatch({ type: target.getAttribute('data-type')}); 

  return (
    <div>
      <h1>Cantact: { state.count }</h1>
      <button data-type='inc' onClick={onClick}>click</button>
      <button data-type='dec' onClick={onClick}>handle error </button>
    </div>
  )
}
