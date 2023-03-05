
let amount = prompt("How much did the member spend this month in additional charges?");
console.log("amount: " + amount);


const mFee = 500;
let subTotal = mFee + parseInt(amount);
let discount = "";
let finalFeeBill = "";
let tax = "";
let grandTotal = "";

if(amount < 250 ){
    discount = 6.25;
    console.log("tax 6.25%");
}else if (amount <= 500  ){
    discount = 10;
    console.log("tax 10%");
}else if (amount <= 1000  ){
    discount = 12.5;
    console.log("tax 12.5%");
}else if (amount <= 2000  ){
    discount = 15;
    console.log("tax 15%");
}else{
    discount = 20;
    console.log("tax 20%");
}
finalFeeBill = subTotal - (subTotal * discount / 100);
tax = finalFeeBill * 6.25 / 100 ;
grandTotal = finalFeeBill + tax;

document.getElementById("output").innerHTML = 
("Membership Fee " + "<b> $" + mFee + "</b>" +
"</br>Additional Fees " + "<b> $" + amount + "</b>" +
"</br></br>Subtotal " + "<b> $" + subTotal + "</b>" +
"</br>Discount " + "<b> " + discount + "%</b>" +
"</br></br>Final Fee Bill " + "<b> $" + finalFeeBill + "</b>" +
"</br>Tax " + "<b> $" + tax.toFixed(2) + "</b>" +
"</br></br>Grand Total " + "<b> $" + grandTotal.toFixed(2) + "</b>" 
);