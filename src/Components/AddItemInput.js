import React, { Component } from 'react';
import '../flexboxgrid.css';
import axios from 'axios';

// INPUT AND BUTTON
class AddItemInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    }

  handleChange(event){
    this.setState({value: event.target.value})

  }

  // ADD TODO
  addTodo(todo) {
    if(todo.length > 0){
      this.props.addTodo(todo);
      this.setState({value: ''})
    }
  }

  // SEARCH FOR HOME DATA INSTEAD!!
  handleSearchById(homeId){

      axios.get(`https://jsonplaceholder.typicode.com/todos/${homeId}`)

      .then( result => {
        console.log('Response from server', result.data)
        this.props.addTodo(result.data.title);
        this.setState({value: ''})
      })

      .catch( error => console.warn(error.message, 'Axios request did not work') )

  }

  render() {
    return (
      <div>
      <input value={this.state.value} onChange={this.handleChange} autoFocus="true" type="text"/>

      <button onClick={() => this.addTodo(this.state.value)}>add</button>
      <button className="home-data-btn" onClick={() => this.handleSearchById(this.state.value)}>Search Home Data</button>
      </div>
    )
  }
};

export default AddItemInput;
