console.log("test ...")

//Sunday, Monday, Tuesday, Wednesday, Thursday, Friday and Saturday
let opition = prompt("Enter a day of the week in numerical form where 1 is Sunday and 7 is Saturday")
switch (opition) {
    case "1":
        console.log("Sunday")
        break;
    case "2":
        console.log("Monday")
        break;
    case "3":
        console.log("Tuesday")
        break;
    case "4":
        console.log("Wednesday")
        break;
    case "5":
        console.log("Thursday")
        break;
    case "6":
        console.log("Friday")
        break;
    case "7":
        console.log("Saturday")
        break;

    default:
        console.log("Invalid option.")
        break;
}


document.getElementById("output").innerHTML = ("<p></p>" +
                                                
                                                );