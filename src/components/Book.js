import React from "react";

const Book = props => {
  
  return (
    <div onClick={() => props.onClick(props.book)}>
      <h2>{props.book.title}</h2>
      <h4>By: {props.book.author}</h4>
      {<img src={props.book.img}></img>}
    </div>
  );
};

export default Book;
