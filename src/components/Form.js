import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    imageUrl: ""
  }

  handleOnChangeInput = (event) => {
    let targetKey = event.target.name
    let targetValue = event.target.value

    this.setState({
      [targetKey]: targetValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeNewBook(this.state)
  }

  render() {
    // console.log(this.state)
    // console.log(this.props.makeNewBook)
    // console.log('title: ', this.state.title)
    // console.log('author: ', this.state.author)
    // console.log('image Url: ', this.state.imageUrl)
    return (
     <h1>
      {
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input onChange={this.handleOnChangeInput} type="text" name="title" value={this.state.title}/>
          </label>
          <br></br>
          <label>
            Author:
            <input onChange={this.handleOnChangeInput} type="text" name="author" value={this.state.author}/>
          </label>
          <br></br>
          <label>
            Image Url:
            <input onChange={this.handleOnChangeInput} type="text" name="imageUrl" value={this.state.imageUrl}/>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      }
     </h1>
    )
  }
}

export default Form;


