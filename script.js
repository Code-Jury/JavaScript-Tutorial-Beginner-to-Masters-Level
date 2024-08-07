document.write("This Javascript app was Built by Godswill Iwueke Sopuruchi: Year June 2024")
//alert("Codejury Welcomes You (*_*) ")
function myFirstFunction(f){
    return (5/9) * (f-32);
}
//how to create & use variables
console.log("VARIABLES: You cannot re-declare a variable declared with let or const.")
console.log("let carName = Ford or let carName; It's a good programming practice to declare all variables at the beginning of a script.")
console.log('one statement, many variables ==>  let person ="code jury", carName = "Toyota", price = $1200;')
console.log("In these examples, using var or let will produce the same result. use var, let or const to create variables. e.g")
console.log("var x; var y; x=56; y = 890;")
let a = 5; b = 40; c = b / a;
console.log("let a = 5; b = 40; c = b / a; or let a, b, c;  then  a = 5; b = 40; c = b / a;")
console.log("the answerer is " + c)
console.log("JavaScript Identifiers / Names must begin with:A letter (A-Z or a-z)A dollar sign ($) Or an underscore (_)...All JavaScript identifiers are case sensitive. ")
console.log(" Hyphens are not allowed in JavaScript. They are reserved for subtractions.")
console.log("Comments can be usd to prevent code execution. //single line comments or /* Block comments: often used for formal documentation.*/")
console.log('let x = "5" + 2 + 3; string and number concatenation')
let x = "5" + 2 + 3;
console.log(x)
console.log("function myFirstFunction(f) { return (5/9) * (f-32); }")
console.log("console.log(myFirstFunction(9000))")
console.log(myFirstFunction(9000))
function Js_Assignment_Operators(){
    let a1 = 45.6
    let a2 = 3.6
     a1 +=a2
}
function DataTypes(){
    // Numbers:
    let length = 16;
    let weight = 7.5;

    // Strings:
    let color = "Yellow";
    let lastName = "Johnson";

    // Booleans
    let xx1 = true;
    let y2 = false;

    // Object:
    const person = {firstName:"John", lastName:"Doe"};

    // Array object:
    const cars = ["Saab", "Volvo", "BMW"];

    // Date object:
    const date = new Date("2022-03-25");
}