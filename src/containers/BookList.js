import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let { booksData, saveBook, addBook } = this.props
    let bookList = booksData.map(book => <Book key={book.id} bookData={book} saveBook={saveBook} /> )
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={addBook} />
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default BookList;
