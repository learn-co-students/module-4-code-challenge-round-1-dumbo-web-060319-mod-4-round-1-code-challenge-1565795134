import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookList: []
  }

  addToBookList = (bookId) => {
      const bookToAdd = this.state.books.find(book => book.id === bookId)
      this.setState(prevState => ({
        bookList: [...prevState.bookList, bookToAdd]
      }))
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({
      books: books
    }))
  }
  render() {
    // console.log(this.state.books);

    return (
      <div className="book-container">
        <BookList listedBooks={this.state.bookList}/>
        <Bookshelf books={this.state.books} addToBookList={this.addToBookList}/>
      </div>
    );
  }
}

export default App;
