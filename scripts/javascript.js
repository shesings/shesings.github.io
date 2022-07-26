/********************************************************/
/********************************************************/

/* Comment your JavaScript code:
    there are two ways to write comments in JavaScript
    either in-line comment or multi-line comment
*/

// this is an in-line comment

/* this is 
    a 
    multi-line
    comment as we have seen before */

/********************************************************/
/********************************************************/

// Declare JavaScript Variable

/*
In CS, data is anything that is meaningful to the computer

JavaScript has 8 different types of data types
- undefined
- null
- boolean
- string
- symbol
- bigint
- number
- object

So for example, computers need to be able to distinguish between
the number 12 and strings such as "12" or "dog" or "hello 9 students"
(strings are a collection of characters)

Why is this important? Because computers can perform mathematical 
operations on numbers but not on strings

so VARIABLES allow computers to store and manipulate data in a dynamic 
fashion
they do this by using a "label" to point to the data rather than using the data itself
so any of the 8 data types may be stored in a variable

variables are similar to the x and y variables you have used in your math courses
    they simply represent the data we want to refer to 

so let's tell JavaScript to create or "declare" a variable by putting the keyword var:
*/

var myName;

/* 

So notice the naming convention, we are using camel case, where it is first word is lower case
and second work is upper case

You can have multiple different variables:
*/

var MYVAR;
var MyVar;
var myvar;

// but for best practice - use camel case for clarity

/*
this creates a variable called ourName
in JS we end statements with semicolons
variable names can have: 
- numbers
- letters
- $
- _ (underscore)
- CANNOT HAVE: spaces or start with a number
*/

/********************************************************/
/********************************************************/

// Storing Values with the Assignment Operator

/* 

In JS you can store a value in a variable using the "assignment operator" =

Let's assign the number value 47 to the variable

Also if there are any calculations to the right of the operator, 
those are also performed before the value is assignment to the variable on the left of the oeprator

*/

var a;
a = 47;

// now any time a is called, the program will treat it as the number 47

/********************************************************/
/********************************************************/

// Assigning the Value of One Variable to Another

/* 

so after a value is assigned to a variable
we can assignment the value of that variable to another variable if we wanted to
also using the ASSIGNMENT operator

*/

var a;
a = 47;
var b;
b = a;
console.log("b is equal to: " + b);
/********************************************************/
/********************************************************/

// Initializing Variables with the Assignment Operator

/* 

it is common to initialize a variable to an initial value in the same line

*/

var a = 0;

/*
This creates a new variable and assigns it an initial value of 0
*/

/********************************************************/
/********************************************************/

// Declare String Variables

var myFirstName = "Sheetal";
var myLastName = "Singh"

/********************************************************/
/********************************************************/

// Understanding Uninitialized Variables

// when JS variables are declared, they have initial value of undefined

var a; // var a = 5;
var b; // var b = 10;
var c; // var c = "I am a";

// not working example
a = a + 1;
b = b + 5;
c = c + " String!";

// NaN = Not a Number
// concatenate string with undefined --> string undefined

// TODO: in order to fix this --> define a, b, and c


/********************************************************/
/********************************************************/

// Difference between var and let keywords

var camper = "Sheetal";
var camper = "Asher";
console.log(camper);

// one of the biggest problems with declaring variables with var,
// is that you can easily overwrite the variable declaration

// notice that camper is now "Asher"

// in order to solve this potential problem...
// let
// now if we use let...

let student = "Sheetal";
//let student = "Asher"; // TODO: uncomment this!
//console.log("let the student be: " + student);
//student = "Asher";

// error is shown in VSC and in the console

/********************************************************/
/********************************************************/

// Declare a Read-Only Variable with the const Keyword

// const has all the features of let, with a bonus, variables 
// declared using const are read-only

// constant value = once a variable is assignment, it cannot be reassigned

const FAV_PET = "Cats";
//FAV_PET = "Dogs"; // error will appear in dev console

// helps so you don't accidentally try to reassign a variable that needs to be constant
// note - it is helpful and common practice for consts to be all UPPERCASE

/********************************************************/
/********************************************************/

// Add, Subtract, Multiply, Divide

// Number is a data type in JavaScript = represents numeric data

const SUM = 10 + 10;
const DIFFERENCE = 45 - 20;
const QUOTIENT = 66 / 33;
const PRODUCT = 8 * 10;

/********************************************************/
/********************************************************/

// Increment/Decrement a Number with JavaScript

let newVar = 47;
newVar = newVar + 1;
// this is equivalent to
newVar++;

newVar = newVar - 1;
newVar--;

/********************************************************/
/********************************************************/

// Compound Assignment With Augmented Addition

/* In programming, we can do mathematical operation and assignment in one step
    Remember = everything on the right of the = is evaluated first
*/

let v = 1;
v += 5;
console.log(v);

// Compound Assignment With Augmented Subtraction

let s = 10;
s -= 5;
console.log(s);

// Compound Assignment With Augmented Multiplication

let m = 5;
m *= 2;
console.log(m);

// Compound Assignment With Augmented Division

let d = 10;
d /= 2;
console.log(d);

/********************************************************/
/********************************************************/

// Understanding Boolean Values (go to word doc)

/********************************************************/
/********************************************************/

// Examples for if
var n = 44;
if (n >= 45) {
    console.log("This number is greater than or equal to 45");
} 
console.log("this number is less than 45");

// if else

var n = 23;
if (n == 22) {
    console.log("This number is 22");
} else {
    console.log("This number is not 22");
}


/********************************************************/
/********************************************************/


// Pop up Box = for alert
// alert("I am an alert box!"); 
// notice only the ok option


function myFunction() {
  alert("I am an alert box!");
}



// Confirm  box
// window.confirm("Confirm if everything is correct?");
// notice it had cancel or ok option


function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}



// Prompt Box
//window.prompt("sometext", "default text");

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }



/********************************************************/
/********************************************************/

// For Loop

var count = 10;
console.log("Starting Loop");
         
for(count = 0; count < 10; count++) {
    console.log("Current Count : " + count);
}         
console.log("Loop stopped!");

/********************************************************/
/********************************************************/

// While Loop

var i = 0;
console.log("Starting Loop");
while (i < 10) {
    console.log("The number is " + i);
    i++;
}


/********************************************************/
/********************************************************/

// Do While Loop

var i = 10;
console.log("Starting Loop");
do {
console.log("The number is " + i);
i--;
} while (i > 0);

/********************************************************/
/********************************************************/

// Arrays
// this is the constructor

var fruits = ["apple", "orange", "blueberry", "kiwi", "watermelon"];
fruits[0] = "mango"; // you can change the item even after declaration
console.log(fruits[0] + " is the first fruit");
console.log(fruits[1] + " is the second fruit");
console.log(fruits[2] + " is the third fruit");
console.log(fruits[3] + " is the fourth fruit");
console.log(fruits[4] + " is the fifth fruit");

// number is the index
var i;
for(i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let text = "<ul>";
fruits.forEach(thisFunction);
text += "</ul>";
document.getElementById("fruitText").innerHTML = text;

function thisFunction(value) {
  text += "<li>" + value + "</li>";
}
/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/