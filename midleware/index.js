/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    if (bearerToken === undefined) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
      return;
    }
    jwt.verify(bearerToken, 'secret_key', (err, decoded) => {
      if (err) {
        res.status(401).json({
          status: 401,
          message: 'token expired or jwt malformed',
        });
        return;
      }
      next();
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }
};

module.exports = {
  auth,
}