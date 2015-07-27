function getInfo (request, reply) {
	reply({info:"Some information.."}); 
}

var routes = [
	// Localy process
	{method:'GET', path:'/{params*}', handler:{	directory:{	path:'./app'}}}, 

	// Proxy to 9090
	{method:'GET', path:'/api/{som*}', handler:lcmserver()},
	{method:'POST', path:'/api/{som*}', handler:lcmserver()},
	{method:'PUT', path:'/api/{som*}', handler:lcmserver()},
	{method:'OPTION', path:'/api/{som*}', handler:lcmserver()},

]

module.exports = routes; 


function lcmserver () {
	return {
		proxy:{
		  "host": "localhost",
		  "port": 9000,
		  "protocol":"http",
		  "passThrough": true
		}
	} 
	; 
}

