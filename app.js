
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes'),
    http = require('http');
//  , votekit = require('./votekit');

//create server
app = module.exports = express.createServer('127.0.0.1');

//connect to the votekit engine
votekit = require('./votekit/votekit-engine.js');
votekit.connect('localhost', 'newdb');

connect = require('connect');
//auth = require('connect-auth');//what iis this for?
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.logger( { format: ':date :remote-addr :method :status :url' } ));
//  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
require('./routes/create.js');
require('./routes/read.js');
require('./routes/delete.js');
require('./routes/update.js');

app.get('/', function(req, res){
//    res.send("Hello World!");
    console.log("here: app.get(sth sth)");

});
/*sample = {'poll_issue': 'Sample poll'        
};
app.post('/', function(sample, res){
    console.log('app.post');//sample.poll_issue);
    });
//votekit.post('/create', routes.index);
//votekit.get('/get');*/
if(!module.parent){
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
