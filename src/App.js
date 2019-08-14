import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  
  state = 
  {
    allBooks: [],
    myBooks: []
  }
  componentDidMount() 
  {
    fetch (`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then((data) => {
      this.setState({
        allBooks: data
      })
    })
  }
  handleMyBooks = (book) => 
  {
    //Find book 
    let found = "";
    for (let i=0; i < this.state.allBooks.length; i++)
    {
      if (this.state.allBooks[i].title == book)
      {
        found = this.state.allBooks[i];
      }
    }
    let foundBool = 0;
    let index = 0;
    for (let i=0; i < this.state.myBooks.length; i++)
    {
      if (this.state.myBooks[i] == found)
      {
        foundBool = 1;
        index = i;
      }
    }
    if (foundBool == 0)
    {
      let copy = this.state.myBooks;
      copy.push(found)
      this.setState({
        myBooks: copy
      })
    }
    else if (foundBool == 1)
    {
      let copy = this.state.myBooks;
      index = 0;
      for (let i=0; i < copy.length; i++)
      {
        if (copy[i] == found)
        {
          copy.splice(i,1);
        }
      }
      this.setState({
        myBooks: copy
      })
    }
  }

  handleCreateNewBook = (book) => 
  {
    let all = this.state.allBooks;
    all.push(book)
    this.setState({
      allBooks: all
    })
  }
  render() {
    console.log(this.state.allBooks)
    return (
      <div className="book-container">
        <BookList allBooks = {this.state.allBooks} handleMyBooks = {this.handleMyBooks} handleCreateNewBook = {this.handleCreateNewBook}/>
        <Bookshelf myBooks = {this.state.myBooks} handleMyBooks = {this.handleMyBooks}/>
      </div>
    );
  }
}

export default App;
