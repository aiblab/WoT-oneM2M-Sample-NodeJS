var fs = require('fs');

var config = {};

config.debug = true;

// base dir
config.base = {
	dir : __dirname + '/..'
};

config.scl = {
	base : {
		url : 'http://13.124.128.219:8081/~/csitso-in/base', //'http://onem2m.iotmeca.com:8080/~/handypia-in/base',
		//url : 'http://onem2m.iotmeca.com:8080/~/handypia-in/base',
		origin : 'csitso-in'
		//origin : 'handypia-in'
	}
};

config.batch = {
	location : 'Asia/Seoul'
};

module.exports = config;
