import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import AddItemInput from './Components/AddItemInput';

import './flexboxgrid.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoItemList: [
        {id: 0, text: "Make dinner"},
        {id: 1, text: "Work out"},
        {id: 2, text: 'Get groceries'}
    ],
    nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  addTodo(todoText){
    let todos = [...this.state.todoItemList];
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todoItemList: todos,
      nextId: ++this.state.nextId
    })
  }

  removeTodo(id){

    console.log('Removing ', id)

    this.setState({
      todoItemList: this.state.todoItemList.filter((todo, index) => todo.id != id)
    })
  }

  render() {

  return (
  <div>
    <div className="header">
    <h2>Get it done!</h2>

    <AddItemInput todoText="" addTodo={this.addTodo} />
    </div>
    <TodoList todos={this.state.todoItemList} removeTodo={this.removeTodo}/>


  </div>
  )
 }
};

export default App;
