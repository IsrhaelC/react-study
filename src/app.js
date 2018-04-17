'use strict'

import React from 'react'
import Timer from './timer'

export default class App extends React.Component {
  constructor () {
    super()
    console.log('constructor app')
    this.state = {
      showTimer: true,
      time: 0
    }
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  render () {
    console.log('render app')
    return (
      <h1>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props</button>
      </h1>
    )
  }
}
