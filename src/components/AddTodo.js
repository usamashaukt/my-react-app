import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [todoText, setTodoText] = useState('')
    const [todoDescription, setTodoDescription] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: todoText, description: todoDescription }))
        setTodoText('')
        setTodoDescription('')
    }

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded p-4 mt-4">
                <h1 className="text-xl font-semibold mb-4">Todo Form</h1>
                <form onSubmit={addTodoHandler}>
                    <div className="mb-4">
                        <label htmlFor="todoText" className="block text-sm font-medium text-gray-700">Todo Title</label>
                        <input
                            type="text"
                            id="todoText"
                            placeholder="Enter your todo item"
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)}
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="todoDescription" className="block text-sm font-medium text-gray-700">Todo Description</label>
                        <input
                            type="text"
                            id="todoDescription"
                            placeholder="Enter description"
                            value={todoDescription}
                            onChange={(e) => setTodoDescription(e.target.value)}
                            className="mt-1 p-2 border rounded-md w-full"
                        />
                    </div>
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
