// build your `/api/resources` router here
const express = require('express');
const { resource } = require('../server');
const router = express.Router();

const Resources = require('./model');

router.get('/api/resources',(req,res,next)=>{
 Resources.findResource()
    .then(resources => {
      resources = resources.map((resource) => {
        return {
          ...resource,
        }
      });
      res.status(200).json(resources)
    })
    .catch((err) => {
     next(err)
      })
    });

    router.post('/api/resources', (req, res,next ) => {
        Resources.insert(req.body)
        .then(resource => {
          res.status(201).json(resource)
        })
        .catch((err) => {
            next(err)
             })
           });

    module.exports = router;