var myLibrary = function () {//Better understand functions and calling them. 
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
		var b1 = false;
		for (var e = 0; e < email.length; e++) {//Better understand now for loops and if statements.
			if (email.charAt(e) == '@' && e != 0 && !b1) {
				b1 = true;
			
			}
			if (email.charAt(e) == '.' && b1 && e != email.length -1) {
				return true;
			}
		}
		return false;		
	};
	var isURL = function (url) {
		return url.indexOf("http:") == 0 || url.indexOf("https:") == 0;
	};
	var titleCase = function (word) {
		var a = word.split(" ");
		var str = "";
		for (var i = 0; i < a.length; i++) {
			str += a[i].charAt(0).toUpperCase();
			if (a.length > 0) 
				str += a[i].substring(1);
				console.log(str);
			if (i != a.length) 
				str += " ";
		}
		return str;
	};	
	var separator = function (list,sep1,sep2) {//Better understand sending and receiving arugments and parameters.
		var old ="";
		var n = list;
			while (n != old) {
		 		old = n;
		 		n = n.replace(sep1,sep2);
		 	}	
		 	return n;
	};
	 var format = function (num,places) {
    	var num = parseFloat(num);
		return num.toFixed(places);
	};	
	var fuzzyNum = function(num1, num2, pct) {
        return (num1>= num2*(1-pct/100)) && (num1<=num2*(1+pct/100));
	};
	/*var numDays = function () {

	};*/
	var actualNumber = function (convert) {
		return parseInt(convert,10);
	};	
	var smallValueArray = function (array, num) {
		var min=-1;
			for(var i=0; i<array.length; i++)
			{
				if(array[i]>num)
					if(min==-1)
					 min=array[i];
					else
					 min=Math.min(array[i],min);
			}
			return min;
	};	
	var totalValueArray = function (array) {
		var total=0;
		for(var i=0; i<array.length; i++)
		{
			if(typeof array[i]=="number")
				total+=array[i];
		}
		return total;
	};
	var arrayObj = function () {

	};

	return {//Returning objects and or values, I had trouble figuring out but now understand it more.
		"isANumber": isANumber,
		"isEmail": isEmail,
		"isURL": isURL,
		"titleCase": titleCase,
		"separator": separator,
		"format": format,
		"fuzzyNum": fuzzyNum,
		//"numDays": numDays,
		"actualNumber": actualNumber,
		"smallValueArray": smallValueArray,
		"totalValueArray": totalValueArray
		//"arrayObj": arrayObj
	};
};
var exercise1 = function () {
	var lib = myLibrary();
	var stringChar = prompt("Input phone number");
	var inIsANum = lib.isANumber(stringChar);
		if (inIsANum == true) {
			console.log("Does a string follow a 123-456-7890 patter\nlike a phone number? The answer is " + inIsANum + ".");
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
var exercise6 = function () {
	var lib = myLibrary();
	var inputNum = prompt("Input number:");
	var inputPlace = prompt("What decimal place:");
	var callFormat = lib.format(inputNum,inputPlace);
	console.log(callFormat);
};
exercise6();
var exercise7 = function () {
	var lib = myLibrary();
	var firstNum = prompt("Input first number:");
	var secondNum = prompt("Input second number:");
	var percent = prompt("Input percent:");
	var callFuzzyNum = lib.fuzzyNum(firstNum,secondNum,percent);
	console.log(callFuzzyNum);

};
exercise7();
/*var exercise8 = function () {
	
};
exercise8();*/
var exercise9 = function () {
	var lib = myLibrary();
	var stringNum = "42";
	var callActualNumber = lib.actualNumber(stringNum);
	console.log(callActualNumber);
};
exercise9();
var exercise10 = function() {
	var lib = myLibrary();
	var inArrayValue = [5,8,14];
	var valueGiven= prompt("Input value:");
	var callSmallValueArray = lib.smallValueArray(inArrayValue,valueGiven);
	console.log(callSmallValueArray);
};
exercise10();
var exercise11 = function() {
	var lib = myLibrary();
	var arrayNums = [7,4,"hello",9];
	var callTotalValueArray = lib.totalValueArray(arrayNums);
	console.log(callTotalValueArray);
};
exercise11();
/*var exercise12 = function() {
};
exercise12();*/

