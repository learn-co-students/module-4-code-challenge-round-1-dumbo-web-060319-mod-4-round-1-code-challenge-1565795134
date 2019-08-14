import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = 
  {
    newBook: {}
  }

  renderBooks = () => 
  {

    let all = this.props.allBooks.map((book) => {
      return (
        <li key = {book.id}><Book key = {book.id} handleMyBooks = {this.props.handleMyBooks} book = {book}/></li>
      )
    })
    // all.push(<li><Book book = {this.state.newBook}></Book></li>)
    return all;
  }

  tempNewBook = (book) => 
  {
    this.setState({
      newBook: book
    })
  }

  render() {
    let id = this.props.allBooks.length+1;
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form tempNewBook = {this.tempNewBook} handleCreateNewBook = {this.props.handleCreateNewBook} newId = {id}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
