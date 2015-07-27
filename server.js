var Hapi = require('hapi');
var Path = require('path');
var good = require('good'); 
var path       = require('path');

var routes = require('./routes'); 
// var server = new Hapi.Server(7000); 
var server = new Hapi.Server();
server.connection({
	"host":'0.0.0.0', 
	"port":3000,
	"routes": {
        "cors":true, 
        "files": {
            "relativeTo": path.join(__dirname, '')
        }
    }
})
server.route(routes); 

var plugins = 
    {
        register: good,
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: [{
                    log: '*',
                    response: '*'
                }]
            }]
        }
    }
;

server.register(plugins, function(err) {
	if (err){throw err; }
});

server.start(function() {
	console.log("Server is running at:", server.info.uri);
}); 
