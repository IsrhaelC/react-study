'use strict'

import React from 'react'
import Timer from './timer'

export default class App extends React.Component {
  constructor () {
    super()
    console.log('constructor')
    this.state = {
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('mount')
  }

  componentDidMount () {
    console.log('didMount')
  }

  render () {
    console.log('render')
    return (
      <h1>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}> Show / Hide Timer </button>
      </h1>
    )
  }
}
