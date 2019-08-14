import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBooks = () => 
  {
    let all = props.myBooks.map((book) => {
      return (
        <li key = {book.id}><Book key = {book.id} handleMyBooks = {props.handleMyBooks} book = {book}/></li>
      )
    })
    return all;
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
