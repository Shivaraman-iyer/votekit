
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes'),
    http = require('http'),
    rest = require('restler');
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


if(!module.parent){
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}

/*var post_data = JSON.stringify({
    who : 'aakriti',
    visibility : 'public'
    });
console.log('Posting data: ', post_data);

var options = {
      host: 'localhost',
      port: 3000,
      path: '/api/poll',
      method: 'POST'
};

var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
                      });
});

req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(post_data);
req.end();*/
