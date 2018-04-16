'use strict'

import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: 'Isrhael'
    }
  }

  render () {
    return (
      <h1 className='container' onClick={() => this.setState({
        text: 'Outro Texto'
      })}>
        {this.state.text}
      </h1>
    )
  }
}
