const express=require('express');
const Routes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;
    
Routes.route("/Record").get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    db_connect
      .collection("records")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   // This section will help you create a new record.
Routes.route("/book").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      timeslot: req.body.timeslot,
      date: req.body.date,
      problem: req.body.problem,
      concern: req.body.concern,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

    
   module.exports = Routes;