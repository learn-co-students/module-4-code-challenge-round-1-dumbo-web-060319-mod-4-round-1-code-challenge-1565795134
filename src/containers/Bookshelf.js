import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let eachFavBook=props.favBook.map((book)=>{
    return <li><Book key={book.title} book={book} handleFav={props.handleFav} /></li>
  })
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{eachFavBook}</ul>
    </div>
  );
};

export default Bookshelf;
