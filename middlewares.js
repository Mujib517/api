var jwt = require('jsonwebtoken');

class Middlewares {
  isAuthenticated(req, res, next) {

    var authHeader = req.headers.authorization;
    var token = authHeader.split(" ");
    var credentials = token[1];

    var str = new Buffer(credentials, "base64").toString();

    credentials = str.split(":");

    if (credentials[0] === 'admin' && credentials[1] === 'pwd') next();
    else {
      res.status(401)
      res.send("Unauthorized");
    }
  }

  authenticateToken(req, res, next) {
    var authorization = req.headers.authorization;
    if (authorization) {
      jwt.verify(authorization, "secret", function (err, data) {
        if (err) res.status(401).send("Unauthorized");
        else {
          console.log(data);
          next();
        }
      });
    }
    else res.status(401).send("Unauthoried");
  }
}

module.exports = new Middlewares();