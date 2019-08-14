import React from "react";

class Form extends React.Component {
  render() {
    // console.log(this.props.formState)
    // debugger
    let {title, img, author} = this.props.formState

    return (
      <h1>
        {/*create form*/}
        <form onSubmit={(event) => this.props.handleFormSubmit(event)}>
          <label>
            Title:
            <input value={title} onChange={(event)=> this.props.handleFormChange(event) } type="text" name="title" />
          </label>
          <label>
            Author:
            <input value={author} onChange={(event)=> this.props.handleFormChange(event) } type="text" name="author" />
          </label>
          <label>
            Image:
            <input value={img} onChange={(event)=> this.props.handleFormChange(event) } type="text" name="img" />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </h1>
    );
  }
}

export default Form;
