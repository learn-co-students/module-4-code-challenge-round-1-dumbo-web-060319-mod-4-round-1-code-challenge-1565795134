import React from "react";

class Form extends React.Component {
	state = {
		title: "",
		author: "",
		img: ""	
	}

	handleTitle = (value) => {
		// this.setState({title: })
		this.setState({title: value})
	}

	handleAuthor = (value) => {
		this.setState({author: value})
	}

	handleImage = (value) => {
		this.setState({img: value})
	}

  render() {
    return (<div>
		    Title:
		    <input onChange={(event) => this.handleTitle(event.target.value)} type="text" name="name" /><br/>
		    Author:
		    <input onChange={(event) => this.handleAuthor(event.target.value)} type="text" author="name" /><br/>
		    Image url:
		    <input onChange={(event) => this.handleImage(event.target.value)} type="text" image="name" /><br/>
			  <button onClick={() => 
			  	this.props.handleSubmit(this.state)
			  }>Add</button> <br/>
		</div>);
  }
}

export default Form;
