import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a new book!</h1>

        <form>
          <label>Enter a title</label>
          <input type="text" value={this.props.newBook} onChange={this.props.createBook} />

          <label>Enter an author</label>
          <input type="text" name="author" value="" onChange={this.props.createBook} />

          <label>Link to an image</label>
          <input type="text" name="image" value="" onChange={this.props.createBook} />

          <button>Create a book!</button>
        </form>

      </div>
    );
  }
}

export default Form;
