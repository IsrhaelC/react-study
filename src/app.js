'use strict'

import React from 'react'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({ checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }} />
          Mostrar conteudo
        </label>

        {this.state.showContent && <div>Olha eu aqui!</div>}
      </div>
    )
  }
}
