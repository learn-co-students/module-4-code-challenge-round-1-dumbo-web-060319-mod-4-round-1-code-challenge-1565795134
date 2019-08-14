import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

	state = {
		books: [],
		bookShelf: [],
		id: 1
	}

	handleBookListClick = (book) => {
		if (this.state.bookShelf.includes(book)) return;
		this.setState({bookShelf: [...this.state.bookShelf, book]});
	}

	handleBookShelfClick = (book) => {
		if (!this.state.bookShelf.includes(book)) return;
		this.setState({bookShelf: this.state.bookShelf.filter(curr => curr !== book)});
	}

	handleSubmit = (states) => {
		fetch(`http://localhost:3005/books`, {
			method: "POST",
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({...states, id: this.state.id + 1})
		})
		.then(this.setState({books: [...this.state.books, {...states, id: this.state.id + 1}], id: this.state.id + 1 }));
	}

	componentDidMount = () => {
		fetch(`http://localhost:3005/books`)
		.then(res => res.json())
		.then(books => this.setState({books, id: books.length}));
	}
  render() {
    return (
      <div className="book-container">
        {this.state.books.length > 0 ? <BookList handleSubmit={this.handleSubmit} handleBookListClick={this.handleBookListClick} books={this.state.books}/> : null}
        <Bookshelf handleBookShelfClick={this.handleBookShelfClick} bookShelf={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
