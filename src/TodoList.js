import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newtodo, setNewtodo] = useState("");

  function handleTodo(event) {
    setTodos([...todos, newtodo]);
    setNewtodo("");
  }
  function deletfun(index1) {
    const update = todos.filter((todo, index) => index != index1);
    setTodos(update);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter text"
        value={newtodo}
        onChange={(e) => {
          setNewtodo(e.target.value);
        }}
      />
      <button onClick={handleTodo}>Add</button>
      {todos.map((todo, index) => (
        <>
          <p>{todo}</p>{" "}
          <button
            onClick={() => {
              deletfun(index);
            }}
          >
            delete
          </button>
        </>
      ))}
    </div>
  );
}
export default TodoList;
