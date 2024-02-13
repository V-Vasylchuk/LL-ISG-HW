import React from 'react';
import ReactDOM from 'react-dom';
import TodoListClass from './toDo/toDoListClass';
import TodoListFunc from './toDo/toDoListFunc';
import Counter from './button/counter';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Counter />
    </div>
    <div>
      <TodoListClass />
      <TodoListFunc />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
