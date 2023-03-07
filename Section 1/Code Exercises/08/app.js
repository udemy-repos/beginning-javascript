let students = [];

let teacher = new Array();

students = ["sp01",
            "sp02",
            "sp03",
            "sp04",
            "sp05",
            "sp06",
                ];
//document.getElementById("output").innerHTML = (students[0]);
students.pop();
console.log(students);
console.log(students.length)

let loopCounter = 0;
while (loopCounter < students.length) {
    document.getElementById("output").innerHTML +=
    students[loopCounter] + "</br>";
    loopCounter++;
}

let grades = [75,88,91,100,67,79,85,81,79];
grades.push(92);
grades.push(90);
console.log(grades);
let total = 0;
for (let x = 0; x < grades.length; x++) {
    total = total + grades[x];
}
document.getElementById("output").innerHTML +=
Math.round(total/grades.length);