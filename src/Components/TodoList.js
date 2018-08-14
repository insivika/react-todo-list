import React from 'react';
import TodoListItem from './TodoListItem'

var TodoList = (props) => (
  <div>
    {props.todos.map(todo =>
      < TodoListItem key={todo.id} todo={todo.text} id={todo.id} removeTodo={props.removeTodo} />
    )}

  </div>
);


export default TodoList;