import React from "react";

class Form extends React.Component {
  render() {
    //console.log(this.props)
    return(
      <form onSubmit={this.handleSubmit}>
      <h3>ADD BOOK</h3>
            <label>Title:<input type="text" value={this.props.newTitle} onChange={(e) => this.props.handleTitle(e.target.value)} style={{ display:"block"}}/></label>
            <label>Author:<input type="text" value={this.props.author} onChange={(e) => this.props.handleAuthor(e.target.value)} style={{ display:"block"}}/></label>
            <label>Image:<input type="text" value={this.props.image} onChange={(e) => this.props.handleImage(e.target.value)} /></label>
            <input type="submit" value="Submit" onClick={this.props.handleSubmit}/>
          </form>
    )
  }
}

export default Form;
