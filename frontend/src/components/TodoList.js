// displays and manages todo actions
import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo._id} style={{ margin: "8px 0" }}>
          <span
            onClick={() => toggleComplete(todo._id, todo.completed)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
