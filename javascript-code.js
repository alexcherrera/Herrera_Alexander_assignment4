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
		var a= word.split(" ");
		var str= "";
		for(var i=0; i<a.length; i++) {
			str+= a[i].charAt(0).toUpperCase();
			if(a.length>0) 
				str+=a[i].substring(1);
				console.log(str);
			if (i!=a.length) 
				str+=" ";
		}
		return str;
	};	
	var separator = function (list,sep1,sep2) {
		var old ="";
		var n = list;
			while(n != old) {
		 		old = n;
		 		n = n.replace(sep1,sep2);
		 	}	
		 	return n;
	};
	return {
		"isANumber": isANumber,
		"isEmail": isEmail,
		"isURL": isURL,
		"titleCase": titleCase,
		"separator": separator
	};
};
var exercise1 = function () {
	lib = myLibrary();
	var stringChar = prompt("Input phone number");
	var inIsANum = lib.isANumber(stringChar);
	if (inIsANum == true) {
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
	var callIsURL = lib.isURL(saveURL);
		console.log(callIsURL);
		if (callIsURL == true) {
			console.log("This is correct of the URL");
		} else {
			console.log("Must pick between the two.");
		}
};
exercise3();
var exercise4 = function () {
	var lib = myLibrary();
	var storedString = "good morning laura";
	var callTitleCase = lib.titleCase(storedString);
};
exercise4();
var exercise5 = function () {
	var lib = myLibrary();
	var stringList = "a,b,c";
	var firstSign = prompt("What sign to change?");
	var secondSign = prompt("To what sign?");
	var callSeparator = lib.separator(stringList,firstSign,secondSign);
	console.log(callSeparator);
};
exercise5();






