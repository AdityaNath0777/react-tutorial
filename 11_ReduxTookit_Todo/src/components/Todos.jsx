import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleEditable,
} from "../feature/todo/todoSlice";
// Note useSelector -> gives access to the state inside the store
//      useDispatch -> to dispatch or run some functionality

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [editingText, setEditingText] = useState([""]);
  const dispatch = useDispatch();

  const updateMyTodo = (id, text) => {
    let todo = {
      id: id,
      text: text,
    };

    dispatch(toggleEditable(todo));
    dispatch(updateTodo(todo));
  };

  const submitTodo = (e, todo) => {
    e.preventDefault();
    if (editingText === "" || editingText.trim() === "") {
      dispatch(removeTodo(todo.id));
    } else {
      updateMyTodo(todo.id, editingText.trim());
    }
    setEditingText("");
  };

  return (
    <>
      {/* Main working with minimal code */}
      {/* <div>Todos</div>
      {todos.map((todo) => {
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)} className="delete-btn">
            X
          </button>
        </li>;
      })} */}

      <div className="text-white text-2xl">Todos</div>
      <ul className="list-none">
        {todos.map((todo, key) => (
          <li
            key={todo.id}
            className="mt-4 flex mx-auto w-4/5 justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white w-4/5">
              <form onSubmit={(e) => submitTodo(e, todo)}>
                <input
                  type="text"
                  id={`todo-${key}`}
                  name={`todo-${key}`}
                  value={todo.isEditable ? editingText : todo.text}
                  onChange={(e) => setEditingText(e.target.value)}
                  readOnly={!todo.isEditable}
                  className={`w-full bg-zinc-800 rounded p-1 ${
                    todo.isEditable
                      ? "outline outline-slate-300 focus:bg-slate-800"
                      : "outline-none"
                  }`}
                  onSubmit={() => updateMyTodo(todo.id, e.target.value)}
                />
              </form>
            </div>
            <div className="todo-btns flex gap-4">
              <button
                onClick={(e) => {
                  if (todo.isEditable) {
                    submitTodo(e, todo);
                  } else {
                    todos.forEach((newTodo) => {
                      if (newTodo.id !== todo.id && newTodo.isEditable) {
                        dispatch(toggleEditable(newTodo));
                      }
                    });
                    dispatch(toggleEditable(todo));
                    setEditingText(todo.text);
                  }
                }}
              >
                {todo.isEditable ? "📂" : "✏️"}
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white rounded bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-700 text-md"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
