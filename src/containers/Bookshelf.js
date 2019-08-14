import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let { savedBooks, removeBook } = props
  
  let bookList = savedBooks.map(book => <Book key={book.id} bookData={book} removeBook={removeBook} /> )
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
      {
  savedBooks.length > 0
        ?
      bookList
        :
   "Add a new Book!"
      }
      </ul>
    </div>
  );
};

export default Bookshelf;
