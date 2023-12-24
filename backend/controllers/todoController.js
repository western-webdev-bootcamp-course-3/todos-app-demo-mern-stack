const Todo = require('../models/Todo');

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};

// delete a todo
exports.deleteATodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ result: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};

// update a todo
exports.updateATodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something is wrong' });
  }
};
