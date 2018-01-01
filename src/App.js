import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookCategory from './BookCategory'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  /*Load all books*/
  compoentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  swithShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      newBook.shelf = newShelf
      let updatedBooks = this.state.books.filter(book => book.id !== newBook.id)
      updatedBooks.push(newBook)
      this.setState({books: updatedBooks})
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">

        {console.log(books)}

        <Route exact path='/' render={() => (
            <div className='list-books'>
              <div className='list-book-title'>
                <h1>MyReads</h1>
              </div>
              <BookCategory
               books={ books }
               switchShelf={this.switchShelf}
              />
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
