const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../db/config');
const User = require('../models/user');

const usersController = {};

usersController.authenticate = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if (!user) return res.json({success: false, msg: 'User not found'});
  });

  User.comparePassword(password, user.password, (err, isMatch) => {
    if(err) throw err;
    if(isMatch) {
      let token = jwt.sign(user, config.secret, {
        expiresIn: 604800 // one week
      });
      res.json({
        success: true,
        token: `JWT ${token}`,
        user: {
          id: user._id,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        }
      });
    } else {
      return res.json({success: false, msg: 'Wrong Password'});
    }
  });
}

usersController.create = (req, res) => {
  let newUser = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  User.auth.addUser(newUser, (err, user) => {
    err ? res.json({success: false, msg: 'Failed to register user'}) : res.json({success: true, msg: 'User registered'});
  });
}

module.exports = usersController;