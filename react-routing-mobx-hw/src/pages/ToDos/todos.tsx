import React, { useEffect, useState, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import todoStore from '../../components/Todo/todo';
import { ITodos } from '../../interfaces';
import { getToDos } from '../../services';

const TodoList: FC = observer(() => {
  const [todos, setTodo] = useState<ITodos[]>([]);

  useEffect(() => {
    getToDos(10).then(({ data }) => setTodo(data));
  }, []);

  return (
    <div className={'content'}>
      <h2>To Do List</h2>
      <ul className={'ul_wrap'}>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <Link to={`/todos/edit/${todo.id}`}>
              <button onClick={() => todoStore.editTodo(todo.id, todo) }>Edit</button>
            </Link>
            <button onClick={() => todoStore.deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
