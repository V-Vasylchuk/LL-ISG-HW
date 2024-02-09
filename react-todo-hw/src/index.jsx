import React from 'react';
import ReactDOM from 'react-dom';
import TodoListClass from './TodoListClass';
import TodoListFunc from './TodoListFunc';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <TodoListClass />
      <TodoListFunc />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
