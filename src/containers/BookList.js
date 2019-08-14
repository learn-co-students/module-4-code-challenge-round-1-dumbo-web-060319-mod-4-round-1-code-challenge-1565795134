import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    const books = this.props.listedBooks.map(book => (
      <Book key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            img={book.img} />
    ))
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{/*render list of books here*/books}</ul>
      </div>
    );
  }
}

export default BookList;
