import React from "react";

const Book = props => {

  //console.log(props.book)
  const { id, title, img } = props.book
  return (
    <div onClick={() => props.onClickHandle(props.book)}>
      <h2>{title}</h2>
      <img src={ img } alt="" />
    </div>
  );
};

export default Book;
