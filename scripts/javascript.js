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

/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/

/********************************************************/
/********************************************************/