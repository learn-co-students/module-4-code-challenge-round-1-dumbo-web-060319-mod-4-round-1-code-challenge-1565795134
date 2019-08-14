import React from "react";

class Form extends React.Component {
  render() {
    return <h3>
    {
      <form>
       
        <label>
          Name:
          <input type="text" name="name"
           value={this.props.name}
           onChange={this.props.handleChange} /> 
        </label>
        <br></br>
        <label>
          Author:
          <input type="text" name="author"
           value={this.props.author}
           onChange={this.props.handleChange}  
            />
        </label>
        <br></br>
        <label>
          Img:
          <input type="text" name="img"
           value={this.props.image}
           onChange={this.props.handleChange}  
           />
        </label>
        <br></br>
          <input type="submit" value="Submit" />

      </form>
    }
    </h3>;
  }
}

export default Form;
