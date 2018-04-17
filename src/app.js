'use strict'

import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false
    }
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }} />

          <label>
            <input type='checkbox' checked={this.state.checked} onChange={(e) => {
              this.setState({ checked: e.target.checked })
            }} />
            Checkbox
          </label>
          <label>
            <input type='radio' name='rd' value='1' />
            Radio 1
          </label>
          <label>
            <input type='radio' name='rd' value='2' />
            Radio 2
          </label>
        </form>
      </div>
    )
  }
}
