import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    
    let bookList = this.props.allBooks.map(book => {
      return <Book book={ book } key={ book.id } handleClickBook={ this.props.handleClickBook }/>
    })

    return (
      <div className="book-list">
        <h1>Book List 📚</h1>
        <Form addNewBook={ this.props.addNewBook }/>
        <ul>{ bookList }</ul>
      </div>
    );
  }
}

export default BookList;
