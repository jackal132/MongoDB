require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env['PORT'];
const mongoUri = process.env['MONGO_URI'];

// Static File Service
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded( {extended: true}));
app.use(express.json());

// Connect To MonogoDB Server
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, {useNewUrlParser : true})
    .then(() => { console.log('connect to mongodb'); })
    .catch((e) => { console.log(e)});

app.use('/todos', require('./routes/todos'));

app.listen(port, () => console.log(`listening on port ${port}`));
