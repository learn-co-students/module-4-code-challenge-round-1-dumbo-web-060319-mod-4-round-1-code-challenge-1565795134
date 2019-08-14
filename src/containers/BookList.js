import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {

    const renderBooks = this.props.bookList.map(bookObj => {
      return <li key={bookObj.id}> <Book book={bookObj} handleClick={this.props.addToBookShelf} /> </li>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>{renderBooks}</ul>
      </div>
    );
  }
}

export default BookList;
