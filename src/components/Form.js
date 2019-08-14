import React from "react";

class Form extends React.Component {
  render() {
    return( 
      <React.Fragment>
    <h1>{/*create form*/}</h1>
    <form>
      <input value={this.props.title}  onChange={this.props.handleForm} type="text" name="title" placeholder="title"></input>
      <input value={this.props.author} onChange={this.props.handleForm} type="text" name="author" placeholder="author"></input>
      <input value={this.props.img} onChange={this.props.handleForm} type="text" name="img" placeholder="img"></input>
      <input onClick={this.props.handleSubmit} type="submit" ></input>
    </form>
    </React.Fragment>
    )
  }
}

export default Form;
