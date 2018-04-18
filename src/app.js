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
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}

          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}>

          <input type='name' name='name' />
          <input type='email' name='email' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}
