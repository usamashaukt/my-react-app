import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'hello',
        description: 'World'
    }],
}

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { text, description } = action.payload;
            const todo = {
                id: nanoid(),
                text: text,
                description: description
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todos[index].text = newText;
            }
        }
    }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer