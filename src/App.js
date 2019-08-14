import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    bookShelf: [],
    form: {
      title: "",
      author: "",
      img: ""
    },
    newBooks: []
  }

  // I had a million servers running before so localhost port 3005, my b

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        allBooks: data,
        newBooks: data
      }, () => {
        // console.log(this.state)
      })
    })
  }

  newBookPostFetch = () => {
    console.log("hittin the function", this.state.form)
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.form.title,
        author: this.state.author,
        img: this.state.form.img
      })
    })
    .then(res => res.json())
    .then(this.componentDidMount());
  }

  handleBookClick = (bookProps) => {
    // console.log("handlebookclick")
    // console.log(bookProps)
    if (!this.state.bookShelf.includes(bookProps)) { 
      
      this.setState({
        ...this.state,
        bookShelf: [
          ...this.state.bookShelf,
          bookProps
        ]
      }, () => {
        // console.log(this.state.bookShelf)
      })

    }
  }

  handleBookShelfClick = (bookProps) => {
    // console.log("bookshelf", bookProps)
    let newBookShelf = this.state.bookShelf.filter( (book) =>{
      return book !== bookProps
    })
    this.setState({
      ...this.state,
      bookShelf: newBookShelf
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    // console.log("handleformsubmit", event.target)
    this.setState({
      ...this.state,
      newBooks: [
        ...this.state.newBooks, this.state.form
      ]
    }, () => {
      this.newBookPostFetch()
    })
  }

  handleFormChange = (event) => {
    // console.log("form change", event.target.name, event.target.value)
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    }, () => {
      // console.log(this.state.form)
    })
  }

  //   fetch('https://example.com/delete-item/', {
  //   method: 'DELETE',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({id: '5bdcdfa40f0a326f858feae0'})
  // })
  // .then(res => res.text()) // OR res.json()
  // .then(res => console.log(res))

  handleDeleteBookClick = (props) => {
    console.log("delete book", props)
    fetch('http://localhost:3005/books', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: props.id})
    })
    .then(this.componentDidMount())
  }

  render() {
    return (
      <div className="book-container">
        <BookList 
          allBooks={this.state.newBooks}
          handleBookClick={this.handleBookClick}
          handleFormSubmit={this.handleFormSubmit}
          handleFormChange={this.handleFormChange}
          formState={this.state.form}
          handleDeleteBookClick={this.handleDeleteBookClick}
        />
        <Bookshelf 
          allBooks={this.state.bookShelf}
          handleBookClick={this.handleBookShelfClick}
        />
      </div>
    );
  }
}

export default App;
