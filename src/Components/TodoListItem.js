import React from 'react';


// TODO LIST ITEM COMPONENT
class TodoListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      hovered: false,
    }

  }

  onListItemHovered(){

    this.setState({
      hovered: !this.state.hovered
    })
  }

  onListItemClicked(event) {
    let id = event.target.parentNode.id
    this.props.removeTodo(id)

  }

  render() {

    var hoverEffect = this.state.hovered ? 'list-item-hovered list-item' : 'list-item'


    return (
      <div id={this.props.id} className={hoverEffect} onMouseOver={this.onListItemHovered.bind(this)}
            onMouseOut={this.onListItemHovered.bind(this)}>
      { this.props.todo }
      <button className="done-btn" onClick={this.onListItemClicked.bind(this)} >Done!</button>
      </div>

    );
  }
}

export default TodoListItem