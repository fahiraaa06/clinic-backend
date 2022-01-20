const validation = require('@danangkonang/js-validation');

const simple = (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  let form = [
    {
      data: email,
      rules: "required|email",
      messages: 'email required|invalid email address',
      key: 'email',
    },
    {
      data: password,
      rules: "required",
      messages: 'password required',
      key: 'password',
    },
  ]
  let validate = validation.validation(form);
  if (!validate.isValid) {
    return res.status(400).json({
      status: 400,
      message: 'ERR_FORM',
      data: validate.errors
    });
  }
  next();
};

module.exports = {
  simple,
}
