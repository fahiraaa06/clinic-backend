/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const service = require('../service/user_service');

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
    jwt.verify(bearerToken, process.env.SECRET_KEY, (err, decoded) => {
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

const mustDdokter = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const result = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const response = await service.findUserById(result.id);
    if (response[0].role !== 'dokter') {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }
    if (response[0].role === 'super_user') {
      return next();
    }
    req.user = {
      id: response[0].id,
      role: response[0].role,
    };
    return next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }
};

const mustKasir = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const result = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const response = await service.findUserById(result.id);
    if (response[0].role !== 'kasir') {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }
    if (response[0].role === 'super_user') {
      return next();
    }
    return next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }
};

const mustResepsionis = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const result = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const response = await service.findUserById(result.id);
    if (response[0].role !== 'resepsionis') {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    }
    if (response[0].role === 'super_user') {
      return next();
    }
    return next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }
};

module.exports = {
  auth, mustDdokter, mustKasir, mustResepsionis,
};
