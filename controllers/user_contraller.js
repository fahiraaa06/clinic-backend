const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../db/models');
const helper = require('../helper');
const service = require('../service/user_service');

const saltRounds = 10;

const createResponse = (data, token) => ({
  name: data.name,
  email: data.email,
  role: data.role,
  token,
  expired: 60 * 60,
  createdAt: data.createdAt,
});

exports.registrasiUser = async (req, res) => {
  const { email, password } = req.body;
  if (!helper.strongPass(password)) {
    return res.status(400).json({
      status: 400,
      message: 'please use strong password',
    });
  }
  try {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (errHash, hash) => {
        const userCount = await models.user.count({
          where: {
            email,
          },
        });
        if (userCount > 0) {
          return res.status(500).json({
            status: 500,
            message: 'Duplicate Email',
          });
        }
        const userRespon = await models.user.create({
          email,
          password: hash,
          role: 'user',
          active: false,
        });
        jwt.sign({
          id: userRespon.id,
        }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, (errs, token) => {
          if (errs) {
            return res.status(500).json({
              status: 500,
              message: 'Internal Server Error',
            });
          }
          return res.status(200).json({
            status: 200,
            message: 'success',
            data: createResponse(userRespon, token),
          });
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRespon = await models.user.findOne({
      where: {
        email,
      },
    });
    if (userRespon === null) {
      return res.status(400).json({
        status: 400,
        message: 'Email Not Found',
      });
    }
    bcrypt.compare(password, userRespon.password, (error, ok) => {
      if (!ok || error) {
        return res.status(400).json({
          status: 400,
          message: 'wrong Password',
        });
      }
      jwt.sign({
        id: userRespon.id,
      }, process.env.SECRET_KEY, { expiresIn: 60 * 60 }, (err, token) => {
        if (err) {
          return res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
          });
        }
        return res.status(200).json({
          status: 200,
          message: 'success',
          data: createResponse(userRespon, token),
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

exports.findUsers = async (req, res) => {
  const page = parseInt(req.query.current_page, 10) || 1;
  const limit = parseInt(req.query.per_page, 10) || 10;
  const search = req.query.search || '';
  try {
    const respon = await service.findUsers(page, limit, search);
    const total = await service.countUsers(page, limit, search);
    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        docs: respon,
        paging: {
          current_page: page,
          per_page: limit,
          total: total[0].total,
          search,
        },
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'internal server error',
    });
  }
};
