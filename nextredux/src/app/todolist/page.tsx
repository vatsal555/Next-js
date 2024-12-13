"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function Page() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todosData.todos);
  console.log(todoData, "todoData");

  return (
    <div>
      <h1>Add Todos</h1>
      <input
        type="text"
        placeholder="Add Todo List"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(todo))}>Add Todo</button>
      <h2>Todo List</h2>
      {todoData.map((todo: any) => (
        <div key={todo.id}>
          <span>{todo.name}</span>
        </div>
      ))}
    </div>
  );
}
