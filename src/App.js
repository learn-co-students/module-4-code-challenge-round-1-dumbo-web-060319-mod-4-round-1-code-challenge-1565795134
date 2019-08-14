import React, { Component } from 'react';
import './App.css';
import BookList from './containers/BookList';
import Bookshelf from './containers/Bookshelf';

// URL to json server
const booksUrl = 'http://localhost:3005/books';

class App extends Component {
  state = {
    booksData: [],
    booksDataClone: [],
    savedBooks: []
  };

  componentDidMount() {
    this.fetchBooks();
  }

  // Get books
  fetchBooks = () => {
    fetch(booksUrl)
      .then(res => res.json())
      .then(booksData =>
        this.setState({ booksData, booksDataClone: booksData })
      );
  };

  saveBook = event => {
    // destructure
    let { booksDataClone, savedBooks } = this.state
    // Get the book's id
    let bookID = event.currentTarget.id
    // Find our current book in our data
    let currentBook = booksDataClone.find(book => book.id == bookID)
    console.log(currentBook)
    // Handle duplicates
    if (savedBooks.includes(currentBook)) return;
    // Set state
    this.setState({
      savedBooks: [...savedBooks, currentBook]
    })
  };

  removeBook = event => {
        // destructure
        let { booksDataClone, savedBooks } = this.state
        // Get the book's id
        let bookID = event.currentTarget.id
        // Find our current book in our data
        let currentBook = savedBooks.find(book => book.id == bookID)
        // Get all the books that we didn't click on
        // Store them into an array
        let updatedSavedBooksArr = [...savedBooks].filter(book => book.id != bookID)
        // Set the state
        this.setState({
          savedBooks: [...updatedSavedBooksArr]
        })
  }

  addBook = bookObj => {
    console.log(bookObj)
    // Don't continue if we already have the book
    if (this.state.booksData.find(book => book.title.toLowerCase() === bookObj.title.toLowerCase())) return alert('book already exsists');
    
    let { booksData, booksDataClone } = this.state
    // Set our state to include the book!
    this.setState({
      booksData: [...booksData, bookObj],
      booksDataClone: [...booksDataClone, bookObj]
    })
  }
  render() {
    let { booksData, booksDataClone, savedBooks } = this.state;
    return (
      <div className="book-container">
        <BookList booksData={booksData} saveBook={this.saveBook} addBook={this.addBook} />
        <Bookshelf savedBooks={savedBooks} removeBook={this.removeBook} />
      </div>
    );
  }
}

export default App;
