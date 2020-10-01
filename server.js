const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const routes = require("./routes/routeController.js");

// const db = require("./models");


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.use(express.static('public'));
require("./routes/htmlroutes.js")(app)
app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});