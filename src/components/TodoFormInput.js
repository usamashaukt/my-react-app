import React from 'react';

function TodoFormInput({ label, value, onChange, placeholder }) {
    return (
        <div className="mb-4">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="text"
                id={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 border rounded-md w-full"
            />
        </div>
    );
}

export default TodoFormInput;
