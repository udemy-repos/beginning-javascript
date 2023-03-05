//console.log("test ...");

let atBats = 300;
let hits = 65;
let singles = 50;
let doubles = 5;
let triples = 3;
let homeruns = 7;
let walks = 22;

let battingAverage = hits / (atBats - walks);
let onBasePercentage = (hits + walks) / atBats;
let totalBases = singles + (doubles * 2) + (triples * 3) + (homeruns * 4);


document.getElementById("output").innerHTML = ("Batting Average: " + battingAverage) +
("</br>On Base Percentage: " + onBasePercentage) +
("</br>Total Bases: " + totalBases);


