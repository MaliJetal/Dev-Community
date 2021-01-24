const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//DB config
const config = {
  autoIndex: false,
  useNewUrlParser: true
};
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose.connect(db, config).then(() => console.log('MongoDb connected')).catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport configuration
require('./config/passport')(passport);

//User Routes
app.use('/api/user', users);

app.get('/', (req, res) => res.send("Hello World"));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

