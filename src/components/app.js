import React, { Component } from 'react'

import BookList from '../containers/book-list.js'
import BookDetail from '../containers/book-detail.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

//A container is a normal react component that gets bonded to the application state.
//Whenever the application state changes, the container will re-render. 
//We make containers when we want a component that can touch the Redux state directly.
