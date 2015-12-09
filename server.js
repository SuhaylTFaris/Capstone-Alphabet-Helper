// modules =================================================
var express        = require('express');
var router         = express.Router();
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var path           = require('path');
var methodOverride = require('method-override');

// configuration ===========================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

console.log('__dirname', __dirname);

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

// routes ==================================================
// require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app