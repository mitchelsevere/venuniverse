const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./db/config');
const jwtPassport = require('./services/passport');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.database, {
  useMongoClient: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to database', config.database);
});
mongoose.connection.on('error', err => {
  console.log('Database error', err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
jwtPassport(passport);

app.listen(port, () => {
  console.log('Server started on port', port);
});

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);