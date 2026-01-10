// Notes:

/*
1.Primitive DataTypes (call-by-value): There are 7 types.
    Number, String ,null, boolean, undefined, symbol, bigInt

2. Non-Primitive DataTypes (call - by - reference):
    Array, Objects, Functions

Is JS statically or dynamically typed?
    Dynamically-typed languages are those (like JavaScript) where the interpreter assigns 
    variables a type at runtime based on the variable's value at the time.


*/

const heroes = ["salman", "amir", "dog"]; // Array Declaration

const myObj = {
    name : "xyz",
    age : 25,
    branch : "CSE"
}; //Object Declaration

const myFunction = function(){
    console.log("Hello World");
} // function declaration and its typeof "function"

/*
Typeof:
    1. undefined = "undefined"
    2. null = "object"
    3. boolean = "boolean"
    4. number = "number"
    5. string  = "string"
    6. object = "object"
    7. function = "function"
*/