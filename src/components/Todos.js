import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import deleteBtn from './delete.svg';
import { editTodo, removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editableTodoId, setEditableTodoId] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleEdit = (id, text) => {
        setEditableTodoId(id);
        setEditedText(text);
    };

    const handleSaveEdit = (id) => {
        dispatch(editTodo({ id, newText: editedText }));
        setEditableTodoId(null);
        setEditedText('');
    };

    return (
        <>
            {todos.map((todo) => (
                <div className=' mb-1 flex content-center items-center justify-between px-2  text-white bg-gray-500' key={todo.id}>
                    {editableTodoId === todo.id ? (
                        <input
                            type="text"
                            className="outline-none text-black border-b border-gray-400 px-1"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                    ) : (
                        <div>{todo.text}</div>
                    )}

                    <div className='flex'>
                        {editableTodoId === todo.id ? (
                            <button className='text-white bg-blue-500 border-0 py-1 px-4 mr-2 focus:outline-none' onClick={() => handleSaveEdit(todo.id)}>Save</button>
                        ) : (
                            <>
                                <button className='text-white bg-blue-500 border-0 py-1 px-4 mr-2 focus:outline-none' onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                                <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none' onClick={() => dispatch(removeTodo(todo.id))}>
                                    <img className='w-10' src={deleteBtn} alt="Delete" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Todos;
