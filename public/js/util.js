function sendFromUrl(act, method, param, target) {
	var form = document.getElementById("_postForm_");
	if (!form) {
		var form = document.createElement("FORM");
		form.id = form.name = "_postForm_";
		form.method = method;
		form.style.display = "none";
		document.body.appendChild(form);
	}

	var hinputs = form.elements;
	for (var i = hinputs.length - 1; i >= 0; i--) {
		form.removeChild(hinputs[i]);
	}
	var params = new Object();
	var tempArr = param.split("&");
	for (var i = 0; i < tempArr.length; i++) {
		var pair = tempArr[i].split("=");
		var key = "";
		var value = "";
		if (pair.length > 0)
			key = pair[0];
		if (pair.length > 1)
			value = unescape(pair[1].replace(/\+/g, " "));
		if (key)
			params[key] = value;
	}

	for ( var key in params) {
		var hinput = document.createElement("INPUT");
		hinput.type = "hidden";
		hinput.name = key;
		hinput.value = params[key];
		form.appendChild(hinput);
	}

	form.action = act;

	if (target)
		form.target = target;

	form.submit();
}

function isNull(str) {
	if (str == ''
		|| str == 'undefined'
		|| str == null) {
		return true;
	}
	return false;
}

function isNullId(id) {
	var val;
	var tagName = $('#'
		+ id).prop('tagName');

	if (tagName == 'SELECT') {
		val = $('#'
			+ id
			+ ' option:selected').val();
	} else {
		val = $('#'
			+ id).val();
	}

	if (val == ''
		|| val == 'undefined'
		|| val == null) {
		return true;
	}

	return false;
}

function isInputEnter(event) {
	if (event.which == 13
		|| event.keyCode == 13) {
		// code to execute here
		return true;
	}
	return false;
}

function invoke_ajax_command(method_type, url, params, dataType, successFN, contentType) {
	if (contentType == undefined) {
		contentType = "application/x-www-form-urlencoded; charset=UTF-8";
	}

	$.ajax({
		type : method_type,
		url : url,
		async : false,
		success : function(data, status, request) {
			// expired session
			if (request.responseText.indexOf('userLoginForm') != -1) {
				alert("session expired");
				location.href = "login.do";
			} else {
				successFN(data);
			}
		},
		error : function(data, status) {
			if (status == 'timeout') {
				alert('Failed from timeout');
			} else {
				alert(status);
			}
		},
		data : params,
		dataType : dataType,
		contentType : contentType
	});
}

function selectMenu(url) {
	sendFromUrl(url, 'GET', '', '_self');
}

function logout(){
	sendFromUrl('/logout/management', 'GET', '', '_self');
}

function isBlank(data){
	return ( $.trim(data).length == 0 );
}

/*
 * -------------------------------------------------------------------------------------
 * localStorage functions
 */
function checkStoredLocalStorageValue(key) {
	if (localStorage) {
		try {
			var checkValue = localStorage.getItem(key);

			if (checkValue != null)
				return true;

		} catch (e) {
		}
	}

	return false;
}

function isStorageValue(key, value) {
	if (localStorage) {
		try {
			var checkValue = localStorage.getItem(key);

			if (checkValue == null)
				return false;

			if (checkValue === value)
				return true;

		} catch (e) {
		}
	}

	return false;
}

function hasStorageValue(key) {
	if (localStorage) {
		try {
			var checkValue = localStorage.getItem(key);

			if (checkValue == null)
				return false;

			if (checkValue.length > 0)
				return true;
		} catch (e) {
		}
	}

	return false;
}

function getStoredLocalStorageValue(key) {
	if (localStorage) {
		try {
			return localStorage.getItem(key);
		} catch (e) {
		}
	}

	return null;
}

function getStoredLocalStorageValueForJson(key) {
	if (localStorage) {
		try {
			var value = localStorage.getItem(key);
			return JSON.parse(value);
		} catch (e) {
		}
	}

	return {};
}

function setStoreLocalStorage(key, value) {
	if (localStorage) {
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			alert('can\'t store in this browser\'s localStorage');
		}
	}
}

function setStoreLocalStorageForJson(key, value) {
	if (localStorage) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			alert('can\'t store in this browser\'s localStorage');
		}
	}
}

/*
 * -------------------------------------------------------------------------------------
 * cookie functions
 */

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime()
		+ (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="
		+ d.toUTCString();
	document.cookie = cname
		+ "="
		+ cvalue
		+ "; "
		+ expires;
}

function getCookie(cname) {
	var name = cname
		+ "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1);
		if (c.indexOf(name) == 0)
			return c.substring(name.length, c.length);
	}
	return "";
}