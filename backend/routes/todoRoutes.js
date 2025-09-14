const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  const saved = await newTodo.save();
  res.json(saved);
});

// Update todo
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
  res.json(updated);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
