'use strict'

import React from 'react'

export default class Title extends React.Component {
  render () {
    return (
      <h1>
                Olá {this.props.name}!
      </h1>
    )
  }
}
