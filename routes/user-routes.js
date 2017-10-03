const express = require('express');
const usersController = require('../controllers/users-controller');

const userRouter = express.Router();

// userRouter.get('/profile', usersController.index);
userRouter.post('/register', usersController.create);
// userRouter.post('/authenticate', usersController.authenticate);
// userRouter.post('/validate', usersController.validate);

module.exports = userRouter;