import React from "react";

const Book = props => {
  let { id, title, author, img } = props.bookData
  // On click use props.handleListClick
  let bookClickAction = () => "toggle";
  props.saveBook ? bookClickAction = props.saveBook : bookClickAction = props.removeBook
  return (
    <div id={id} onClick={bookClickAction}>
      <h2>{title}</h2>
      <img src={img}/>
    </div>
  );
};

export default Book;
