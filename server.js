const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

const mongojs = require('mongojs');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require("./routes/routeController.js");

// const db = require("./models");
app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Workouts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/htmlroutes.js")(app)
app.use(routes);


app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});