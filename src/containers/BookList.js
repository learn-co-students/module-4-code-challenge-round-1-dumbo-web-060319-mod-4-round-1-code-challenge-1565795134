import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    books : []
  }


  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())

    // .then(console.log)
    .then(bookObj => {
      this.setState({
        books: bookObj
      })
    })
  }

  this.state.books.map((book) => {

    return <BookList key={book.id} {...book}
    /> })
    
    
  render() {

    return (
      <div className="book-list">
        <h1></h1>
        <Form />
        <ul>{booksObj}</ul>
      </div>
    );
  }
}

export default BookList;
