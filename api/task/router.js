// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();

const Tasks = require('./model');

router.get('/api/tasks', (req, res, next) => {
    Tasks.find()
    .then(tasks => {
      tasks = tasks.map((task) => {
        return {
          ...task,
          completed: !!task.completed
        }
      });
      res.status(200).json(tasks)
    })
    .catch((err) => {
        next(err)
         })
       });

router.post('/api/task', (req, res, next) => {
    Tasks.insert(req.body)
    .then(task => {
      task.completed = !!task.completed
      res.status(201).json(task)
    })
    .catch((err) => {
        next(err)
         })
       });

module.exports = router;