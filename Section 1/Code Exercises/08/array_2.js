console.log("Test...")
// Using a loop, have the user enter a set of integers using prompt(). Add each entry to an array called myIntegers. Once
//the user is done entering integers have them enter ‘xxx.’
//When the user has completed their data entry, provide the total, average and product (result of multiplication) of the
//integers

let myIntegers = [];
let total = 0;
let sum = 0;
let average = 0;
let mult = 0;

userInput = prompt("");
//myIntegers.push(userInput);
while (userInput != "xxx") {
    myIntegers.push(userInput);
    //console.log(myIntegers);
    userInput = prompt("");
}
for (let i = 0; i < myIntegers.length; i++) {
    total = total + parseInt(myIntegers[i]);
    average = total/parseInt(myIntegers.length);
    mult = total * parseInt(myIntegers[i]);
}
console.log(myIntegers);
console.log("Sum: " + total);
console.log("Avarege: " + average);
console.log("Multiplication: " + mult);

// let grades = [75,88,91,100,67,79,85,81,79];
// grades.push(92);
// grades.push(90);
// console.log(grades);
// let total = 0;
// for (let x = 0; x < grades.length; x++) {
//     total = total + grades[x];
// }
// document.getElementById("output").innerHTML +=
// Math.round(total/grades.length);