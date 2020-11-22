const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');



const app = express();
const PORT = process.env.PORT || 8080;

const MONGO_URL = 'mongodb+srv://admin:shiroyuki@cluster0.6gqfx.mongodb.net/issue-tracker?retryWrites=true&w=majority';

const routes = require('./routes/api');

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected!')
})

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));





app.use(morgan('tiny')); //this is an http request logger
app.use('/', routes)

app.listen(PORT, console.log(`Server is staring at ${PORT}`));
