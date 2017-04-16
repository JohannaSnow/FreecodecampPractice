Comment your JavaScript Code
----------------------------------------------
Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using // will tell JavaScript to ignore the remainder of the text on the current line:

// This is an in-line comment.
You can make a multi-line comment beginning with /* and ending with */:

/* This is a
   multi-line comment */
Best Practice
As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code—both for others and for your future self.
----------------------------------------------------------

Declare JavaScript Variables
-------------------------------------------

In computer science, data is anything that is meaningful to the computer. JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.

For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the seven data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var ourName;
creates a variable called ourName. In JavaScript we end statements with semicolons.

Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

Instructions
Use the var keyword to create a variable called myName.

var myName;


-----------------------------------------------------------

Storing Values with the Assignment Operator

-----------------------------------------------------
In JavaScript, you can store a value in a variable with the assignment operator.

myVariable = 5;

Assigns the Number value 5 to myVariable.

Assignment always goes from right to left. Everything to the right of the = operator is resolved before the value is assigned to the variable to the left of the operator.

myVar = 5;
myNum = myVar;
Assigns 5 to myVar and then resolves myVar to 5 again and assigns it to myNum.

Instructions
Assign the value 7 to variable a.

Assign the contents of a to variable b.

var a = 7;
var b = a;

--------------------------------------------------


Initializing Variables with the Assignment Operator
-------------------------------------------------------------------
It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0;

Creates a new variable called myVar and assigns it an initial value of 0.

Instructions
Define a variable a with var and initialize it to a value of 9.

var a = 9;

---------------------------------------------------

Understanding Uninitialized Variables
------------------------------------------------------------
When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

Instructions
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.



// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

------------------------------------------------------

Understanding Case Sensitivity in Variables
----------------------------------------------------
In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice
Write variable names in Javascript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsTooLong;
Instructions
Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.


// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


-----------------------------------

Add Two Numbers with JavaScript
--------------------------------------------
Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as addition operation when placed between two numbers.

Example

myVar = 5 + 10; // assigned 15
Instructions
Change the 0 so that sum will equal 20.

var sum = 10 + 10;

-------------------------------------

Subtract One Number from Another with JavaScript
-------------------------------------------------

We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

myVar = 12 - 6; // assigned 6
Instructions
Change the 0 so the difference is 12.

var difference = 45 - 33;

-----------------------------------------
Multiply Two Numbers with JavaScript
---------------------------------------
We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

myVar = 13 * 13; // assigned 169
Instructions
Change the 0 so that product will equal 80.

var product = 8 * 10;
---------------------------------------------

Divide One Number by Another with JavaScript
----------------------------------------------------
We can also divide one number by another.

JavaScript uses the / symbol for division.

Example

myVar = 16 / 2; // assigned 8
Instructions
Change the 0 so that the quotient is equal to 2.


var quotient = 66 / 33;

--------------------------------------------

Increment a Number with JavaScript
--------------------------------------------------
You can easily increment or add one to a variable with the ++ operator.

i++;

is the equivalent of

i = i + 1;

Note
The entire line becomes i++;, eliminating the need for the equal sign.

Instructions
Change the code to use the ++ operator on myVar.

Hint
Learn more about Arithmetic operators - Increment (++).


var myVar = 86;
x = ++myVar


-----------------------------------------------------

Decrement a Number with JavaScript
------------------------------------------------

You can easily decrement or decrease a variable by one with the -- operator.

i--;

is the equivalent of

i = i - 1;

Note
The entire line becomes i--;, eliminating the need for the equal sign.

Instructions
Change the code to use the -- operator on myVar.

var myVar = 11;

// Only change code below this line
x = --myVar;

--------------------------------------------
