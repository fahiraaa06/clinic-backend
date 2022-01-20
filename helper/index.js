/* eslint-disable no-plusplus */
// const conn = require('../config/db');

function makeid(length) {
  const result = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(
        Math.floor(
          Math.random() * charactersLength,
        ),
      ),
    );
  }
  return result.join('');
}

const stringUnix = () => `${makeid(8)}_${makeid(16)}`;

function validEmail(email) {
  const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rgx.test(email);
}

function strongPass(pass) {
  return /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pass);
}

// function findByEmail(email) {
//   // console.log('di sini', conn.);
//   conn.query(`SELECT email FROM users WHERE email = ${email} LIMIT 1`, (err, rows) => {
//     if (err) {
//       return err;
//     }
//     console.log('hasil', rows);
//     return rows;
//   });
// }

module.exports = {
  stringUnix, validEmail, strongPass,
};
