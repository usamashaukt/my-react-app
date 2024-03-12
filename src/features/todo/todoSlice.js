import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodoState = () => {
    try {
        const localState = localStorage.getItem('todos');
        if (localState === null) {
            return [];
        }
        return JSON.parse(localState);
    } catch (err) {
        return [];
    }
};


const saveTodoState = (state) => {
    try {
        const localState = JSON.stringify(state);
        localStorage.setItem('todos', localState);
    } catch {
        
    }
};


const initialState = {
    todos: loadTodoState(),
};

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
            };
            state.todos.push(todo);
            saveTodoState(state.todos); // Save to local storage
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveTodoState(state.todos); // Save to local storage
        },
        editTodo: (state, action) => {
            const { id, newText } = action.payload;
            const index = state.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todos[index].text = newText;
                saveTodoState(state.todos); // Save to local storage
            }
        }
    }
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
