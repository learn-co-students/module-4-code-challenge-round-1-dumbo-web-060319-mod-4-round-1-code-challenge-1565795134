import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    return <h1>
      <form>
        <input type="text" name="title" onChange={this.handleChange}  value={this.state.inputForm} placeholder="Title" />
        <input type="text" name="author" onChange={this.handleChange}  value={this.state.inputForm} placeholder="Author" />
        <input type="text" name="img" onChange={this.handleChange}  value={this.state.inputForm} placeholder="Img" />
        <input type="submit" onClick={(e) => this.props.addBook(e, this.state)}/>
      </form>
    </h1>;
  }
}

export default Form;
