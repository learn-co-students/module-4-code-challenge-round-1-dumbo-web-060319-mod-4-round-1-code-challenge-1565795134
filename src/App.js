import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    allBooks:[],
    favBook:[],
    title:'',
    author:'',
    img:''
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(response=>response.json())
    .then((data)=>{
      this.setState({
        allBooks:data
      })
    })
  }

  handleFav=(book)=>{
    this.setState({
      favBook:[...this.state.favBook,book]
    })
  }

  handleUnfav=(book)=>{
    let id=book.id
    let finalArr=this.state.favBook.filter((book)=> book.id!==id)
    this.setState({
      favBook:finalArr
    })
  }

  handleForm=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    let count=this.state.allBooks.filter((book)=>book.title===this.state.title).length
    if (this.state.title!=='' && count===0){
      let newBook={
        title: this.state.title,
        author: this.state.author,
        img: this.state.img
        }

        this.setState({
          allBooks:[...this.state.allBooks,newBook]
        })

        fetch("http://localhost:3005/books",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body:JSON.stringify(newBook)
        })
    }
  }

  render() {
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} author={this.state.author} img={this.state.img} title={this.state.title} handleForm={this.handleForm}  handleFav={this.handleFav} allBooks={this.state.allBooks}/>
        <Bookshelf handleFav={this.handleUnfav} favBook={this.state.favBook} />
      </div>
    );
  }
}

export default App;
