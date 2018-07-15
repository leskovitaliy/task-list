const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/task');

const db = "mongodb://lesko.vitaliy:qwest9384402@ds159696.mlab.com:59696/mytasklist_2017";
mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error! " + err);
  }
});


router.get('/tasks', (req, res) => {
  let limit = parseInt(req.query.limit);
  let currentPage = parseInt(req.query.currentPage) || 1;

  Task
    .find({})
    .skip((limit * currentPage) - limit)
    .limit(limit)
    .exec((err, tasks) => {
      Task.count().exec((err, count) => {
        if (err) {
          console.log('Error retrieving tasks');
          res.send(err);
        }
        console.log('Get request for all tasks');
        res.json({
          tasks: tasks,
          currentPage: currentPage,
          pages: Math.ceil(count / limit)
        })
      })
    })
});

router.post('/task', (req, res) => {
  let newTask = new Task();
  const { header, description, date, isDone, status } = req.body;

  newTask.header = header;
  newTask.description = description;
  newTask.date = date;
  newTask.isDone = isDone;
  newTask.status = status;

  newTask.save((err, insertedTask) => {
    if (err) {
      console.log('Error saving task');
    } else {
      console.log('Post a task');
      res.json(insertedTask);
    }
  });
});

router.put('/task/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id,
    {
      $set: {status: req.body.status}
    },
    {
      new: true
    },
    (err, updatedTask) => {
      if (err) {
        res.send('Error updating task');
      } else {
        console.log('Update a task');
        res.json(updatedTask);
      }
    }
  )
});

router.delete('/task/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id, (err, deletedTask) => {
    if (err) {
      res.send('Error deleting task');
    } else {
      console.log('Deleting a task');
      res.json(deletedTask);
    }
  })
});

module.exports = router;
