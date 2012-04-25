var myLibrary = function (string) {
	var isANumber = function (number) {
		if(number.length != 12) {
			return false;
		}
		if(number.charAt(3) != ('-') || number.charAt(7) != ('-')) {
			return false;
		}
		for(var i = 0; i < number.length; i++){
			if(number.charAt(i) < '0' && number.charAt(i) > '9' && i != 3 && i != 7){
				return false;
			}
		}
		return true;
	};
	var isEmail = function (email) {
		b1 = false;
		for (var e = 0; e < email.length; e++) {
			if (email.charAt(e) == '@' && e != 0 && !b1) {
				b1 = true;
			
			}
			if (email.charAt(e) == '.' && b1 && e != email.length-1) {
				return true;
			}
		}
		return false;		
	};

	var isURL = function (url) {
		return url.indexOf("http:")==0 || url.indexOf("https:")==0;
	};
	var titleCase = function (word) {
		var text = word.split(" ");
		text.toUpperCase();
	};
	var actualNumber = function (convert) {
		return parseInt(convert);
	};	
	var smallValueArray = function (search,digit) {
		for (var a = 0; a < search.length; a++) {
			if (parseInt(search[a]) > digit) {
				return search[a];
			} else {
				return false;
			}
		}
	};	
	var totalValueArray = function (find) {
		for (var a = 0; a < find.length; a++){
			var totalNum = find[a];
		}
		return totalNum;
	};
	return {
		"string": string,
		"isANumber": isANumber,
		"isEmail": isEmail,
		"isURL": isURL,
		"titleCase": titleCase,
		"actualNumber": actualNumber,
		"smallValueArray": smallValueArray,
		"totalValueArray": totalValueArray
	};
};

var exercise1 = function () {
	var lib = myLibrary();
	stringChar = prompt("Input character");
	lib.isANumber(stringChar);
	if (lib.isANumber(stringChar) == true) {
		console.log("works");
	}
	
	
}
exercise1();
	