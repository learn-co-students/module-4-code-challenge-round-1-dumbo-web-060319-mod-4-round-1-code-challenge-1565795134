import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(response => response.json())
    .then(data => this.setState({allBooks: data}))
  }

  state = {
    allBooks: [],
    yourBooks: [],
    title: "",
    author: "",
    img: ""
  }

  handleClick = (book) => {
    console.log(book)

    if (this.state.yourBooks.includes(book)) {
      this.setState({
        allBooks: [...this.state.allBooks, book].sort((a, b) => a.id - b.id),
        yourBooks: this.state.yourBooks.filter(yourbook => yourbook !== book)
      })
    } else {
      this.setState({
        yourBooks: [...this.state.yourBooks, book],
        allBooks: [...this.state.allBooks].filter(abook => abook !== book)
      })
    }
  }

  handleForm = (event) => {
    
    
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      })
    } else if (event.target.name === "author") {
      this.setState({
        author: event.target.value
      })
    } else {
      this.setState({
        img: event.target.value
      })
    }

   
  }

  addBook = (event) => {
    event.preventDefault()

    this.setState({
      allBooks: [{ id: Math.random(), title: this.state.title, author: this.state.author, img: this.state.img}, ...this.state.allBooks]
    })
  }

  render() {
    
    return (
      <div className="book-container">
        <BookList addBook={this.addBook} handleForm={this.handleForm} title={this.state.title} author={this.state.author} img={this.state.img} handleClick={this.handleClick} allBooks={this.state.allBooks}/>
        <Bookshelf handleClick={this.handleClick} yourBooks={this.state.yourBooks}/>
      </div>
    );
  }
}

export default App;
