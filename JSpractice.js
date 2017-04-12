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
