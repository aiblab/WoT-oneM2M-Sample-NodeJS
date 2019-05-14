var express = require('express');
var router = express.Router();
var onem2mnodebridge = require('onem2mnodebridge');
var platform = new onem2mnodebridge(global.config);
var utils = require('./utils');

router.get('/adns', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var adns = {
		result : null
	};
	
	platform.getADNAll(adns, function (err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		res.json({
			code : 200,
			items : adns.result
		});
	});
});

router.post('/adns/adn', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var adn = {
		check_uri : query.adnId,
		adn_id : query.adnId,
		adn_name : query.adnName
	};

	platform.checkDuplicated(adn, function(err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		if(adn.exists) {
			res.json({
				code : 409
			});
			return;
		}

		platform.createADN(adn, function (err) {
			if(err) {
				console.error('==>> ERROR', err);
				res.json({
					code : 500,
					message : err
				});
				return;
			}
	
			res.json({
				code : 201
			});
		});
	});
});

router.get('/sensors', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var adns = {
		adn_id : query.adnId,
		result : null
	};
	
	platform.getDeviceAll(adns, function (err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		res.json({
			code : 200,
			items : adns.result
		});
	});
});

router.post('/sensors/sensor', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var sensor = {
		adn_id : query.adnId,
		check_uri : query.adnId + '/' + query.sensorId,
		id : query.sensorId,
		name : query.sensorName,
		history : query.sensorHistory
	};

	platform.checkDuplicated(sensor, function(err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		if(sensor.exists) {
			res.json({
				code : 409
			});
			return;
		}
	
		platform.registrySensor(sensor, function (err) {
			if(err) {
				console.error('==>> ERROR', err);
				res.json({
					code : 500,
					message : err
				});
				return;
			}

			res.json({
				code : 201
			});
		});
	});
});

router.post('/sensors/sensor/report', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var report = {
		adn_id : query.adnId,
		id : query.sensorId,
		value : query.value,
		name : query.name
	};
	
	platform.sendSensingReport(report, function (err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		res.json({
			code : 201
		});
	});
});

router.get('/sensors/sensor/lastValue', function(req, res, next) {
	var query = utils.getRequestQuery(req, res);
	var sensor = {
		adn_id : query.adnId,
		id : query.sensorId,
		result : null
	};

	platform.getLastValue(sensor, function (err) {
		if(err) {
			console.error('==>> ERROR', err);
			res.json({
				code : 500,
				message : err
			});
			return;
		}

		res.json({
			code : 200,
			item : sensor.result
		});
	});
});

module.exports = router;