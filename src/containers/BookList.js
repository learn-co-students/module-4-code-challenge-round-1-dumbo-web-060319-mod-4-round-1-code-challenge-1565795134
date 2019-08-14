import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  state = {
    newTitle : "",
    author: "",
    image: ""
  }

  handleTitle = (title) => {
    this.setState({newTitle: title})
  }

  handleAuthor = (author) => {
    this.setState({author: author})
  }

  handleImage = (image) => {
    this.setState({image: image})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state.title)
    fetch('http://localhost:3005/books', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.newTitle,
        author: this.state.author,
        img: this.state.img
      })
    }).then(response => response.json())
    .then(() => this.componentDidMount())
  }

  render() {
    console.log(this.state.newTitle)
    const book = this.props.bookList.map(book => {
      return <Book key={book.id} book={book} onClickHandle = {this.props.onClickHandle}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form newTitle={this.state.newTitle} image={this.state.image} handleTitle={this.handleTitle} handleAuthor={this.handleAuthor} handleImage={this.handleImage} handleSubmit={this.handleSubmit}/>
        <ul>{book}</ul>
      </div>
    );
  }
}

export default BookList;
