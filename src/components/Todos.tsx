import React, { useState } from 'react'
import Todo from '../../types/todos';
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
}

const Todos: React.FC<Props> = ({ todos, addTodo, toggleTodo, updateTodo, deleteTodo }) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputText.length > 0) {
            addTodo(inputText);
        }
        setInputText('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Add new todo item"
                    className="border rounded py-2 px-3 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded mt-3">
                    Add Todo
                </button>
            </form>
            <ul className="mt-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    )
}

export default Todos