//Module dependencies
express = require('express');
http = require('http');
sys = require('sys');//Needed?
fs = require('fs');//Needed?

//Create express server
app = module.exprots = express.createServer("127.0.0.1");

//Connect to turbulence engine
turbulence.require('turbulence-engine');
turbulence.connect('localhost', 'newdb');

//COnfigure
app.configure(function(){ 
    app.set('views', __dirname + '/views/);
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session( { secret: 'poll-app-secret' } ));
    app.use(express.logger( { format: 'date: remote-addr: method: status: url:' } ));
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
    });

app.configure('development', function() {
    app.use(express.errorHandler( { dumpExceptions: true, showStack: true} ));
});
app.configure('production', function() { 
    app.use(express.errorHandler());
    });

//Routes
require('./routes/user.js');

if(!module.parent) {
    app.listen(8000);
    console.log("App listening at port %d in %s mode.", app.address().port, app.settings.env);
}
