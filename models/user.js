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

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
  getUserById: function(id, callback) {
    User.findById(id, callback);
  },
  getUserByUsername: function() {
    let query = { username };
    User.findOne(query, callback);
  },
  addUser: function() {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
}