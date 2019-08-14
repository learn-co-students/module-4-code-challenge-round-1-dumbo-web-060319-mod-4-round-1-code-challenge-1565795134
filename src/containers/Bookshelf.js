import React, {Component} from "react";
import Book from "../components/Book";

class Bookshelf extends Component {
  render() {

    const renderBook = this.props.bookShelf.map(bookObj => {
      return <li key={bookObj.id}> <Book book={bookObj} handleClick={this.props.removeFromBookShelf}/> </li>
    })

    return (
      <div>
        <h1>Book Shelf</h1>
        <ul>{renderBook}</ul>
      </div>
    );
  }
};

export default Bookshelf;
