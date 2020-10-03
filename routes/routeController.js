const routes= require("express").Router()
const path = require("path");
const db = require("../models/workout");


routes.get("/api/workouts",function(req, res ){
    db.find({})
    .then(function(workouts){
        res.json(workouts)
    })
})
routes.put("/api/workouts/:id",function(req, res ){
    db.findByIdAndUpdate(req.params.id,
        {$push:{exercises:req.body}},
        {new:true})
    .then(function(workouts){

        res.json(workouts)
    })
})
routes.post("/api/workouts",function(req, res ){
    db.create(req.body)
    .then(function(workouts){
       
        res.json(workouts)
    })
})
routes.get("/api/workouts/range",function(req, res ){
    db.find({}).limit(10)
    .then(function(workouts){
        
        res.json(workouts)
    })
})
module.exports = routes