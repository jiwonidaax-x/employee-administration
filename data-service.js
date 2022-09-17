var employees = [];
var departments = [];
var file = require("fs");


exports.initialize = () => {

  return new Promise((resolve, reject) => {
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
      }
      else {
        departments = JSON.parse(data);
      }
    });
    resolve();
  })
};


exports.getAllEmployee = () => {
  return new Promise((resolve, reject) => {
    if (employees.length == 0) {
      reject("no result returned");
    } else {
      resolve(employees);
    }
  });
};
exports.getDepartments = () => {
  return new Promise((resolve, reject) => {
    if (departments.length == 0) {
      reject("no result returned");
    } else {
      resolve(departments);
    }
  });
};

exports.getManagers = () => {
  var manager = employees.filter(e => e.isManager == true);
  return new Promise((resolve, reject) => {
    if (manager.length == 0) {
      reject("no result returned");
    } else {
      resolve(manager);
    }
  });
};


















