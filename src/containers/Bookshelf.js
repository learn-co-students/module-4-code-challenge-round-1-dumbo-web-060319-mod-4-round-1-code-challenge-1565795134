import React from "react";
import Book from "../components/Book";
import Form from "../components/Form"

const Bookshelf = props => {
  //console.log(props)
  const myBook = props.bookShelf.map(book => {
    return <Book key={book.id} book={book} onClickHandle = {props.onClickHandle} />
  })

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{myBook}</ul>
    </div>
  );
};

export default Bookshelf;
