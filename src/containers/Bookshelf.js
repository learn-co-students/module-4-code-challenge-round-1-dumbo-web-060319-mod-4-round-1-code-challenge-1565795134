import React from "react";
import Book from "../components/Book";


const Bookshelf = (props) => {

  const books = props.yourBooks
  const handleClick = props.handleClick
  

  const renderYourBooks = () => {
    console.log(books)
    return books.map(book => <Book key={book.id} book={book} onClick={handleClick}/>)
  } 

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderYourBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
