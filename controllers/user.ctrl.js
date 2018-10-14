var jwt = require('jsonwebtoken');

class UserCtrl {

  login(req, res) {
    var user = req.body;
    if (user.username === 'admin' && user.password === 'pwd') {
      var payload = { username: user.username };
      var token = jwt.sign(payload, "secret");

      var response = {
        username: user.username,
        token: token
      };

      res.status(200);
      res.send(response);
    }
    else {
      res.status(401);
      res.send("Unauthorized");
    }
  }

}

module.exports = new UserCtrl();