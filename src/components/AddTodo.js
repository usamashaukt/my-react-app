import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()



    const addTodoHandler = (e) => {

        e.preventDefault()

        dispatch(addTodo(input))

        setInput('')

    }




    return (
        <div onSubmit={addTodoHandler}>
            <div>addTodo</div>
            <div className="max-w-md mx-auto bg-white rounded p-4 mt-4">
                <h1 className="text-xl font-semibold mb-4">Todo Form</h1>
                <form action="#" method="POST">
                    <div className="flex items-center border rounded-md p-2">
                        <input type="text" id="todo" placeholder="Enter your todo item" value={input}
                            className="flex-1 appearance-none outline-none" onChange={(e) => setInput(e.target.value)} />
                        <button type="submit"
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add
                            Todo</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AddTodo