import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img onClick={()=>props.handleFav(props.book)} alt={props.book.title} src={props.book.img} />
    </div>
  );
};

export default Book;
