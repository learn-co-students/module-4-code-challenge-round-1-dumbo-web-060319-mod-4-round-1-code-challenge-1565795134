import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    bookList: []
  };


  componentDidMount() {
    fetch(`http://localhost:3005/books`)
      .then(resp => resp.json())
      .then(data => {
        this.setState(() => ({ bookList: [...data] }))
      })
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.state.bookList)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{
          this.state.bookList.map(book => {
            return <Book key={book.id} bookInfo={book} />
          })
        }</ul>
      </div>
    );
  }
}

export default BookList;
