import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookCategory extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    selfChange: false
  }
  render() {
    const {books} = this.props
    const categories = [
      {
        type: 'currentlyReading',
        title: 'Currently Reading'
      }, {
        type: 'wantToRead',
        title: 'Want to Read'
      }, {
        type: 'read',
        title: 'Read'
      }
    ]
    return (<div className='list-book-content'>
      {
        categories.map((category, index) => {
          const categoryBooks = books.filter(book => book.shelf === category.type)
          console.log(categoryBooks)
          return (<div className='bookshelf' key={index}>
            <h2 className='bookshelf-title'>{category.title}</h2>
            <div className='bookshelf-books'>
              <BookShelf books={categoryBooks} />
            </div>
          </div>)
        })
      }
    </div>)
  }
}

export default BookCategory
