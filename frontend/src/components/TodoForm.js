// handles input + submission
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        style={{ padding: "8px", width: "250px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
