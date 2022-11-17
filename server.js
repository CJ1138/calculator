// Load node modules
var express = require('express')
// Init Express
var app = express();
// Render static files
app.use(express.static('public'));
// Listen on port
app.listen(8080);