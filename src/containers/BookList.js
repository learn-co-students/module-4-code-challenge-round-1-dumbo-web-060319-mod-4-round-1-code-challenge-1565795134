import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let eachBook=this.props.allBooks.map((book)=>{
       return <li><Book handleFav={this.props.handleFav} key={book.title} book={book}/></li>
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit} author={this.props.author} img={this.props.img} title={this.props.title} handleForm={this.props.handleForm}/>
        <ul>{eachBook}</ul>
      </div>
    );
  }
}

export default BookList;
