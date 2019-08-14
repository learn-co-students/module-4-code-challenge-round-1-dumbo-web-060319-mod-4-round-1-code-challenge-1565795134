import React from "react";

class Form extends React.Component {
  
  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
  
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        img: this.state.img
      }) 
    })
      .then(resp => resp.json())
      .then(newBook => this.props.addNewBook(newBook))
  }
  
  
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e) }>
        <label>Title of Book:</label>
        <input type="text" value={ this.state.title } name="title" onChange={ this.handleChange }  />
        <label>Author of Book:</label>
        <input type="text" value={ this.state.author } name="author" onChange={ this.handleChange } />
        <label>Image for Book:</label>
        <input type="text" value={ this.state.img } name="img" onChange={ this.handleChange }  />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;


// {/* <h1>{/*create form*/}</h1>; */}