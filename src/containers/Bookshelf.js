import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
  let bookshelfList = props.bookshelfBooks.map(book => {
    return <Book book={ book } key={ book.id } handleClickBook={ props.handleClickBook }/>
  })

  // key={ book.id }

  return (
    <div>
      <h1>Book Shelf 🤓</h1>
      <ul>{ bookshelfList }</ul>
    </div>
  );
};

export default Bookshelf;
