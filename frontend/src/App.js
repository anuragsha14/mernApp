// coordinates state and API calls.
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then(res => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    if (!text) return;
    const res = await axios.post("http://localhost:5000/api/todos", { text });
    setTodos([...todos, res.data]);
    setText("");
  };

  const toggleComplete = async (id, completed) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => todo._id === id ? res.data : todo));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 MERN Todo App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span 
              onClick={() => toggleComplete(todo._id, todo.completed)} 
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
