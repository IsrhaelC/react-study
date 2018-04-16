'use strict'

import React from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

export default class App extends React.Component {
  render () {
    return (
      <h1 className='container'>
        <LikeButton />
        <SearchButton />
      </h1>
    )
  }
}
