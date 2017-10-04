const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const usersController = require('../controllers/users-controller');

const userRouter = express.Router();

userRouter.get('/profile', passport.authenticate('jwt', { session: false }), usersController.index);
userRouter.post('/register', usersController.create);
userRouter.post('/authenticate', usersController.authenticate);
// userRouter.post('/validate', usersController.validate);

module.exports = userRouter;