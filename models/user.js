const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../db/config');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  }, 
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.auth = {
  getUserById: function(id, callback) {
    User.findById(id, callback);
  },
  getUserByUsername: function(username, callback) {
    let query = { username };
    User.findOne(query, callback);
  },
  addUser: function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  },
  comparePassword: function(clientPassword, hash, callback) {
    bcrypt.compare(clientPassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
}
