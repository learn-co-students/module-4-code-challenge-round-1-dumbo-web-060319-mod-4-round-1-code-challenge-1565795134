import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.bookShelf.map(book => 
        <li key={book.id} onClick={() => props.handleBookShelfClick(book)}>
        	<Book book={book}/>
        </li>)}
      </ul>
    </div>
  );
};

export default Bookshelf;
