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

	return {
		"isANumber": isANumber,
		"isEmail": isEmail
	};
};
var exercise1 = function () {
	var lib = myLibrary();
	 stringChar = prompt("Input phone number");
	var inIsANumFunction = lib.isANumber(stringChar);
	if (inIsANumFunction == true) {
		console.log("Does a string follow a 123-456-7890 patter\nlike a phone number? The answer is " + inIsANumFunction + ".");
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
			console.log("The first set of numbers (zipCode): " + zipCode + ".");
		}
		SecondSection: {
			var afterfirstDashPos = firstDash + 1;
			var secondDigits = stringChar.substring(afterfirstDashPos,finalDash-1);
			console.log("The second set of numbers: " + secondDigits + ".");
			console.log("The last dash is on the index: " + finalDash + ".");
		}
		ThirdSection: {
			var storeSetNum = stringChar.substring(finalDash + 1 ,calLength - 1);
			console.log("The last set of numbers: " + storeSetNum + ".\n");
		}
		
	} else {
		console.log("Does not follow a phone number pattern.");

	}	
};
exercise1();
var exercise2 = function() {
	var lib = myLibrary();
	 stringEmail = prompt("Input email address");
	 var callIsEmail = lib.isEmail(stringEmail);
	 if (callIsEmail == true) {
		console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? The answer is " + callIsEmail + ".");
		
	} else {
		console.log("Does not follow an email pattern.");

	}
};
exercise2();
