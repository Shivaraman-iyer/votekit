
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
//  , votekit = require('./votekit');

//create server
var app = module.exports = express.createServer('127.0.0.1');
//connect to the votekit engine
//votekit = require('votekit-engine');
//votekit.connect('localhost', 'newdb');

//connect = require('connect');
//auth = require('connect-auth');//what iis this for?
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
