import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  handleInputChange = event => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    // Stop page from reloading
    event.preventDefault()
    // Stop if any of our forms are empty
    let { title, author, img } = this.state
    if (title === '' || author === '' || img === '') return alert('AN INPUT CANNOT BE EMPTY!')
    // Use our function passed down from props
    this.props.addBook(this.state)
  }

  render() {
    return (
     <form className="form" onSubmit={event => this.handleSubmit(event)} onChange={this.handleInputChange}>
       <input type='text' name='title' placeholder='title' />
       <input type='text' name='author' placeholder='author' />
       <input type='text' name='img' placeholder='image' />
       <input type='submit' />
     </form>
    );
  }
}

export default Form;
