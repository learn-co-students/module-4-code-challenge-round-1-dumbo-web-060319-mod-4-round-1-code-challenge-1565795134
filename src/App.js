import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    myBooks: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(data => this.setState({allBooks: data}))
  }

  addBook = (book) => {
    this.setState({
      myBooks: [...this.state.myBooks, book]
    })
  }

  removeBook = (book) => {
    let newMyBooksArray = [...this.state.myBooks]
    let index = newMyBooksArray.indexOf(book)
    newMyBooksArray.splice(index,1)

    this.setState({
      myBooks: newMyBooksArray
    })
  }

  makeNewBook = (newBook) => {
    let newBookArray = [...this.state.allBooks, newBook]
    this.setState({
      allBooks: newBookArray
    })
  }

  render() {
    console.log(this.state.allBooks)
    return (
      <div className="book-container">
        <BookList makeNewBook={this.makeNewBook} handleClick={this.addBook} allBooks={this.state.allBooks}/>
        <Bookshelf handleClick={this.removeBook} myBooks={this.state.myBooks}/>
      </div>
    );
  }
}

export default App;
