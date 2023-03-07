console.log("test...");

// 1)Code an array that holds the name of your favorite bands or artists. You can name the array artists.
//Using the prompt() command, ask the user to name their favorite band. If the name of the band entered
//is on the array, output, “That’s one of my favorites, too.” If not, output “Sorry, not a favorite of mine.”



let artists = ["Vast", "Nirvana", "Deftones", "Cypress Hill"];

let userBand = prompt("What is your favorite band?");

for (let index = 0; index < artists.length; index++) {
    if (artists[index] === userBand) {
        console.log(artists[index] === userBand);
        document.getElementById("output").innerHTML = (userBand +
            " That’s one of my favorites, too.");
    }
    console.log(artists[index] === userBand);
    document.getElementById("output").innerHTML = (userBand +
        " Sorry, not a favorite of mine.");
}


