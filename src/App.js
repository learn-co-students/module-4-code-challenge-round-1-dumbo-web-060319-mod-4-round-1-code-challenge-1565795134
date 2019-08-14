import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookList: [],
    bookShelf: [],
    newBook: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(bookData =>
        this.setState({
          bookList: bookData
        })
      );
  }

  onBookClick = book => {
    /////// why does clicking on more than one create a new object in state 
    this.state.bookShelf.includes(book)
      ? this.setState({
          bookShelf: this.state.bookShelf.filter(bookObj => bookObj !== book)
        })
      : this.setState(prevState => ({
          ...prevState.bookShelf,
          bookShelf: [book]
        }));
  };

  createBook = event => {
    console.log("i will never succeed")
    // this.setState(prevState => ({
    //   ...prevState.bookList,
    //   bookList: event.target.value
    // }));
  };

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.bookList}
          onBookClick={this.onBookClick}
          newBook={this.state.newBook}
          bookHandler={this.createBook}
        />
        <Bookshelf books={this.state.bookShelf} />
      </div>
    );
  }
}

export default App;
