var jwt = require('jsonwebtoken');
var User = require('../models/user.model');

class UserCtrl {

  login(req, res) {
    var user = req.body;
    //deferred execution
    User.findOne({ username: user.username, password: user.password })
      .exec()
      .then(function (result) {
        if (result) {
          var payload = { username: user.username };
          var token = jwt.sign(payload, "secret");

          var response = {
            username: user.username,
            token: token
          };

          res.status(200);
          res.send(response);
        }
        else res.status(401).send("Unauthorized");
      })
      .catch(function (err) {
        res.status(401).send("Unauthorized");
      });
  }

  register(req, res) {
    var user = new User(req.body);
    user.save()
      .then(function (data) {
        res.status(201);
        res.send("Success");
      })
      .catch(function (err) {
        if (doesUserExist(err)) {
          res.status(500);
          res.send("Email already exists");
        }
        else {
          res.status(500);
          res.send("Internal Server Error");
        }
      });
  }

}

function doesUserExist(err) {
  return err && err.errmsg && err.errmsg.indexOf("duplicate key error") > -1;
}


module.exports = new UserCtrl();