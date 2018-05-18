var express = require('express');
var debug = require('debug')('app');
var app = express();

var exmployeesRouter = require('./controllers/employees/index');
app.use('/', exmployeesRouter);

app.listen('3000', function () {
  debug('runing on: http://localhost:3000');
});
