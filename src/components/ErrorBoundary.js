import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  state = {
    hasError: false,
  }

  static getDrivedStateFromError(error) {
    console.log("we have an error", error)
    return { hasError: true }
  }

  componentDidCatch(error, info){
    console.log("error", error)
    console.log("info", info)
  }

  render() {
    if( this.state.hasError ) return (<h1>There is error on some place</h1>)
    return this.props.children
  }
}
