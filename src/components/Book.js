import React from "react";
import Bookshelf from '../containers/Bookshelf'

const Book = props => {
  console.log('Props from Book Component', props)

  handleClick = (e) => {
    console.log(e.target);
    <Bookshelf bookInfo={props} />
  }

  return (
    <div onClick={handleClick}>
      <h2>{props.bookInfo.title}</h2>
      <img src={props.bookInfo.img} alt="book" />
    </div>
  );
};

export default Book;
