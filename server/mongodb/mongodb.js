var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var user = `max`;
var password = `987495Max`;
var url = `mongodb://${user}:${password}@ds016148.mlab.com:16148/organization`;

var organizationDBConnection = function connection() {
  return new Promise(function (resolve, reject) {

    var response = MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, db) {
      if (err) throw err;
      var database = db.db('organization');
      var employeesResult = {};
      var occupationResult;
      database.collection('employees').find().toArray(function (err, result) {
        if (err) throw err;
        employeesResult = result;
        console.log(employeesResult);

        database.collection('occupation').find(ObjectId(employeesResult[0].roleID), {
          "_id": ObjectId(employeesResult[0].roleID)
        }, {
          title: 1
        }).toArray().then(function (response) {
          employeesResult[0] = Object.assign({}, employeesResult[0], {
            roleTitle: response[0].title
          });
          resolve(employeesResult);

          db.close();
          return employeesResult;
        });
        
      });
    });

  });
};



module.exports = {
  organizationDBConnection
};
