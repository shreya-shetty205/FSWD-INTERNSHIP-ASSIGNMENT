let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

if (operator === "+") {
    console.log("Result:", num1 + num2);
} 
else if (operator === "-") {
    console.log("Result:", num1 - num2);
} 
else if (operator === "*") {
    console.log("Result:", num1 * num2);
} 
else if (operator === "/") {
    console.log("Result:", num1 / num2);
} 
else {
    console.log("Invalid Operator");
}
