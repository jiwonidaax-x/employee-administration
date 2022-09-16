
var file = require("fs");
var employees = [];
var departments = [];

exports.initialize = () => {
  return new Promise = (function(resolve, reject) {
    file.readFile('./data/employees.json', (err, data) => {
      if (err) {
        reject("unable to read file");
      }
      else {
        employees = JSON.parse(data);
      }
    });

    file.readFile('./data/departments.json', (err, data) => {
      if (err) {
        reject("unable to read file");
      } else {
        departments = JSON.parse(data);
      }
    })
    resolve();
  })
};

exports.getAllEmployees = () => {
  return new Promise(function(resolve, reject) {
    if (employees.length == 0) {
      reject("no results returned");
    }
    else {
      resolve(employees);
    }
  })
};

exports.getManagers = () => {
  var newArr = [];
  return new Promise(function(resolve, reject) {
    if (employees.length == 0) {
      reject("no results returned");
    }
    else {
      employees.forEach(e => newArr.push(e.isManager == true));
      resolve(newArr);
    }
  })
};

exports.getDepartments = () => {
  return new Promise(function(resolve, reject) {
    if (departments.length == 0) {
      reject("no results returned");
    }
    else {
      resolve(departments);
    }
  })
};



