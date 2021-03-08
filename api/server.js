// build your server here and require it from index.js
const express = require("express")
const helmet = require("helmet")
const ProjectRouter = require('./project/router');
const TaskRouter = require('./task/router');
const ResourceRouter = require('./resource/router');

const server = express()
server.use(helmet())
server.use(express.json())

server.use( ProjectRouter);
server.use(TaskRouter);
server.use(ResourceRouter);


server.use((req,res,next)=>{
    res.json({message:"Yosh."})
})


server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({message:"dis be wrong doh"})
})

module.exports= server