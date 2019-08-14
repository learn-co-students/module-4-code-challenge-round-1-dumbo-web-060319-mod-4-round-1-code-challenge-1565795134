import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props);
  const books = props.books.map(book => (
    <Book key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          img={book.img}
          addToBookList={props.addToBookList}/>
  ))
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{books/*render list of books here*/}</ul>
    </div>
  );
};

export default Bookshelf;
