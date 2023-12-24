const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getAllTodos);
router.delete('/todos/:id', todoController.deleteATodo);
router.patch('/todos/:id', todoController.updateATodo);

module.exports = router;
