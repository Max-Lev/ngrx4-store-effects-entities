var express = require('express');
var router = express.Router();

var Employee = function (name, last_name) {
  this.name = name;
  this.last_name = last_name;
};

router.use(function (req, res, next) {
  console.log('employees middleware: ');
  var employee = new Employee('max', 'lev');
  req.employeeData = employee;
  next();
});

router.get('/', function (req, res, next) {
  console.log(req.employeeData);
  setTimeout(function () {
    res.json({
      name: req.employeeData.name,
      last_name: req.employeeData.last_name
    });
  }, 0);
});

module.exports = router;
