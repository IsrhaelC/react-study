'use strict'

import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      value: '2',
      checked: false
    }
  }

  render () {
    return (
      <div>
        <select value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
          <option value='1'>Opção 1</option>
          <option value='2'>Opção 2</option>
          <option value='3'>Opção 3</option>
        </select>
      </div>
    )
  }
}
