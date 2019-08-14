import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
  	const {books} = this.props;
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{books.map(book => 
	        <li key={book.id} onClick={() => this.props.handleBookListClick(book)}>
	        	<Book book={book}/>
	        </li>
	      )}</ul>
      </div>
    );
  }
}

export default BookList;
