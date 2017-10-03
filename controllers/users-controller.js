const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../db/config');
const User = require('../models/user');

const usersController = {};

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