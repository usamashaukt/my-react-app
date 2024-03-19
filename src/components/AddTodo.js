import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import TodoFormInput from './TodoFormInput';

function AddTodo() {
    const [todoText, setTodoText] = useState(localStorage.getItem('todoText') || '');
    const [todoDescription, setTodoDescription] = useState(localStorage.getItem('todoDescription') || '');
    const dispatch = useDispatch();

    const addTodoHandler = async (e) => {
        e.preventDefault();
        try {
            // Dispatch action to add todo to Redux store
            dispatch(addTodo({ text: todoText, description: todoDescription }));

            // Send data to server
            const res = await fetch("http://localhost:5000/add-tickets", {
                method: "POST",
                body: JSON.stringify({
                    title: todoText,
                    description: todoDescription
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            if (res.status === 500 || !data) {
                window.alert("Invalid Entry");
                console.log("Invalid Entry");
            } else {
                window.alert("Valid Entry");
                console.log("Valid Entry");
            }

            // Clear input fields
            setTodoText('');
            setTodoDescription('');
        } catch (error) {
            console.error("Error:", error);
            window.alert("An error occurred while adding the todo.");
        }
    }

    // Save data to localStorage on input change
    useEffect(() => {
        localStorage.setItem('todoText', todoText);
        localStorage.setItem('todoDescription', todoDescription);
    }, [todoText, todoDescription]);

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded p-4 mt-4">
                <h1 className="text-xl font-semibold mb-4">Todo Form</h1>
                <form onSubmit={addTodoHandler}>
                    <TodoFormInput
                        label="Todo Title"
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        placeholder="Enter your todo item"
                    />
                    <TodoFormInput
                        label="Todo Description"
                        value={todoDescription}
                        onChange={(e) => setTodoDescription(e.target.value)}
                        placeholder="Enter description"
                    />
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
