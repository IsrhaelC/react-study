'use strict'

import React, { Component } from 'react'

export default class Timer extends Component {
  constructor () {
    super()
    console.log('constructor timer')
    this.state = {
      time: 0
    }

    this.timer = 0
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.state.time !== nextState.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps)
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    console.log('render timer')
    return (
      <div>
        Timer: {this.state.time}
      </div>
    )
  }
}
