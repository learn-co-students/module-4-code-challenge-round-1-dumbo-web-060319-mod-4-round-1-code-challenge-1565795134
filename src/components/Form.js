import React from "react";

class Form extends React.Component {
  render() {
    return <h4>
      <form onChange={this.props.handleForm}>
          Add a Book: <br></br>
        Title: <input name="title" type="text" ></input> <br></br>
        Author: <input name="author" type="text"></input><br></br>
        Image URL:<input name="img" type="text"></input><br></br>
        <input type="submit" onClick={this.props.addBook}></input>
      </form>
    
    </h4>;
  }
}

export default Form;
