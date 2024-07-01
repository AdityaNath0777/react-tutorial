import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState([""]);
  // dispatch -> to update state
  const dispatch = useDispatch();

  // how it works dispatch?
  // Dispatch -> uses reducers -> to make changes in store
  // dispatch reducers ko use karke store me changes karta hai
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== "" && input.trim() !== "") {
      dispatch(addTodo(input.trim()));
    }

    // now for UX
    // let's clean input field
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12"
      id="input-todo-form"
      name="input-todo-form"
    >
      <input
        type="text"
        id={`todo-input`}
        name={`todo-input`}
        className="bg-gray-800 rounded border border-gray-400 focus:border-indigo-900 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3  leading-8 transition-colors duration-200 ease-in-out  w-2/5"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border rounded py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
