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
	return {
		"isANumber": isANumber,
		"isEmail": isEmail,
		"isURL": isURL
	};
};
var exercise1 = function () {
	var lib = myLibrary();
	var stringChar = prompt("Input phone number");
	var inIsANumFunction = lib.isANumber(stringChar);
	if (inIsANumFunction == true) {
		console.log("Does a string follow a 123-456-7890 patter\nlike a phone number? The answer is " + inIsANumFunction + ".");
		
	} else {
		console.log("Does not follow a phone number pattern.");

	}	
};
exercise1();
var exercise2 = function() {
	var lib = myLibrary();
	var stringEmail = prompt("Input email address");
	var callIsEmail = lib.isEmail(stringEmail);
		if (callIsEmail == true) {
			console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? The answer is " + callIsEmail + ".");
		} else {
			console.log("Does not follow an email pattern.");
		}
};
exercise2();
var exercise3 = function () {
	var lib = myLibrary();
	var saveURL = prompt("Does it start with http: or https:?");
	lib.isURL(saveURL);
		console.log(lib.isURL(saveURL));
		if (lib.isURL(saveURL) == true) {
			console.log("This is correct of the URL");
		} else {
			console.log("Must pick between the two.");
		}
};
exercise3();
