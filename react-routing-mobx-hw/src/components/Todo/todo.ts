import { makeAutoObservable } from 'mobx';
import { ITodos } from '../../interfaces';

class TodoStore {
  todos: ITodos[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodos) {
    this.todos.push(todo);
  }

  editTodoTitle(id: number, newTitle: string) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index].title = newTitle;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

const todoStore = new TodoStore();

export default todoStore; 
