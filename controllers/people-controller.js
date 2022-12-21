const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()

//import model (People)
const {People} = require('../models')

console.log(People)

//people index route
//http://localhost:4000/people/
router.get('/', async (req, res)=>{
    // res.status(200).json({message: "people index/get route"})
    try {
        const allPeople = await People.find({})
        res.status(200).json(allPeople)
    }catch(err){
        res.status(400).json({error: err})
    }
})

//people create route
//http://localhost:4000/people/
router.post('/', async (req, res)=>{
    console.log('post route', req.body)
    // res.status(201).json({message: "people create/post route"})
    try {
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch(err){
        res.status(400).json({error: err})
    }
})

//people show route
//http://localhost:4000/people/:id
router.get('/:id', async (req, res)=>{
    // res.status(200).json({message: "people show route: " + req.params.id})
    try {
        const findPerson = await People.findById(req.params.id)
        res.status(200).json(findPerson)
    }catch(err){
        res.status(400).json({error: err})
    }
})

//people delete route
//http://localhost:4000/people/:id
router.delete('/:id', async (req, res)=>{
    // res.status(200).json({message: "people delete route: " + req.params.id})
    try {
        const deletedPerson = await People.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedPerson)
    }catch(err){
        res.status(400).json({error: err})
    }
})

//people update route
//http://localhost:4000/people/:id
router.put("/:id", async (req, res) => {
    try{
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPerson)
    }catch(error){
        res.status(400).json({error: err})

    }
})

module.exports = router