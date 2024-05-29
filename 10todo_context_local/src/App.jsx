import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])

    // if todo was only string itself, then no need of ...todo
    // but as our todo is an object
    // so it might have some other functionalities too
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))

    // looping through each value

    // calling each value prevTodo
    // if id matches, then return updated todo to append
    // if not then return prevTodo (i.e. og values) to append
  }

  const deleteTodo = (id) => {
    // filter works with true logic, 
    // thats why we are using reverse logic (!=)
    setTodos( (prev) => prev.filter((todo) => todo.id !== id ))

    // pass callback func in filter
    // returns new array 
    // new array will have all the id's except the one needs to be deleted

    // i.e. we're actually storing all the elements in another array except one
    // not actually deleting one
  }

  const toggleComplete = (id) => {
    setTodos( (prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    ))
  }

  useEffect( ()=> {
    // convert JSON String into JSON objects
    const todos = JSON.parse(localStorage.getItem("todos"))
      // now we need to [push this data into States]
      if(todos && todos.length > 0){
        setTodos(todos)
      }
  }, [])

  useEffect( ()=> {
    // local storage needs string
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoProvider
      value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}
    >
    {/* 
        * Importing data and functionalities from the TodoContext using values
        * Now everything inside this will be aware of the context 
        * Make sure to use this in the outermost layer
    */}
      {/* 
      
      <TodoForm>
        {todos.map((todo) => (
          <div key={todo.id} >
            <TodoItem todo={todo} />
          </div>
        ))}
      </TodoForm> 
      
      */}

      {/* Styled Version */}
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
