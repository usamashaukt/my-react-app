import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import TodoTitleInput from './TodoTitleInput';
import TodoDescriptionInput from './TodoDescriptionInput';

function AddTodo() {
    const [todoText, setTodoText] = useState(localStorage.getItem('todoText') || '');
    const [todoDescription, setTodoDescription] = useState(localStorage.getItem('todoDescription') || '');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text: todoText, description: todoDescription }));
        setTodoText('');
        setTodoDescription('');
    };

    // Save data to localStorage on input change
    useEffect(() => {
        localStorage.setItem('todoText', todoText);

        localStorage.setItem('todoDescription', todoDescription);
        // console.log(todoText);
    }, [todoText, todoDescription]);

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded p-4 mt-4">
                <h1 className="text-xl font-semibold mb-4">Todo Form</h1>
                <form onSubmit={addTodoHandler}>
                    <TodoTitleInput value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                    <TodoDescriptionInput value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddTodo;