const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: String,
  isDone: Boolean

});

module.exports = mongoose.model('task', taskSchema, 'tasks');
