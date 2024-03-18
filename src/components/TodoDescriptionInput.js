import React from 'react';

function TodoDescriptionInput({ value, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor="todoDescription" className="block text-sm font-medium text-gray-700">Todo Description</label>
            <input
                type="text"
                id="todoDescription"
                placeholder="Enter description"
                value={value}
                onChange={onChange}
                className="mt-1 p-2 border rounded-md w-full"
            />
        </div>
    );
}

export default TodoDescriptionInput;
