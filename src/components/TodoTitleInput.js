import React from 'react';

function TodoTitleInput({ value, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor="todoText" className="block text-sm font-medium text-gray-700">Todo Title</label>
            <input
                type="text"
                id="todoText"
                placeholder="Enter your todo item"
                value={value}
                onChange={onChange}
                className="mt-1 p-2 border rounded-md w-full"
            />
        </div>
    );
}

export default TodoTitleInput;
