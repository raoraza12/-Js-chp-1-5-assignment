//   ------------------ Chp No 1 -------------------\\

alert("Error! please enter a valid password");

alert("Welcome to js land", "Happy coding");

alert("Happy Coding \n Prevent this message from creating additional dialogues");

alert( "Hello... I can run JS through my web browser's console");




 
// --------------------- Chp No 2 -------------------\\



var userName;

var myName = "Rao Raza";
console.log(myName)

var greeting = "Hello World" 
alert(greeting);

var stBio= "Jhone Doe", age = "16 years old", course = "Certified Mobile Application Development"   
alert(stBio);
alert(age);
alert(course);                                                                                                 

var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(pizza);

var email = "My email address is " + "raoraza5417@gmail.com";
alert(email);

var book = "I am try to learn from the book " + "A smarter way to learn JavaScript";
alert(book);

document.write("Yah! I can write HTML content through JavaScript");



// ----------------------------- Chp No 3 -----------------------------\\



var age = "I am 16 years old";
alert(age);

var visit ="You have visited this website 9 times";
alert(visit);

var birthyear = "My birthyear is 2008";
document.write("<br>");
document.write("birthyear");
document.write("<br>");
document.write("Datatype of my declared variable is number");
document.write("<br>");
document.write("<br>");



// -------------------- Chp No 4 -------------------- \\

var visitorName =  "John Doe"
var product = "5 T-shirt"
var Quantity = "(s) on XYZ Clothing store"
document.write(visitorName + " ordered " + product + Quantity)



document.write("<h1>Rules for naming JS variables</h1>")
var sign =  "Variable names can only contain ,numbers, $ and _ . For example $my_1stVariable"
document.write(sign);
document.write("<br>")

var letter = "Variables must begin with a letter, $ or _ . For example $name, _name or name"
document.write(letter);
document.write("<br>")

var caseSensitive = "Variable names are case sensitive "
document.write(caseSensitive);
document.write("<br>")

document.write("Variable names should not be JS keywords");
document.write("<br>")
document.write("<br>")



// ----------------------- Chp No 5 ------------------------ \\


var num1 = 5 ;
var num2 = 6 ;
var sumNumber = num1 + num2 ;
document.write("Sum of" + num1 + "and" + num2 + "is : "  + sumNumber);
document.write("<br>");
document.write("<br>");


var num1 = 5 ;
var num2 = 6 ;
var sumNumber = num1 - num2;
document.write("Subtraction of" + num1 + "and" + num2 + "is : "  + sumNumber);
document.write("<br>");
document.write("<br>");


var num1 = 5 ;
var num2 = 6 ;
var sumNumber = num1 * num2;
document.write("Multipication of" + num1 + "and" + num2 + "is : "  + sumNumber);
document.write("<br>");
document.write("<br>");


var num1 = 5 ;
var num2 = 6 ;
var sumNumber = num1 / num2;
document.write("Division of" + num1 + "and" + num2 + "is : "  + sumNumber);
document.write("<br>");
document.write("<br>");


var num1 = 5 ;
var num2 = 6 ;
var sumNumber = num1 % num2;
document.write("Modulus of" + num1 + "and" + num2 + "is : "  + sumNumber);
document.write("<br>");
document.write("<br>");


var num = "undefined" ;
var math = "Value after declaration is : " + num ;
document.write(math);
document.write("<br>");
document.write("<br>");



var initial = 5 ;
var Value = ("initial value : " + initial) ;
document.write(Value);
document.write("<br>");
document.write("<br>");


var increment = ++initial; 
document.write("Value after increment is : " + increment);
document.write("<br>");
document.write("<br>");



var addition = initial + 7;
document.write("Value after addition is : " + addition);
document.write("<br>");
document.write("<br>");


var decrement = --addition;
document.write("Value after decrement is : " + decrement);
document.write("<br>");
document.write("<br>");


var output = decrement % 3 ;
document.write("The reminder is" + output);
document.write("<br>");
document.write("<br>");
document.write("<br>");



var ticketPRK = 500;
var QuantityOfTicket = 6;
document.write("Total cost to buy" + QuantityOfTicket + "tickets to a movie is :" + (ticketPRK * QuantityOfTicket ));
document.write("<br>");
document.write("<br>");


var num = 5;
var table = "<h1> Table of " + num + "</h1>" ;

table += num + " x 1 = " + ( num * 1 ) + "<br>";
table += num + " x 2 = " + ( num * 2 ) + "<br>";
table += num + " x 3 = " + ( num * 3 ) + "<br>";
table += num + " x 4 = " + ( num * 4 ) + "<br>";
table += num + " x 5 = " + ( num * 5 ) + "<br>";
table += num + " x 6 = " + ( num * 6 ) + "<br>";
table += num + " x 7 = " + ( num * 7 ) + "<br>";
table += num + " x 8 = " + ( num * 8 ) + "<br>";
table += num + " x 9 = " + ( num * 9 ) + "<br>";
table += num + " x 10 = " + ( num * 10 ) + "<br>";
document.write(table);
document.write("<br>");


document.write("<h1> Shopping Cart </h1>");     
var itemA = 3 ;
var priceA = 600 ;
var totalpriceitemA = itemA * priceA
document.write("Price of itemA is" + totalpriceitemA);
document.write("<br>");


document.write("Quantity of itemA is" + itemA);
document.write("<br>");
document.write("<br>");



var itemB = 6 ;
var priceB = 800 ;
var totalpriceitemB = itemB * priceB ;
document.write("Price of itemB is" + totalpriceitemB);
document.write("<br>");


document.write("Quantity of itemB is" + itemB);
document.write("<br>");
document.write("<br>");



var shipping = "Shipping charges 100";
var totalCost = totalpriceitemA + totalpriceitemB + 100 ;
document.write(" Total cost of your order is" + totalCost );
document.write("<br>");
document.write("<br>");


document.write("<h1>Marksheet </h1> ");

var totalmarks = 980 ;
document.write("Total Marks: " + totalmarks );
document.write("<br>");

var obtainedmarks = 840 ;
document.write("obtained marks:" + obtainedmarks );
document.write("<br>");

var percentage = obtainedmarks * 100 /totalmarks ;
document.write("percentage: " + percentage );


document.write("<h1>Currency in PKR ");


var dollar = 10 ;
var dollarPRK = 104.08 ;
var riyal = 25 ;
var riyalPRK = 28 ;


var dollarConvertToPak = dollar * dollarPRK
var riyalConvertToPak = riyal * riyalPRK

var totalCurrencyInPak = dollarConvertToPak + riyalConvertToPak; 
document.write("Total currency in PKR: " + totalCurrencyInPak);
document.write("<br>")
document.write("<br>")


var arithmetic = (((10 + 5) * 10) / 2)
document.write(" Arithmetic Expression " + arithmetic );
document.write("<br>")
document.write("<br>")


document.write("<h1>Age Calculator</h1>"); 
var currentYear = 2016;
document.write("Current Year " + currentYear)
document.write("<br>")
var  birthYear = 1992;
document.write("Birth Year " + birthYear)
document.write("<br>")
var yourAge = currentYear - birthYear;
document.write("Your Age is " + yourAge);
document.write("<br>");
document.write("<br>");


document.write("<h1>The Lifetime Supply Calculator</h1>"); 
var favoriteSnack = "chocolate chip"
document.write("Favorite Snack: " + favoriteSnack);
document.write("<br>");

var currentAge = 15
document.write("Current Age: " + currentAge);
document.write("<br>");

var maximumAge = 65;
document.write("Estimated Maximum Age: " + maximumAge);
document.write("<br>");

document.write("Amount of snacks per day: " + 3);
document.write("<br>");

document.write("You will need 150 chocolate chip to last you until the ripe old age of " + maximumAge);
document.write("<br>");
document.write("<br>");




