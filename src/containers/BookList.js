import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    //console.log(this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form name={this.props.name}
          author={this.props.author}
          image={this.props.image}
          handleChange={this.props.handleChange}
          />
        <ul>
          {
            this.props.books.map(book => <Book book={book} key={book.id} handleClick={this.props.handleClick}/>)
          }
        </ul>
      </div>
    );
  }
}

export default BookList;
