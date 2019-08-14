import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
   return this.props.allBooks.map(book => <Book key={book.id} book={book} onClick={this.props.handleClick}/>)
  }

  render() {
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} handleForm={this.props.handleForm} title={this.props.title} author={this.props.author} img={this.props.img} />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
