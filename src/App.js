import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form"

class App extends Component {
  
  state = {
    allBooks: [],
    bookshelf: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(data => this.setState({
        allBooks: data
      }))
  }

  handleAddBook = (book) => {
    if (!this.state.bookshelf.includes(book)) {
      this.setState({
        bookshelf: [...this.state.bookshelf, book]
      })
    }
  }

  handleRemoveBook = (book) => {
    let removedBookshelf = this.state.bookshelf.filter(bookObj => bookObj !== book)
    this.setState({
      bookshelf: removedBookshelf
    })
  }

  addNewBook = (book) => {
    this.setState({
      allBooks: [...this.state.allBooks, book]
    })
  }
  
  
  
  render() {
    return (
      <div className="book-container">
        <BookList allBooks={ this.state.allBooks } handleClickBook={ this.handleAddBook } addNewBook={ this.addNewBook }/>
        <Bookshelf bookshelfBooks={ this.state.bookshelf } handleClickBook={ this.handleRemoveBook }/>
      </div>
    );
  }
}

export default App;
