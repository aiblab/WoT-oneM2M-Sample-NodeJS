'use strict';
var _0x59bb = ["name", "history", "> oneM2M - Sensor Container(", ") registered", "Conflict", ") unregistered", "updateSensor", ") update", ") failed to update", "deleteSensor", ") failed to delete", "registryActuator", "> oneM2M - Actuator Container(", ") already registered", "PUT", "deleteActuator", "DEL", ") deleted", "sendSensingReport", "yyyymmddHHMMss", "stringify", "toString", "base64", "application/json;ty=4", "sensing value report ", "> oneM2M(201) - instance value posted - ", " : ", "> oneM2M(400) - Bad instance value posted - ", 
"> oneM2M(", "sendActuatorResult", "?rcn=0", "application/json:1", "sendActuation", "> oneM2M - Actuation posted (", "> oneM2M - Actuation did not posted (", "getDevice", "check_uri", "?rcn=5", "application/json", "parse", "object", "m2m:erri", "getDeviceAll", "result", "getLastValue", "/la", "m2m:cin", "m2m:cnt", "items", "each", "con", "push", "getValues", "apply", "getADNAll", "m2m:cb", "exports", "async", "dateformat", "request", "> initialized oneM2M bridge", "prototype", "createADN", "adn_id", 
"adn_name", "adn_poa", "poa", "scl", "base", "url", "POST", "rid-1", "error", "==>> oneM2M server error: ", "statusMessage", "Created", "log", "checkDuplicated", "GET", "origin", "statusCode", "m2m:ae", "string", "exists", "Internal Server Error", "registrySensor", "application/json;ty=3"];
(function(_0xb67384$jscomp$0, _0x27295a$jscomp$0) {
var _0x156d7c$jscomp$0 = function(_0x52a1f8$jscomp$0) {
for (; --_0x52a1f8$jscomp$0;) {
_0xb67384$jscomp$0["push"](_0xb67384$jscomp$0["shift"]());
}
};
_0x156d7c$jscomp$0(++_0x27295a$jscomp$0);
})(_0x59bb, 492);
var _0x2be5 = function(_0x4058d1$jscomp$0, _0x57592c$jscomp$0) {
_0x4058d1$jscomp$0 = _0x4058d1$jscomp$0 - 0;
var _0x3e3041$jscomp$0 = _0x59bb[_0x4058d1$jscomp$0];
return _0x3e3041$jscomp$0;
};
var async = require(_0x2be5("0x0"));
var dateFormat = require(_0x2be5("0x1"));
var request = require(_0x2be5("0x2"));
var config = null;
var onem2mbridge = function(_0x9c73d4$jscomp$0) {
config = _0x9c73d4$jscomp$0;
console["log"](_0x2be5("0x3"));
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x5")] = function(_0x2b5ed7$jscomp$0, _0x3078e6$jscomp$0) {
var _0x4272d9$jscomp$0 = {
"api" : _0x2b5ed7$jscomp$0[_0x2be5("0x6")],
"at" : 1,
"rr" : ![],
"lbl" : _0x2b5ed7$jscomp$0[_0x2be5("0x7")],
"apn" : _0x2b5ed7$jscomp$0[_0x2be5("0x6")]
};
if (_0x2b5ed7$jscomp$0[_0x2be5("0x8")]) {
_0x4272d9$jscomp$0[_0x2be5("0x9")] = _0x2b5ed7$jscomp$0[_0x2be5("0x8")];
}
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")][_0x2be5("0xc")],
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : "application/json;ty=2",
"X-M2M-Origin" : _0x2b5ed7$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
},
"json" : {
"m2m:ae" : _0x4272d9$jscomp$0
}
}, function(_0x4249bb$jscomp$0, _0x3decc4$jscomp$0, _0x5e88b9$jscomp$0) {
if (_0x4249bb$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x4249bb$jscomp$0);
_0x3078e6$jscomp$0(_0x4249bb$jscomp$0);
return;
}
if (_0x3decc4$jscomp$0[_0x2be5("0x11")] === _0x2be5("0x12") || _0x3decc4$jscomp$0["statusCode"] === 201) {
console[_0x2be5("0x13")]("> oneM2M - SensorTag AE registered");
_0x3078e6$jscomp$0();
} else {
console[_0x2be5("0xf")]("> oneM2M - SensorTag AE unregistered");
_0x3078e6$jscomp$0(_0x5e88b9$jscomp$0[_0x2be5("0xf")]);
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x14")] = function(_0x5690b8$jscomp$0, _0xd2a98a$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")][_0x2be5("0xc")] + "/" + _0x5690b8$jscomp$0["check_uri"],
"method" : _0x2be5("0x15"),
"headers" : {
"content-type" : "application/json",
"X-M2M-Origin" : config["scl"][_0x2be5("0xb")][_0x2be5("0x16")],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x3f054d$jscomp$0, _0x23e6bc$jscomp$0, _0x331290$jscomp$0) {
if (_0x3f054d$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x3f054d$jscomp$0);
_0xd2a98a$jscomp$0(_0x3f054d$jscomp$0);
return;
}
_0x331290$jscomp$0 = JSON["parse"](_0x331290$jscomp$0);
if (_0x23e6bc$jscomp$0[_0x2be5("0x17")] === 200 && typeof _0x331290$jscomp$0[_0x2be5("0x18")] === "object") {
_0x5690b8$jscomp$0["exists"] = !![];
_0xd2a98a$jscomp$0();
} else {
if (_0x23e6bc$jscomp$0[_0x2be5("0x17")] >= 400 && typeof _0x331290$jscomp$0["m2m:erri"] === _0x2be5("0x19")) {
_0x5690b8$jscomp$0[_0x2be5("0x1a")] = ![];
_0xd2a98a$jscomp$0();
} else {
_0xd2a98a$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x1c")] = function(_0x58c4eb$jscomp$0, _0xfed7c8$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")]["url"] + "/" + _0x58c4eb$jscomp$0[_0x2be5("0x6")],
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0x58c4eb$jscomp$0["adn_id"],
"X-M2M-RI" : _0x2be5("0xe"),
"X-M2M-NM" : _0x58c4eb$jscomp$0[_0x2be5("0x1e")]
},
"json" : {
"m2m:cnt" : {
"rn" : _0x58c4eb$jscomp$0["id"],
"lbl" : _0x58c4eb$jscomp$0["name"],
"mni" : _0x58c4eb$jscomp$0[_0x2be5("0x1f")],
"mia" : 86400
}
}
}, function(_0x5922dd$jscomp$0, _0x3c1211$jscomp$0, _0x599d81$jscomp$0) {
if (_0x5922dd$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x5922dd$jscomp$0);
_0xfed7c8$jscomp$0(_0x5922dd$jscomp$0);
return;
}
if (_0x3c1211$jscomp$0["statusMessage"] === _0x2be5("0x12") || _0x3c1211$jscomp$0[_0x2be5("0x17")] === 201) {
console[_0x2be5("0x13")](_0x2be5("0x20") + _0x58c4eb$jscomp$0["id"] + _0x2be5("0x21"));
_0xfed7c8$jscomp$0();
} else {
if (_0x3c1211$jscomp$0[_0x2be5("0x11")] === _0x2be5("0x22") || _0x3c1211$jscomp$0[_0x2be5("0x17")] === 409) {
console[_0x2be5("0x13")]("> oneM2M - Sensor Container(" + _0x58c4eb$jscomp$0["id"] + ") already registered");
_0xfed7c8$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x20") + _0x58c4eb$jscomp$0["id"] + _0x2be5("0x23"));
_0xfed7c8$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x24")] = function(_0x379433$jscomp$0, _0x48e6b6$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"][_0x2be5("0xc")] + "/" + _0x379433$jscomp$0[_0x2be5("0x6")] + "/" + _0x379433$jscomp$0["id"],
"method" : "PUT",
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0x379433$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe"),
"X-M2M-NM" : _0x379433$jscomp$0[_0x2be5("0x1e")]
},
"json" : {
"m2m:cnt" : {
"lbl" : _0x379433$jscomp$0[_0x2be5("0x1e")],
"mni" : _0x379433$jscomp$0[_0x2be5("0x1f")]
}
}
}, function(_0x12fb33$jscomp$0, _0x13544f$jscomp$0, _0x78d164$jscomp$0) {
if (_0x12fb33$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x12fb33$jscomp$0);
_0x48e6b6$jscomp$0(_0x12fb33$jscomp$0);
return;
}
if (_0x13544f$jscomp$0[_0x2be5("0x17")] === 200) {
console[_0x2be5("0x13")](_0x2be5("0x20") + _0x379433$jscomp$0["id"] + _0x2be5("0x25"));
_0x48e6b6$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x20") + _0x379433$jscomp$0["id"] + _0x2be5("0x26"));
_0x48e6b6$jscomp$0(_0x2be5("0x1b"));
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x27")] = function(_0x61e223$jscomp$0, _0x309425$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")][_0x2be5("0xc")] + "/" + _0x61e223$jscomp$0["adn_id"] + "/" + _0x61e223$jscomp$0["id"],
"method" : "DEL",
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0x61e223$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : "rid-1"
}
}, function(_0x4ce553$jscomp$0, _0x49983e$jscomp$0, _0x588181$jscomp$0) {
if (_0x4ce553$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x4ce553$jscomp$0);
_0x309425$jscomp$0(_0x4ce553$jscomp$0);
return;
}
if (_0x49983e$jscomp$0[_0x2be5("0x17")] === 200) {
console[_0x2be5("0x13")](_0x2be5("0x20") + _0x61e223$jscomp$0["id"] + ") deleted");
_0x309425$jscomp$0();
} else {
console[_0x2be5("0xf")]("> oneM2M - Sensor Container(" + _0x61e223$jscomp$0["id"] + _0x2be5("0x28"));
_0x309425$jscomp$0(_0x2be5("0x1b"));
}
});
};
onem2mbridge["prototype"][_0x2be5("0x29")] = function(_0x6950e5$jscomp$0, _0x3e0e87$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"][_0x2be5("0xc")] + "/" + _0x6950e5$jscomp$0[_0x2be5("0x6")],
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0x6950e5$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe"),
"X-M2M-NM" : _0x6950e5$jscomp$0[_0x2be5("0x1e")]
},
"json" : {
"m2m:cnt" : {
"rn" : _0x6950e5$jscomp$0["id"],
"lbl" : _0x6950e5$jscomp$0[_0x2be5("0x1e")],
"mni" : _0x6950e5$jscomp$0[_0x2be5("0x1f")],
"mia" : 86400
}
}
}, function(_0x29d86f$jscomp$0, _0x13b2be$jscomp$0, _0x1a341e$jscomp$0) {
if (_0x29d86f$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x29d86f$jscomp$0);
_0x3e0e87$jscomp$0(_0x29d86f$jscomp$0);
return;
}
if (_0x13b2be$jscomp$0[_0x2be5("0x11")] === _0x2be5("0x12") || _0x13b2be$jscomp$0[_0x2be5("0x17")] === 201) {
console[_0x2be5("0x13")]("> oneM2M - Actuator Container(" + _0x6950e5$jscomp$0["id"] + _0x2be5("0x21"));
_0x3e0e87$jscomp$0();
} else {
if (_0x13b2be$jscomp$0[_0x2be5("0x11")] === _0x2be5("0x22") || _0x13b2be$jscomp$0[_0x2be5("0x17")] === 409) {
console[_0x2be5("0x13")](_0x2be5("0x2a") + _0x6950e5$jscomp$0["id"] + _0x2be5("0x2b"));
_0x3e0e87$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x2a") + _0x6950e5$jscomp$0["id"] + _0x2be5("0x23"));
_0x3e0e87$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
onem2mbridge[_0x2be5("0x4")]["updateActuator"] = function(_0x1d8fad$jscomp$0, _0x25c662$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"]["url"] + "/" + _0x1d8fad$jscomp$0[_0x2be5("0x6")] + "/" + _0x1d8fad$jscomp$0["id"],
"method" : _0x2be5("0x2c"),
"headers" : {
"content-type" : "application/json;ty=3",
"X-M2M-Origin" : _0x1d8fad$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe"),
"X-M2M-NM" : _0x1d8fad$jscomp$0[_0x2be5("0x1e")]
},
"json" : {
"m2m:cnt" : {
"lbl" : _0x1d8fad$jscomp$0[_0x2be5("0x1e")],
"mni" : _0x1d8fad$jscomp$0[_0x2be5("0x1f")]
}
}
}, function(_0x5e9a92$jscomp$0, _0x12bd8d$jscomp$0, _0x18c2d7$jscomp$0) {
if (_0x5e9a92$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x5e9a92$jscomp$0);
_0x25c662$jscomp$0(_0x5e9a92$jscomp$0);
return;
}
if (_0x12bd8d$jscomp$0[_0x2be5("0x17")] === 200) {
console[_0x2be5("0x13")](_0x2be5("0x2a") + _0x1d8fad$jscomp$0["id"] + _0x2be5("0x25"));
_0x25c662$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x2a") + _0x1d8fad$jscomp$0["id"] + _0x2be5("0x26"));
_0x25c662$jscomp$0(_0x2be5("0x1b"));
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x2d")] = function(_0xec407c$jscomp$0, _0x2b1885$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"][_0x2be5("0xc")] + "/" + _0xec407c$jscomp$0[_0x2be5("0x6")] + "/" + _0xec407c$jscomp$0["id"],
"method" : _0x2be5("0x2e"),
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0xec407c$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x562f7c$jscomp$0, _0x4d780e$jscomp$0, _0x27bc21$jscomp$0) {
if (_0x562f7c$jscomp$0) {
console[_0x2be5("0xf")]("==>> oneM2M server error: ", _0x562f7c$jscomp$0);
_0x2b1885$jscomp$0(_0x562f7c$jscomp$0);
return;
}
if (_0x4d780e$jscomp$0[_0x2be5("0x17")] === 200) {
console[_0x2be5("0x13")](_0x2be5("0x2a") + _0xec407c$jscomp$0["id"] + _0x2be5("0x2f"));
_0x2b1885$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x2a") + _0xec407c$jscomp$0["id"] + _0x2be5("0x28"));
_0x2b1885$jscomp$0(_0x2be5("0x1b"));
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x30")] = function(_0x4617ef$jscomp$0, _0xdfe0d5$jscomp$0) {
var _0x22871a$jscomp$0 = {
"thingId" : _0x4617ef$jscomp$0[_0x2be5("0x6")],
"time" : dateFormat(new Date, _0x2be5("0x31")),
"resourceId" : _0x4617ef$jscomp$0[_0x2be5("0x1e")],
"value" : _0x4617ef$jscomp$0["value"]
};
var _0x108fde$jscomp$0 = (new Buffer(JSON[_0x2be5("0x32")](_0x22871a$jscomp$0)))[_0x2be5("0x33")](_0x2be5("0x34"));
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")]["url"] + "/" + _0x4617ef$jscomp$0[_0x2be5("0x6")] + "/" + _0x4617ef$jscomp$0["id"] + "?rcn=0",
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : _0x2be5("0x35"),
"X-M2M-Origin" : _0x4617ef$jscomp$0["adn_id"],
"X-M2M-RI" : _0x2be5("0xe")
},
"json" : {
"m2m:cin" : {
"lbl" : _0x2be5("0x36") + _0x4617ef$jscomp$0["name"],
"cnf" : "application/json:1",
"con" : _0x108fde$jscomp$0
}
}
}, function(_0x483555$jscomp$0, _0xcaec44$jscomp$0, _0x253614$jscomp$0) {
if (_0x483555$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x483555$jscomp$0);
_0xdfe0d5$jscomp$0(_0x483555$jscomp$0);
return;
}
switch(_0xcaec44$jscomp$0[_0x2be5("0x17")]) {
case 201:
console[_0x2be5("0x13")](_0x2be5("0x37") + _0x4617ef$jscomp$0["id"] + _0x2be5("0x38") + _0x22871a$jscomp$0);
_0xdfe0d5$jscomp$0();
break;
case 400:
console[_0x2be5("0x13")](_0x2be5("0x39") + _0x4617ef$jscomp$0["id"] + " : " + _0x22871a$jscomp$0);
_0xdfe0d5$jscomp$0(_0xcaec44$jscomp$0[_0x2be5("0x17")]);
break;
default:
console[_0x2be5("0x13")](_0x2be5("0x3a") + _0xcaec44$jscomp$0[_0x2be5("0x17")] + ") - instance value did not post - " + _0x4617ef$jscomp$0["id"] + _0x2be5("0x38") + _0x22871a$jscomp$0);
_0xdfe0d5$jscomp$0(_0xcaec44$jscomp$0[_0x2be5("0x17")]);
break;
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x3b")] = function(_0x12697b$jscomp$0, _0x2869f7$jscomp$0) {
var _0x499e84$jscomp$0 = {
"thingId" : _0x12697b$jscomp$0[_0x2be5("0x6")],
"time" : dateFormat(new Date, "yyyymmddHHMMss"),
"resourceId" : _0x12697b$jscomp$0["name"],
"value" : _0x12697b$jscomp$0["value"]
};
var _0x5a2c9e$jscomp$0 = (new Buffer(JSON[_0x2be5("0x32")](_0x499e84$jscomp$0)))["toString"](_0x2be5("0x34"));
request({
"url" : config[_0x2be5("0xa")]["base"]["url"] + "/" + _0x12697b$jscomp$0["adn_id"] + "/" + _0x12697b$jscomp$0["id"] + _0x2be5("0x3c"),
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : _0x2be5("0x35"),
"X-M2M-Origin" : _0x12697b$jscomp$0["adn_id"],
"X-M2M-RI" : "rid-1"
},
"json" : {
"m2m:cin" : {
"lbl" : _0x2be5("0x36") + _0x12697b$jscomp$0[_0x2be5("0x1e")],
"cnf" : _0x2be5("0x3d"),
"con" : _0x5a2c9e$jscomp$0
}
}
}, function(_0x50694d$jscomp$0, _0x4089db$jscomp$0, _0x3a6f65$jscomp$0) {
if (_0x50694d$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x50694d$jscomp$0);
_0x2869f7$jscomp$0(_0x50694d$jscomp$0);
return;
}
switch(_0x4089db$jscomp$0[_0x2be5("0x17")]) {
case 201:
console[_0x2be5("0x13")](_0x2be5("0x37") + _0x12697b$jscomp$0["id"] + _0x2be5("0x38") + _0x499e84$jscomp$0);
_0x2869f7$jscomp$0();
break;
case 400:
console[_0x2be5("0x13")](_0x2be5("0x39") + _0x12697b$jscomp$0["id"] + " : " + _0x499e84$jscomp$0);
_0x2869f7$jscomp$0(_0x4089db$jscomp$0[_0x2be5("0x17")]);
break;
default:
console[_0x2be5("0x13")](_0x2be5("0x3a") + _0x4089db$jscomp$0[_0x2be5("0x17")] + ") - instance value did not post - " + _0x12697b$jscomp$0["id"] + _0x2be5("0x38") + _0x499e84$jscomp$0);
_0x2869f7$jscomp$0(_0x4089db$jscomp$0["statusCode"]);
break;
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x3e")] = function(_0x55a57b$jscomp$0, _0x81fcf9$jscomp$0) {
request({
"url" : config["scl"][_0x2be5("0xb")]["url"] + "/" + _0x55a57b$jscomp$0[_0x2be5("0x6")],
"method" : _0x2be5("0xd"),
"headers" : {
"content-type" : _0x2be5("0x1d"),
"X-M2M-Origin" : _0x55a57b$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
},
"json" : {
"id" : _0x55a57b$jscomp$0["id"],
"value" : _0x55a57b$jscomp$0["VALUE"]
}
}, function(_0x4ba716$jscomp$0, _0x59d034$jscomp$0, _0x4f0103$jscomp$0) {
if (_0x4ba716$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x4ba716$jscomp$0);
_0x81fcf9$jscomp$0(_0x4ba716$jscomp$0);
return;
}
if (_0x59d034$jscomp$0[_0x2be5("0x17")] === 200) {
console[_0x2be5("0x13")](_0x2be5("0x3f") + _0x55a57b$jscomp$0["id"] + ")");
_0x81fcf9$jscomp$0();
} else {
console[_0x2be5("0xf")](_0x2be5("0x40") + _0x55a57b$jscomp$0["id"] + ")");
_0x81fcf9$jscomp$0(_0x2be5("0x1b"));
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x41")] = function(_0x989d5a$jscomp$0, _0xb1819$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"]["url"] + "/" + _0x989d5a$jscomp$0[_0x2be5("0x42")] + _0x2be5("0x43"),
"method" : _0x2be5("0x15"),
"headers" : {
"content-type" : _0x2be5("0x44"),
"X-M2M-Origin" : _0x989d5a$jscomp$0["adn_id"],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x50c518$jscomp$0, _0x37b70d$jscomp$0, _0x5848e2$jscomp$0) {
if (_0x50c518$jscomp$0) {
console[_0x2be5("0xf")]("==>> oneM2M server error: ", _0x50c518$jscomp$0);
_0xb1819$jscomp$0(_0x50c518$jscomp$0);
return;
}
_0x5848e2$jscomp$0 = JSON[_0x2be5("0x45")](_0x5848e2$jscomp$0);
if (_0x37b70d$jscomp$0["statusCode"] === 200 && typeof _0x5848e2$jscomp$0[_0x2be5("0x18")] === _0x2be5("0x46")) {
_0x989d5a$jscomp$0["result"] = _0x5848e2$jscomp$0;
_0xb1819$jscomp$0();
} else {
if (_0x37b70d$jscomp$0[_0x2be5("0x17")] >= 400 && typeof _0x5848e2$jscomp$0[_0x2be5("0x47")] === _0x2be5("0x19")) {
_0x989d5a$jscomp$0["result"] = null;
_0xb1819$jscomp$0();
} else {
_0xb1819$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
onem2mbridge["prototype"][_0x2be5("0x48")] = function(_0x27f375$jscomp$0, _0x493af2$jscomp$0) {
request({
"url" : config["scl"][_0x2be5("0xb")][_0x2be5("0xc")] + "/" + _0x27f375$jscomp$0[_0x2be5("0x6")] + "?rcn=5",
"method" : "GET",
"headers" : {
"content-type" : _0x2be5("0x44"),
"X-M2M-Origin" : _0x27f375$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : "rid-1"
}
}, function(_0x595d3c$jscomp$0, _0x470134$jscomp$0, _0xb41b1e$jscomp$0) {
if (_0x595d3c$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x595d3c$jscomp$0);
_0x493af2$jscomp$0(_0x595d3c$jscomp$0);
return;
}
_0xb41b1e$jscomp$0 = JSON[_0x2be5("0x45")](_0xb41b1e$jscomp$0);
if (_0x470134$jscomp$0[_0x2be5("0x17")] === 200 && typeof _0xb41b1e$jscomp$0[_0x2be5("0x18")] === _0x2be5("0x46")) {
_0x27f375$jscomp$0[_0x2be5("0x49")] = _0xb41b1e$jscomp$0["m2m:ae"]["ch"];
_0x493af2$jscomp$0();
} else {
if (_0x470134$jscomp$0["statusCode"] >= 400 && typeof _0xb41b1e$jscomp$0[_0x2be5("0x47")] === "string") {
_0x27f375$jscomp$0[_0x2be5("0x49")] = null;
_0x493af2$jscomp$0();
} else {
_0x493af2$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x4a")] = function(_0xaef8a2$jscomp$0, _0x1ef2a3$jscomp$0) {
request({
"url" : config["scl"][_0x2be5("0xb")][_0x2be5("0xc")] + "/" + _0xaef8a2$jscomp$0[_0x2be5("0x6")] + "/" + _0xaef8a2$jscomp$0["id"] + _0x2be5("0x4b"),
"method" : _0x2be5("0x15"),
"headers" : {
"content-type" : "application/json",
"X-M2M-Origin" : _0xaef8a2$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0xe54caf$jscomp$0, _0x243f18$jscomp$0, _0x3988f3$jscomp$0) {
if (_0xe54caf$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0xe54caf$jscomp$0);
_0x1ef2a3$jscomp$0(_0xe54caf$jscomp$0);
return;
}
_0x3988f3$jscomp$0 = JSON[_0x2be5("0x45")](_0x3988f3$jscomp$0);
if (_0x243f18$jscomp$0[_0x2be5("0x17")] === 200 && typeof _0x3988f3$jscomp$0[_0x2be5("0x4c")] === "object") {
var _0x188f34$jscomp$0 = new Buffer(_0x3988f3$jscomp$0[_0x2be5("0x4c")]["con"], _0x2be5("0x34"));
_0xaef8a2$jscomp$0[_0x2be5("0x49")] = _0x188f34$jscomp$0[_0x2be5("0x33")]();
_0x1ef2a3$jscomp$0();
} else {
if (_0x243f18$jscomp$0["statusCode"] >= 400 && typeof _0x3988f3$jscomp$0[_0x2be5("0x47")] === _0x2be5("0x19")) {
_0xaef8a2$jscomp$0[_0x2be5("0x49")] = null;
_0x1ef2a3$jscomp$0();
} else {
_0x1ef2a3$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
function getContainers(_0x3cfb56$jscomp$0, _0x13c179$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")]["url"] + "/" + _0x3cfb56$jscomp$0[_0x2be5("0x6")] + "/" + _0x3cfb56$jscomp$0["id"] + _0x2be5("0x43"),
"method" : _0x2be5("0x15"),
"headers" : {
"content-type" : _0x2be5("0x44"),
"Accept" : "application/json",
"X-M2M-Origin" : _0x3cfb56$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x5ee15f$jscomp$0, _0x30b26f$jscomp$0, _0xd5027c$jscomp$0) {
if (_0x5ee15f$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x5ee15f$jscomp$0);
_0x13c179$jscomp$0(_0x5ee15f$jscomp$0);
return;
}
_0xd5027c$jscomp$0 = JSON[_0x2be5("0x45")](_0xd5027c$jscomp$0);
if (_0x30b26f$jscomp$0["statusCode"] === 200 && typeof _0xd5027c$jscomp$0[_0x2be5("0x4d")] === _0x2be5("0x46")) {
_0x3cfb56$jscomp$0[_0x2be5("0x4e")] = _0xd5027c$jscomp$0[_0x2be5("0x4d")]["ch"];
_0x13c179$jscomp$0();
} else {
_0x13c179$jscomp$0(_0x2be5("0x1b"));
}
});
}
function getInstanceValue(_0x56c80e$jscomp$0, _0xddf9a3$jscomp$0) {
async[_0x2be5("0x4f")](_0x56c80e$jscomp$0["items"], function(_0x1d4ad4$jscomp$0, _0x5c5b08$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")][_0x2be5("0xb")][_0x2be5("0xc")] + "/" + _0x56c80e$jscomp$0["adn_id"] + "/" + _0x56c80e$jscomp$0["id"] + "/" + _0x1d4ad4$jscomp$0["nm"],
"method" : _0x2be5("0x15"),
"headers" : {
"content-type" : _0x2be5("0x44"),
"Accept" : _0x2be5("0x44"),
"X-M2M-Origin" : _0x56c80e$jscomp$0[_0x2be5("0x6")],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x4e8f5d$jscomp$0, _0x40a41c$jscomp$0, _0x5d86e0$jscomp$0) {
if (_0x4e8f5d$jscomp$0) {
console["error"](_0x2be5("0x10"), _0x4e8f5d$jscomp$0);
_0xddf9a3$jscomp$0(_0x4e8f5d$jscomp$0);
return;
}
_0x5d86e0$jscomp$0 = JSON[_0x2be5("0x45")](_0x5d86e0$jscomp$0);
if (_0x40a41c$jscomp$0[_0x2be5("0x17")] === 200 && typeof _0x5d86e0$jscomp$0[_0x2be5("0x4c")] === _0x2be5("0x46")) {
var _0x5c5824$jscomp$0 = new Buffer(_0x5d86e0$jscomp$0[_0x2be5("0x4c")][_0x2be5("0x50")], _0x2be5("0x34"));
_0x56c80e$jscomp$0[_0x2be5("0x49")][_0x2be5("0x51")](_0x5c5824$jscomp$0[_0x2be5("0x33")]());
_0xddf9a3$jscomp$0();
} else {
if (_0x40a41c$jscomp$0[_0x2be5("0x17")] >= 400 && typeof _0x5d86e0$jscomp$0[_0x2be5("0x47")] === "string") {
_0xddf9a3$jscomp$0();
} else {
_0xddf9a3$jscomp$0(_0x2be5("0x1b"));
}
}
});
}, function(_0x53443e$jscomp$0) {
if (_0x53443e$jscomp$0) {
_0xddf9a3$jscomp$0(_0x53443e$jscomp$0);
return;
}
_0xddf9a3$jscomp$0();
});
}
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x52")] = function(_0x56f8b9$jscomp$0, _0x268bc5$jscomp$0) {
var _0x34e72a$jscomp$0 = {
"adn_id" : _0x56f8b9$jscomp$0[_0x2be5("0x6")],
"id" : _0x56f8b9$jscomp$0["id"],
"items" : [],
"values" : []
};
async["waterfall"]([async["apply"](getContainers, _0x34e72a$jscomp$0), async[_0x2be5("0x53")](getInstanceValue, concatSeries)], function(_0x329a67$jscomp$0) {
if (_0x329a67$jscomp$0) {
_0x268bc5$jscomp$0(_0x329a67$jscomp$0);
return;
}
_0x56f8b9$jscomp$0[_0x2be5("0x49")] = _0x34e72a$jscomp$0["values"];
});
};
onem2mbridge[_0x2be5("0x4")][_0x2be5("0x54")] = function(_0x21727b$jscomp$0, _0x1cb284$jscomp$0) {
request({
"url" : config[_0x2be5("0xa")]["base"]["url"] + _0x2be5("0x43"),
"method" : "GET",
"headers" : {
"content-type" : _0x2be5("0x44"),
"X-M2M-Origin" : config[_0x2be5("0xa")][_0x2be5("0xb")]["origin"],
"X-M2M-RI" : _0x2be5("0xe")
}
}, function(_0x80f4bd$jscomp$0, _0x112ef2$jscomp$0, _0x269c4f$jscomp$0) {
if (_0x80f4bd$jscomp$0) {
console[_0x2be5("0xf")](_0x2be5("0x10"), _0x80f4bd$jscomp$0);
_0x1cb284$jscomp$0(_0x80f4bd$jscomp$0);
return;
}
_0x269c4f$jscomp$0 = JSON[_0x2be5("0x45")](_0x269c4f$jscomp$0);
if (_0x112ef2$jscomp$0[_0x2be5("0x17")] === 200 && typeof _0x269c4f$jscomp$0[_0x2be5("0x55")] === "object") {
_0x21727b$jscomp$0[_0x2be5("0x49")] = _0x269c4f$jscomp$0[_0x2be5("0x55")]["ch"];
_0x1cb284$jscomp$0();
} else {
if (_0x112ef2$jscomp$0[_0x2be5("0x17")] >= 400 && typeof _0x269c4f$jscomp$0[_0x2be5("0x47")] === _0x2be5("0x19")) {
_0x21727b$jscomp$0[_0x2be5("0x49")] = null;
_0x1cb284$jscomp$0();
} else {
_0x1cb284$jscomp$0(_0x2be5("0x1b"));
}
}
});
};
exports = module[_0x2be5("0x56")] = onem2mbridge;