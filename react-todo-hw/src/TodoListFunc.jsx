import React, { useState, useEffect } from 'react';
import './styles.css';

const TodoListFunc = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleCheckboxToggle = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleInputChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const newTodoItem = {
      itemId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div className="todo-list">
      <h1>ToDo List (Functional Component)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => handleCheckboxToggle(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListFunc;
