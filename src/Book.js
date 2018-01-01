import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfSwitcher from './ShelfSwitcher'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    bookList: PropTypes.array.isRequired,
    switchShelf: PropTypes.func.isRequired
  }
  render() {
    const {book, books, switchShelf} = this.props
    return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
                }}></div>
              <ShelfSwitcher book={book} books={books} switchShelf={switchShelf}/>
            </div>
            <div className="book-title">
              {book.title}</div>
            {book.authors && book.authors.map((author, index) => (<div className="book-authors" key={index}>{author}</div>))}
          </div>
        </li>
    )
  }
}

export default Book
