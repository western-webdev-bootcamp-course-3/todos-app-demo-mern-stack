const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);
