// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model');

router.get('/api/projects', (req, res, next) => {
  Projects.find()
  .then(projects => {
    projects = projects.map((project) => {
      return {
        ...project,
        completed: !!project.completed
      }
    });
    res.status(200).json(projects)
  })
  .catch((err) => {
   next(err)
    })
  });


router.post('/api/projects', (req, res,next) => {
  Projects.insert(req.body)
  .then(project => {
    project.completed = !!project.completed
    res.status(201).json(project)
  }).catch((err) => {
    next(err)
     })
   });


module.exports = router;