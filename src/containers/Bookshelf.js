import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{
        /*render list of books here*/
        props.allBooks.map((book) => {
          return (
          <Book 
            key={`bookshelf-${book.id}`}
            book={book}
            handleBookClick={props.handleBookClick}
            handleDeleteBookClick={()=>{}}
          />)
        })
        }</ul>
    </div>
  );
};

export default Bookshelf;
