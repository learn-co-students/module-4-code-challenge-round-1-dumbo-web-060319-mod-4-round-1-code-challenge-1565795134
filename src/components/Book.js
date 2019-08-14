import React from "react";

class Book extends React.Component {

  handleClick = () => {
    this.props.addToBookList(this.props.id)
  }

  render() {
    console.log(this.props);
      return (
      <div onClick={this.handleClick} >
        <h2>{/*book title*/this.props.title}</h2>
        <img src={ /*book img*/this.props.img} />
      </div>
    )
  }
}

export default Book;
