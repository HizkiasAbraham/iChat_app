/**
 * import important libraries
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const JwtStrategy = require('./authentication/jwtStrategy');
const defaultRoutes = require('./routes/usersRoute');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors({}));
// mount route
app.use('/api/users', defaultRoutes);
// use passport
passport.use(JwtStrategy);
app.use(passport.initialize());
// connect to mongodb
mongoose.connect(process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(success => {
        console.log('Succesfully connected to database!')
        app.listen(process.env.SERVER_PORT, () => {
            console.log('Server started listening at ', process.env.SERVER_PORT)
        })
    })
    .catch(
        err => {
            console.log('Error while connecting to mongo db!');
        }
    )


