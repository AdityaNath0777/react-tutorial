# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Steps to implement this project

- <b> Step 1:</b> install redux and redux-toolkit

```Bash
npm install react-redux
npm install @reduxjs/toolkit
```

- <b> Step 2:</b> import configureStore and creating a store

```JavaScript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({})
```

- <b> Step 3: </b> create slices (reducers in redux)

```JavaScript
import { createSlice, nanoid } from '@reduxjs/toolkit'

// define initialState
const initialState = {
    todos: [{id: 1, text: "namaste"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
      // state: gives access to current value of the state
      // action: values we get to perform some action
        adddTodo: (state, action) => {}, removeTodo: (state, action) // ... etc
    }
})
```

- <b>Step 4:</b> make the store aware of the reducer
```JavaScript
import todoReducer from '../feature/todo/todoSlice'

export const store = configurStore({
    reducer: todoReducer
});
```
