import React, { Component } from 'react';
import './styles.css';

class TodoListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  handleCheckboxToggle = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.newTodo.trim()) return;
    const newTodo = {
      itemId: 1,
      id: this.state.todos.length + 1,
      title: this.state.newTodo,
      completed: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      newTodo: ''
    }));
  };

  render() {
    return (
      <div className="todo-list">
        <h1>ToDo List (Class Component)</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id}
              className={todo.completed ? 'completed' : ''}
              onClick={() => this.handleCheckboxToggle(todo.id)}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoListClass;
