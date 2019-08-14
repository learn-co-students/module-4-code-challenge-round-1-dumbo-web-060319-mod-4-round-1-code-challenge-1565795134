import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
           {
            props.myBookShelf.map(book => <Book book={book} key={book.name} 
            onClick={() => props.removeBookFromMyShelf(props.book)}
            />)
           }
      </ul>
    </div>
  );
};

export default Bookshelf;
