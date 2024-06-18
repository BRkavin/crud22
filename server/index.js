const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const SalesModel = require('./models/sales')
const app =express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/book")


app.get('/',(req, res)=>{
    SalesModel.find({})
    .then(sales => res.json(sales))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id', (req,res)=>{
    const id = req.params.id
    SalesModel. findById({_id:id})
    .then(sales => res.json(sales))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id
    SalesModel. findByIdAndDelete({_id:id})
    .then(sales => res.json(sales))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
    const id = req.params.id
    SalesModel. findByIdAndUpdate({_id:id},{name:req.body.name ,email: req.body.email,  age: req.body.age})
    .then(sales => res.json(sales))
    .catch(err=>res.json(err))
})

app.post('/createUser', (req, res)=>{
    SalesModel.create(req.body)
    .then(sales => res.json(sales))
    .catch(err=>res.json(err))
})


app.listen(3001,()=>{
    console.log("server running")
})