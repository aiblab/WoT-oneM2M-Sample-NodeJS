var fs = require('fs');
var Puid = require('puid');
var puid = new Puid(true);
var dateFormat = require('dateformat');
var util = require('util');

var config = require('../config/config');

/*******************************************************************************
 * Pagination
 ******************************************************************************/
exports.pagination = function(PAGE_ITEM_SIZE, PAGE_WINDOW_SIZE, total, pageNo) {
	var startMod = pageNo % PAGE_WINDOW_SIZE;
	var start = pageNo - startMod;

	var maxMod = total % PAGE_ITEM_SIZE;
	var max = (total - maxMod) / PAGE_ITEM_SIZE;

	if (maxMod > 0)
		max++;

	var endMod = start + PAGE_WINDOW_SIZE;
	var end = Math.min(endMod, max);

	var pages = {
		start : start,
		end : end,
		max : max,
		pageItemSize : PAGE_ITEM_SIZE,
		pageWindowSize : PAGE_WINDOW_SIZE,
		total : total,
		items : [],
	};

	for (var i = start; i < end; i++) {
		pages.items.push(i);
	}

	return pages;
};

exports.getRequestQuery = function(req, res) {
	var query = req.query;

	if (Object.keys(req.body).length > 0) {
		for ( var key in req.body) {
			query[key] = req.body[key];
		}
	}

	if (Object.keys(req.params).length > 0) {
		for ( var key in req.params) {
			query[key] = req.params[key];
		}
	}

	if (!query.pageNo)
		query.pageNo = 0;
	else
		query.pageNo = parseInt(query.pageNo);

	if (config.debug)
	console.log('==>> STEP 0 ----', query);

	return query;
};

exports.getEmfitRequestQuery = function(req, res) {
	var query = req.query;

	var contentType = req.get('content-type');

	if(contentType.indexOf('text/') === 0){
		req.body = JSON.parse(req.body);
	}

	if (Object.keys(req.body).length > 0) {
		for ( var key in req.body) {
			query[key] = req.body[key];
		}
	}

	if (Object.keys(req.params).length > 0) {
		for ( var key in req.params) {
			query[key] = req.params[key];
		}
	}

	if(req.path === '/event') {
		console.log('==>> event : ', query);
	}

	return query;
};

exports.tagParser = function(descriptions) {
	var tagArray = new Array();

	if(!util.isNullOrUndefined(descriptions)){
		var orgStrArray = descriptions.replace(/\n/gim, ' ');
		orgStrArray = orgStrArray.split(" ");
	
		for ( var i in orgStrArray) {
			if (orgStrArray[i].indexOf('#') === 0)
				tagArray.push(orgStrArray[i].substring(1));
		}
	}

	return tagArray;
};

exports.stringToArrayParser = function(str) {
	var array = new Array();
	var dummy = str.split(",");

	for ( var i in dummy) {
		array.push(dummy[i].trim());
	}

	return array;
};

exports.generateId = function() {
	return puid.generate();
};

exports.currentTime = function() {
	var now = new Date();
	var jsonDate = now.toJSON();
	return new Date(jsonDate);
};

exports.getTimedFolderPath = function(prefix) {
	var now = new Date();

	if (prefix)
		return prefix + '/' + dateFormat(now, 'yyyy/mm/dd/hh/MM');
	else
		return dateFormat(now, 'yyyy/mm/dd/hh/MM');
};

exports.deleteDummyContentFile = function(path) {
	fs.unlink(path, function(err) {
		if (err) {
			console.error('==>> ERROR', err);
			return;
		}
	});
};

exports.getImageRate = function (item) {
	var widthDiv = item.width / 920;
	
	if(widthDiv < 0)
		item.rate = (920 / item.width).toFixed(2);
	
	if(widthDiv > 0)
		item.rate = (item.width / 920).toFixed(2);
};

exports.hideText = function (text, len){
	if(!len)
		len = 2;
	
	var result = '';
	for (var i = 0; i < len; i++) {
		result += '*';
	}
	
	return result + text.substring(len, text.length);
};

exports.compareDayOfWeek = function(str) {
	var current = new Date().getDay();
	var result = str.substring(current, current + 1);
	return result === '1';
};

exports.isEmpty = function (value) {
	return typeof value == 'string' && !value.trim() || typeof value === 'undefined' || value === null || value === 'undefined';
};