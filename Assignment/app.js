// CHAPTER 31 To 34

// DATE METHODS

// 01

// document.write(new Date());

// 02

// var months = ['January', 'February', 'March',
//     'April', "May", 'June', 'July', "August", 'September',
//     'October', 'November', 'December'];

// document.write("<br/>" + "Current Month: ", months[new Date().getMonth()]);

// 03

// var days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// document.write("<br/>" + "Today is: ", days[new Date().getDay()]);

// // 04

// if (new Date().getDay() == 5 || new Date().getDay() == 6) {

//     document.write("<br />" + "It's Fun day");

// }

// 05

// if (new Date().getDate() < 16) {

//     document.write("<br />" + "First Fifteen Days of the Month");

// }

// else {
//     document.write("<br />" + "Last Days of the Month");
// }

// 06

// document.write("<br /> Current Date: ", new Date());
// document.write("<br /> Elapsed milliseconds since January 1, 1970: ", new Date().getTime());
// document.write("<br /> Elapsed minutes since January 1, 1970: ", (new Date().getTime()) / (1000 * 60 * 60));

// 07

// if (new Date().getHours() < 13) {

//     document.write("<br />" + "It's AM");

// }

// else {

//     document.write("<br />" + "It's PM");

// }

// 08

// document.write("<br />" + "Later Date: ", new Date(2020, 12, 31));

// 09

// var ramadan = new Date(2019, 6, 6).getTime();
// var today1 = new Date().getTime();

// document.write("<br />", Math.floor((today1 - ramadan) / (1000 * 60 * 60 * 24)), " days have passed since 1st Ramadan");

// 10

// var diff = new Date("Dec 5, 2015").getTime();
// var today = new Date().getTime();
// var result = (diff - today);
// document.write(result, " Seconds has passed since beginning of 2015");

// 11

// var date_now = new Date();
// document.write("Current Date : ", date_now);
// var one_hour = new Date();
// one_hour.setHours(date_now.getHours() - 1);
// document.write("<br>1 Hour Ago, It Was ", one_hour);

// 12

// var d = new Date();
// document.write("Current Date: "+d);
// d.setFullYear(d.getFullYear()-100);
// document.write("<br>100  years back, it was "+d);

// 13

// var userAge=new Date(prompt("Enter Your Age","May 24, 2000"));
// var current=new Date();
// var AgeCal=(current - userAge)/(1000 * 60 * 60 * 24 * 365.25);
// document.write("Your age is: "+Math.floor(AgeCal)+"<br>Your birthday Year is: "+userAge.getFullYear());

// 14

// var custName=prompt("Enter Customer Name: ");
// var month=prompt("Enter Current Month: ");
// var NoUnit= parseFloat(prompt("Enter Number of Unit: "));
// var chargeUnit=parseFloat(prompt("Enter the Charges per Unit: "));
// var netAmount= NoUnit * chargeUnit;
// var LateCharge= 350;
// var grossAmount= netAmount + LateCharge;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: "+custName+"<br>Month: "+month+"<br>Number of Unit: "+NoUnit+"<br>Charges per Unit: "+chargeUnit+"<br>");
// document.write("<brs><br><br>Net Amount Payable(with Due Date): "+netAmount+"<br>Late Payment SurCharge:"+LateCharge+"<br>Gross Amount Paybale (After Due Date): "+grossAmount);





// Chapter 35 To 38

// 01.

// function date(a) {
//     var a = new Date();
//     return (a);
// }
// var d = date();
// document.write(d);


// 02

// function flname(a, b) {
//     a = prompt("Enter Your First Name: ");
//     b = prompt("Enter Your Last Name: ");
//     var fullName = a + " " + b;
//     return (fullName);
// }
// var d = flname();
// document.write("Welcome! " + d)


// 03

// function add(a, b) {
//     a = parseInt(prompt("Enter Your First Number: "));
//     b = parseInt(prompt("Enter Your Last Number: "));
//     var sum = a + b;
//     document.write("The Sum of " + a + " and " + b + " is " + sum);
// }

// add();


// 04.

// function Calculator(a, b, op) {
//     a = parseInt(prompt("Enter Your First Number: "));
//     b = parseInt(prompt("Enter Your Last Number: "));
//     op = prompt("Enter Your Operator, (i.e. +, -, *, /, % ) What operation you want to perform: ");
//     if (op === "+") {
//         var sum = a + b;
//         document.write("The Sum of " + a + " and " + b + " is " + sum);
//     } else if (op === "-") {
//         var sub = a - b;
//         document.write("The Substraction of " + a + " and " + b + " is " + sub);
//     } else if (op === "*") {
//         var multi = a * b;
//         document.write("The Multiplication of " + a + " and " + b + " is " + multi);
//     } else if (op === "/") {
//         var div = a / b;
//         document.write("The Division of " + a + " and " + b + " is " + div);
//     } else if (op === "%") {
//         var rem = a % b;
//         document.write("The Reminder of " + a + " and " + b + " is " + rem);
//     } else {
//         document.write("Incorrect Character: ");
//     }
//     return 0;
// }
// Calculator();


// 05

// function square(a) {
//     a = parseInt(prompt("Enter a Number which print Square of that number: "));
//     var sqr = a * a;
//     document.write("The Square of " + a + " is " + sqr);
// }
// square();


// 06

// function Factorial(num) {
//     var num = parseInt(prompt("Enter a number Which print a Factorial"));
//     if (num === 0 || num === 1) {
//         return (1);
//     }
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
// }
// var a = Factorial();
// document.write("The Factorial of is " + a);


// 07

// function Counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// var start = parseInt(prompt("Enter a start number:"));
// var end = parseInt(prompt("Enter a end number:"));
// Counting(start, end);


// 08

// function calculateHypotensue(base, perp) {
//     function calculateSquare(num) {
//         return (num * num);
//     }
//     var hypo = calculateSquare(base) + calculateSquare(perp);
//     sqr = Math.sqrt(hypo);
//     return (hypo);
// }
// var base = parseInt(prompt("Enter a Base of right triangle: "));
// var perp = parseInt(prompt("Enter a Perpendicular of right triangle: "));
// var Right = calculateHypotensue(base, perp);
// document.write("The Hypotenuse of a Right Triangle: " + Right);


// 09

// function calculateArea(width, height) {
//     var area = width * height;
//     return (area);
// }
// width = 20;
// height = 10;
// document.write("The Width Area is: 20 <br> Height of Area is: 10 <br> Area of Rectangle is: " + calculateArea(width, height) + " square");


// 10

// function palindrome(word) {
//     var word = word.toLowerCase();
//     var reverse = word.split("").reverse().join('');
//     return (word === reverse);
// }
// var str = prompt("Enter a string Check it is Palindrome or not");
// document.write("Is the given word palindrome: " + palindrome(str));


// 11

// function FirstLetterUpper(str) {
//     var text = str.split(' ');
//     var temp = [];
//     for (var i = 0; i < text.length; i++) {
//         temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
//     }
//     return (temp.join(' '));
// }
// alert(FirstLetterUpper("the quick brown fox"));


// 12

// function longestWord(str) {
//     var string = str.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i <= string.length - 1; i++) {
//         if (longest < string[i].length) {
//             longest = string[i].length;
//             word = string[i];
//         }
//     }
//     return word;
// }
// alert(longestWord("Web Development Tutorial"));


// 13

// function CheckLetter(str, letter) {
//     var count = 0;
//     var string = str.split('');
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }
//     return (count);
// }
// var str = prompt("Enter a string");
// var letter = prompt("Enter a letter");
// document.write("This " + letter + " is present " + CheckLetter(str, letter) + " times");


// 14

// function calcCircumference(radius) {
//     var circumF = (2 * Math.PI * radius);

//     return (circumF);
// }
// function calcArea(rad) {
//     var area = (2 * Math.PI * rad);
//     return (area);
// }
// var radius = 4;
// var rad = 4;
// document.write("The Circumference of the Circle is: " + calcCircumference(radius) + "<br>The area of Circle is: " + calcArea(rad));




// Chapter 38 To 42

// 01

// function Power(a, b) {
//     var power = Math.pow(a, b);
//     return (power);

// }
// var x = 2;
// var y = 3;
// document.write("The Base is " + x + " and Power is " + y + " Answer is " + Power(x, y));

// 02

// var year = prompt("Enter a Year!");
// if (year % 400 === 0) {
//     document.write(year + " is Leap Year.")
// } else if (year % 4 === 0) {
//     document.write(year + " is Leap Year.")
// }
// else {
//     document.write(year + " is not a Leap Year.")
// }

// 03

// var a = parseInt(prompt("Enter The First side of the Triangle: "));
// var b = parseInt(prompt("Enter The Second side of the Triangle: "));
// var c = parseInt(prompt("Enter The Third side of the Triangle: "));
// function SegmentOfTriangle(a, b, c) {
//     var s = (a + b + c) / 2;
//     return (s);
// }
// function Area(a, b, c) {
//     var s = SegmentOfTriangle(a, b, c);
//     var area = (s * (s - a) * (s - b) * (s - c));
//     return (area);
// }
// document.write("Since a =" + a + " ,b = " + b + " and c = " + c + " are the sides of Triangle <br> The Area of Triangle is " + Area(a, b, c));

// 04

// var a = parseInt(prompt("Enter The First Subject Marks: "));
// var b = parseInt(prompt("Enter The Second Subject Marks: "));
// var c = parseInt(prompt("Enter The Third Subject Marks: "));
// var total = parseInt(prompt("Enter The Total Marks: "));
// function averageMarks(a, b, c) {
//     var av = (a + b + c) / 3;
//     return (av);
// }
// function percentageMarks(a, b, c, total) {
//     var per = ((a + b + c) / total) * 100;
//     return (per);
// }
// function Main() {
//     var aver = averageMarks(a, b, c);
//     var percen = Math.round(percentageMarks(a, b, c, total));

//     document.write("The Average Marks is " + aver + "<br>The Percentage is " + percen + " %");
// }
// Main();

//05

// var str1 = "Pakistan is beautiful country";
// var bool;
// function index(str1, str) {

//     for (var i = 0; i <= str1.length; i++) {
//         if (str1[i] === str) {
//             bool = 1;
//             document.write(i);
//         }
//     }
//     bool = 0;
//     if (bool = 0) {
//         document.write("The given word is not walid");
//     }
// }
// index("is");

//06

// var str = "Pakistan is beautiful country";
// function removeVowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     return (
//         str.split('').filter(
//             function (vol) {
//                 return (vowels.indexOf(vol.toLowerCase()) == -1);
//             }
//         ).join('')
//     );
// }

// document.write(removeVowel("Pakistan"));

// function findVowel() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     for (var i = 0; i <= str.length; i++) {
//         if ((str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'u') && (str[i + 1] === 'a' || str[i + 1] === 'e' || str[i + 1] === 'i' || str[i + 1] === 'u')) {
//             count++;
//         }

//     }
//     document.write("There are " + count + " occurences of two vowels in succession")
// }
// findVowel();

// 08

// function meters(km) {
//     return (km / 1000);
// }
// function feet(km) {
//     return (km / 3280.84);
// }
// function inches(km) {
//     return (km / 39370.1);
// }
// function centimeters(km) {
//     return (km / 100000);
// }
// var km = parseFloat(prompt("Enter The distance between two cities (in km)"));
// var m = meters(km);
// var f = feet(km);
// var i = inches(km);
// var c = centimeters(km);
// document.write("<br>The distance Between Two Cities in meter is " + m + " meters");
// document.write("<br>The distance Between Two Cities in Feet is " + f + " feet");
// document.write("<br>The distance Between Two Cities in Inches is " + i + " inches");
// document.write("<br>The distance Between Two Cities in Centimeters is " + c + " cm");

// 09

// function overTime() {
//     var over = 0;
//     var time = parseInt(prompt("Enter the Hours for an employee worked above 40 hours: "));
//     var i = 1;
//     while (i <= time) {
//         over = i * 12;
//         i++;
//     }
//     document.write("Over time of Employee is " + over)
// }
// overTime();

// 10

// var amount = parseFloat(prompt("How many Amount you are going to withdraw:"));
// function withdraw(amount) {
//     var hundred = (amount / 100);
//     var fifty = (amount % 100) / 50;
//     var ten = ((amount % 100) % 50) / 10;
//     var remain = (((amount % 100) % 50) % 10);
//     document.write("<br>You will have " + Math.floor(hundred) + " hundred notes " + Math.floor(fifty) + " Fifty notes " + Math.floor(ten) + " ten notes");
// }
// withdraw(amount);

