const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/task');

const db = "mongodb://lesko.vitaliy:qwest9384402@ds159696.mlab.com:59696/mytasklist_2017";
mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
  if (err) {
    console.error("Error! " + err);
  }
});

router.get('/tasks', function (req, res) {
  console.log('Get request for all tasks');
  Task.find(function (err, tasks) {
    if (err) {
      console.log('Error retrieving tasks');
      res.send(err);
    }
    res.json(tasks);
  })
});

router.post('/task', function (req, res) {
  console.log('Post a task');

  var newTask = new Task();
  newTask.header = req.body.header;
  newTask.description = req.body.description;
  newTask.date = req.body.date;
  newTask.isDone = req.body.isDone;

  newTask.save(function (err, insertedTask) {
    if (err) {
      console.log('Error saving task');
    } else {
      res.json(insertedTask);
    }
  });
});

/*router.put('/video/:id', function (req, res) {
  console.log('Update a video');
  Video.findByIdAndUpdate(req.params.id,
    {
      $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
      new: true
    },
    function (err, updatedVideo) {
      if (err) {
        res.send('Error updating video');
      } else {
        res.json(updatedVideo);
      }
    }
  )
});*/

router.delete('/task/:id', function (req, res) {
  console.log('Deleting a task');
  Task.findByIdAndRemove(req.params.id, function (err, deletedTask) {
    if (err) {
      res.send('Error deleting task');
    } else {
      res.json(deletedTask);
    }
  })
});

module.exports = router;
