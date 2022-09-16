var file = require("fs");
var employees = [];
var departments = [];

initialize = () => {
  return new Promise = ((resolve, reject) => {
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

getAllEmployees = () => {
  return new Promise = ((resolve, reject) => {
    if (employees.length == 0) {
      reject("no results returned");
    }
    else {
      resolve(employees);
    }
  })
};

getManagers = () => {
  var newArr = [];
  return new Promise = ((resolve, reject) => {
    if (employees.length == 0) {
      reject("no results returned");
    }
    else {
      employees.forEach(e => newArr.push(e.isManager == true));
      resolve(newArr);
    }
  })
};

getDepartments = () => {
  return new Promise = ((resolve, reject) => {
    if (departments.length == 0) {
      reject("no results returned");
    }
    else {
      resolve(departments);
    }
  })
};


















