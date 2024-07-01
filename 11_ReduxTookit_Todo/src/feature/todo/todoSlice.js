// todoSlice -> naming convention to let developers know we are using Redux-toolkit

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Namaste mitron",
      isEditable: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducers -> functionality which brings change in the data stored in the 'store' which we created for state management
  reducers: {
    addTodo: (state, action) => {
      // state: gives access to current value of the state
      // action: values we get to perform some action
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditable: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;
        else {
          todo.text = action.payload.text;
          return todo;
        }
      });
    },
    toggleEditable: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        } else {
          todo.isEditable = todo.isEditable ? false : true;
          return todo;
        }
      });
    },
  },

  // unlike contextAPI,
  // here we define reducers during declaration
});

// export functionality individually
// bcz we update the state using these functionalities (add, rmv, etc)
// we need them in components
export const { addTodo, removeTodo, updateTodo, toggleEditable } =
  todoSlice.actions;

// to make store aware about the reducers
// bcz store is restricted store
export default todoSlice.reducer;
