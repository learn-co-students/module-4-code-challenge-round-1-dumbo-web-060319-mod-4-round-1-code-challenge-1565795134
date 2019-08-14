import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  makeBooks = () => {
    let allBooks = this.props.allBooks
    return allBooks.map(book => 
      <Book 
        handleClick={this.props.handleClick} 
        key={book.id} 
        book={book}
      />
    )
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form makeNewBook={this.props.makeNewBook}/>
        <ul>{this.makeBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
