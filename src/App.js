import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {

  state = {
    bookList : [],
    bookListCopy: [],
    bookShelf : []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(response => response.json())
    .then(data => this.setState({ bookList: data, bookListCopy: data }))
  }

  onClickHandle = (book) => {
  this.state.bookShelf.includes(book) ? this.setState({ bookShelf: this.state.bookShelf.filter(myBook => myBook != book)}) : this.setState({ bookShelf: [...this.state.bookShelf, book]})
  }

  render() {

    //console.log(this.state.bookList)
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} onClickHandle = {this.onClickHandle}/>
        <Bookshelf bookShelf={this.state.bookShelf} onClickHandle = {this.onClickHandle} />
      </div>
    );
  }
}

export default App;
