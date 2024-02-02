import {createContext, useContext} from "react";

// creating context
export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: 'Todo Message',
			completed: false
		}
	],

	// adding some functionality

	// step 1: declare vague functionality
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id) => {},
	toggleComplete: (id) => {}
})


// create custom Hook
export const useTodo = () => {
	// returns another Hook to make aware about context
	return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider