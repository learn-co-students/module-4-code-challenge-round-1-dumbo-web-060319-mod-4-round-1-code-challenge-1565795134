import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    bookList: [],
    bookShelf: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          bookList: data
        });
      });
  }

  addToBookShelf = book => {
    this.setState({
      bookShelf: [book, ...this.state.bookShelf]
    });
  };

  removeFromBookShelf = book => {
    const copyOfBookShelf = [...this.state.bookShelf]
    const indexBook = this.state.bookShelf.indexOf(book)
    copyOfBookShelf.splice(indexBook, 1)
    this.setState({
      bookShelf: copyOfBookShelf
    })
  };

  // addBook = (e, term) => {
  //   e.preventDefault()
  //   this.setState({
  //     bookList: [{
  //       title: term.title,
  //       author: term.aurthor,
  //       img: term.img
  //     }, ...this.state.bookList]
  //   })
  // }

  addBook = (e, term) => {
    e.preventDefault()

    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: term.title,
        author: term.aurthor,
        img: term.img
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        bookList: [data, ...this.state.bookList]
      })
    })
  }

  render() {
    return (
      <div className='book-container'>
        <BookList
          bookList={this.state.bookList}
          addToBookShelf={this.addToBookShelf}
          addBook={this.addBook}
        />
        <Bookshelf
          bookShelf={this.state.bookShelf}
          removeFromBookShelf={this.removeFromBookShelf}
        />
      </div>
    );
  }
}

export default App;
