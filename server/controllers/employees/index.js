var express = require('express');
var router = express.Router();
var organizationDB = require('../../mongodb/mongodb');

router.use(function (req, res, next) {

  organizationDB.organizationDBConnection().then(function (response) {
    console.log('response: ', response);
    req.anxietyQuestioneer = response;
    next();
  });
});


router.get('/', function (req, res, next) {
  res.json({
    anxietyQuestioneer: req.anxietyQuestioneer
  });
});

module.exports = router;
