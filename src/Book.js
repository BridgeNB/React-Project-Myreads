import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }
  render() {
    const {book} = this.props
    const coverImage = book.imageLinks.thumbnail
    const title = book.title
    return (<li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128, height: 188,
              backgroundImage: `url(${coverImage})`
            }}></div>
        </div>
        <div className="book-title">{title}</div>
        {
          book.authors && book.authors.map((author, index) => (<div className="book-authors" key={index}>{author}</div>))
        }
      </div>
    </li>)
  }
}

export default Book
