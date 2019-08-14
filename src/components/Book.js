import React from "react";

const Book = props => {
  // console.log(props)
  let {id, author, img, title} = props.book 
  
  return (
    <div>
      <div onClick={()=>{props.handleBookClick(props.book)}}>
        <h2>{/*book title*/ title }</h2>
        <img src={img} alt=""/>
      </div>
      <button
        onClick={() => {props.handleDeleteBookClick(props.book)}}>
        Delete 
      </button>
    </div>
  );
};

export default Book;
