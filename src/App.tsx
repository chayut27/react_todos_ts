import { useState } from 'react'
import Todos from './components/Todos';
import Todo from '../types/todos';

function App() {

  // Initialize state for todo items
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add a new todo item to the list
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle completion of a todo item
  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Update a todo item
  const updateTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <Todos todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
