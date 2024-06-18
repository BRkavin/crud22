const mongoose = require("mongoose")
const SalesSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const SalesModel = mongoose.model("sales", SalesSchema)
module.exports= SalesModel