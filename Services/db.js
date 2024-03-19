//Connection code of Node and mongodb

//1 import mongoose
const mongoose = require('mongoose')

//Connection string
mongoose.connect('mongodb://localhost:27017/EMS')

//model creation
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})
module.exports={
    employee
}