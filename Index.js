//1 import express
const express = require('express')

//2 import cors
const cors = require('cors')

//import logic 
const logic = require('./Services/logics')

//3 Create a backend application using the express
const emsServer = express()

emsServer.use(cors({
    origin: 'http://localhost:3000'
}))

//5 Convert the json data to js to json using json() function
emsServer.use(express.json())

//6 Define the port number
emsServer.listen(8000, () => {
    console.log('Ems Server listening on port 8000');
})

//API call for get all employees details
emsServer.get('/get-all-employees', (req, res) => {
    logic.getAllEmployees().then((response) => {//response -all}
        res.status(response.statusCode).json(response)
    })
})
//API call for add an employee
emsServer.post('/add-an-employee', (req, res) => {
    logic.addEmployee(req.body.id, req.body.name, req.body.age, req.body.designation, req.body.salary).then((response) => {
        res.status(response.statusCode).json(response);
    })
})
//Api call for remove an employee
emsServer.delete('/delete-an-employee/:id', (req, res)=> {
    logic.deleteEmployee(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);

    })
})
//Api call for view an employee
emsServer.get('/get-an-employee/:id', (req, res) => {
    logic.getAnEmployee(req.params.id).then((response) => {//response -an employee details}
        res.status(response.statusCode).json(response)
    })
})
//Api call for edit an employee
//Api call for view an employee
emsServer.post('/update-an-employee/:id', (req, res) => {
    logic.updateAnEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response) => {//response -an employee details}
        res.status(response.statusCode).json(response)
    })
})

