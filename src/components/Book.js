import React from "react";

const Book = props => {

  const handleClick = (e) => 
  {
    let book = e.currentTarget.children[0].innerText;
    props.handleMyBooks(book);
    
  }
  return (
    <div onClick = {handleClick}>
      <h2>{props.book.title}</h2>
      <img src = {props.book.img} />
    </div>
  );
};

export default Book;
