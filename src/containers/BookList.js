import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          key={"form"}
          handleFormSubmit={this.props.handleFormSubmit}
          handleFormChange={this.props.handleFormChange}
          formState={this.props.formState}
        />
        <ul>{
          /*render list of books here*/
          this.props.allBooks.map((book) => {
            return (
            <Book 
              key={book.id}
              book={book}
              handleBookClick={this.props.handleBookClick}
              handleDeleteBookClick={this.props.handleDeleteBookClick}
            />)
          })
          }</ul>
      </div>
    );
  }
}

export default BookList;
