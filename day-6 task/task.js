let num = 7;  
if (num % 2 === 0) {
    console.log("The number is EVEN");
} else {
    console.log("The number is ODD");
}


console.log("\nNumbers from 1 to", num);
for (let i = 1; i <= num; i++) {
    console.log(i);
}

console.log("\nSquares from 1 to", num);
for (let i = 1; i <= num; i++) {
    console.log(i + "² =", i * i);
}