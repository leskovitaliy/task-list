const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  header: String,
  description: String,
  date: String,
  isDone: Boolean,
  status: String

}, {
  versionKey: false
});

module.exports = mongoose.model('task', taskSchema, 'tasks');
