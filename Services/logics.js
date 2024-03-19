//Backend logics

//import db.js file
const db = require('../Services/db')

//get all the employees details from the database

const getAllEmployees = () => {
    return db.employee.find().then((result) => {//results - details of employees
        if (result) {
            return {//send to frontend
                statusCode: 200,
                employees: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'cant find employee'
            }
        }


    })
}
//Add a new employee details into the database
const addEmployee = (id, name, age, designation, salary) => {
    return db.employee.findOne({ id }).then((result) => {
        if (result) {//if the id is already in the database
            return {
                statusCode: 404,
                message: "Employee already exists"
            }

        }
        else {// The id is not in the database then it save to the database
            const newEmployee = new db.employee({ id, name, age, designation, salary })
            //to save to the database
            newEmployee.save()
            return {
                statusCode: 200,
                message: "Employee added successfully"
            }

        }
    })
}
//delete a employee from the database
const deleteEmployee = (id) => {
    return db.employee.deleteOne({ id }).then((result) => {

        return {
            statusCode: 200,
            message: "Employee deleted successfully"
        }
    })
        .catch((error) => {
            return {
                statusCode: 404,
                message: "couldn't find employee"
            }

        })

}
//view employee details
const getAnEmployee = (id) => {
    return db.employee.findOne({ id }).then((result) => {
        if (result) {
            return {//send to frontend
                statusCode: 200,
                employees: result
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'cant find employee'
            }
        }


    })


}
//edit employee details
const updateAnEmployee = (id,name,age,designation,salary) => { //update data
    return db.employee.findOne({ id }).then((result) => {      //result-details of employees
        if (result) {
            //assigning updated information to the database values
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
result.save()
            return {//send to frontend
                statusCode: 200,
                message:"Employee data updated successfully"
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'cant find employee'
            }
        }


    })


}


module.exports = {
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getAnEmployee,
    updateAnEmployee
}
