import { useEffect, useState, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import todoStore from '../../components/Todo/todo';
import { ITodos } from '../../interfaces';
import { getToDos } from '../../services';

const TodoList: FC = observer(() => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [editedTodo, setEditedTodo] = useState<ITodos | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getToDos(10);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleEdit = (todo: ITodos) => {
    setEditedTodo(todo);
    setNewTitle(todo.title);
  };

  const handleUpdate = async () => {
    if (editedTodo) {
      try {
        todoStore.editTodoTitle(editedTodo.id, newTitle);
        setEditedTodo(null);
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === editedTodo.id ? { ...todo, title: newTitle } : todo)));
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      todoStore.deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className={'content'}>
      <h2>To Do List</h2>
      <ul className={'ul_wrap'}>
        {todos.map(todo => (
          <li key={todo.id}>
            {editedTodo?.id === todo.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <Link to={`/todos/edit/${todo.id}`}>
                  <button onClick={() => handleEdit(todo)}>Edit</button>
                </Link>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
