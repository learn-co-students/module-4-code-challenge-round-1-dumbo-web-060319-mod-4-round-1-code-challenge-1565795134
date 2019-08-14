import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import { timingSafeEqual } from "crypto";

class App extends Component {

  state = {
    books: [],
    myBookShelf: [],
    name: "",
    author: "",
    image: ""
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(data => {
      this.setState({
        books: data
      })
    })
  }

  handleClick = (book) => {
    console.log(book)
    this.setState({
      myBookShelf: [book, ...this.state.myBookShelf]
    });
  }

  removeBookFromMyShelf = (book) => {
    console.log(book)
  }

  handleChange = (e) => {
 console.log(e.target.value)
   this.setState({
   

   })

  }


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick}
        name={this.state.name}
        author={this.state.author}
        image={this.state.image}
        handleChange={this.handleChange}
        />
        <Bookshelf myBookShelf={this.state.myBookShelf}
        removeBookFromMyShelf={this.removeBookFromMyShelf} />
      </div>
    );
  }
}

export default App;
