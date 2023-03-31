import React, { useState } from 'react'
import Todo from '../../types/todos';


interface Props {
    todo: Todo;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, newText: string) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
    // Initialize state for form input and edit mode
    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(todo.text);

    // Handle toggling of todo completion status
    const handleToggle = () => {
        toggleTodo(todo.id);
    };

    // Handle toggling of edit mode
    const handleEditModeToggle = () => {
        setInputText(todo.text)
        setEditMode(!editMode);
    };

    // Handle form submission to update todo item text
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputText.length > 0) {
            updateTodo(todo.id, inputText);
        }
        setEditMode(false);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <li className="flex items-center mb-2">
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            {editMode ? (
                <form onSubmit={handleSubmit} className="ml-2 flex-grow">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="border rounded py-2 px-3 w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded mt-1">
                        Save
                    </button>
                    <button type="button" className="ml-2 text-red-500" onClick={handleDelete}>
                        Delete
                    </button>
                    <button type="button" className="ml-2 text-gray-500" onClick={() => handleEditModeToggle()}>
                        Cancel
                    </button>
                </form>
            ) : (
                <div className={`ml-2 ${todo.completed ? 'line-through text-gray-500' : ''}`} onClick={handleEditModeToggle}>
                    {todo.text}
                </div>
            )}
        </li>
    )
}

export default TodoItem