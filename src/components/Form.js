import React from "react";

class Form extends React.Component {
  state = 
  {
    newBook: {
      title: "",
      author: "",
      img: ""
    }

  }

  handleTitle = (e) => 
  {
    this.setState({
      newBook: {
        id: this.props.newId,
        title: e.target.value,
        author: this.state.newBook.author,
        img: this.state.newBook.img
      }
    })
  }
  handleAuthor = (e) => 
  {
    this.setState({
      newBook: {
        id: this.props.newId,
        title: this.state.newBook.title,
        author: e.target.value,
        img: this.state.newBook.img
      }
    })  
  }
  handleImg = (e) => 
  {
    this.setState({
      newBook: {
        id: this.props.newId,
        title: this.state.newBook.title,
        author: this.state.newBook.author,
        img: e.target.value
      }
    })  
  }
  handleSubmit = (e) => 
  {
    e.preventDefault();
    this.props.handleCreateNewBook(this.state.newBook)
  }
  render() {

    return (
      <div>
        <h1>Book Form </h1>
        <form>
          <input type = "text" name = "title" placeholder = "Title" onChange = {this.handleTitle} value = {this.state.newBook.title}/>
          <input type = "text" name = "author" placeholder = "author" onChange = {this.handleAuthor} value = {this.state.newBook.author}/>
          <input type = "text" name = "img" placeholder = "img" onChange = {this.handleImg} value = {this.state.newBook.img}/>
          <input type = "submit" onClick = {this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Form;
