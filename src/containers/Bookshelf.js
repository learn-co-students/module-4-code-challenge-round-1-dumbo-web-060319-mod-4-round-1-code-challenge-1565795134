import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {
          props.myBooks.map(book => 
            <Book 
              handleClick={props.handleClick} 
              key={book.id} 
              book={book}
            />
          )
        }
      </ul>
    </div>
  );
};

export default Bookshelf;


// return allBooks.map(book => <Book handleClick={this.props.handleClick} key={book.id} book={book}/>)
