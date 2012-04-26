var myLibrary = function () {
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
	var inIsANumFunction = lib.isANumber(stringChar);
	if (inIsANumFunction == true) {
		//console.log("The question is " + inIsANumFunction + ".");
		lengthSection: {
			var	calLength = stringChar.length;
			console.log("The total length is: " + calLength + ".");
		}
		allDashSigns: {
			var firstDash = stringChar.indexOf("-");
			var finalDash = stringChar.lastIndexOf("-");
			console.log("The first dash is on index: " + firstDash + ".");
		}
		firstSection: {
			var zipCode = stringChar.substring(0,firstDash);
			console.log("The first set of numbers (zipCode): " + zipCode);
		}
		SecondSection: {
			var afterfirstDashPos = firstDash + 1;
			var secondDigits = stringChar.substring(afterfirstDashPos,finalDash-1);
			console.log("The second set of numbers: " + secondDigits);
			console.log("The last dash is on the index: " + finalDash);
		}
		ThirdSection: {
			var storeSetNum = stringChar.substring(finalDash + 1 ,calLength - 1);
			console.log("The last set of numbers: " + storeSetNum);
		}
		
	} else {
		console.log("Does not follow a phone number pattern");

	}
	
	
};
exercise1();
	