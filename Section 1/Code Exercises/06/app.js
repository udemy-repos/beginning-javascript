console.log("test ...")

let x = 0;

console.log("First Example")
while (x <= 100) {
    console.log(x);
    x = x + 10;
}

let y = 100;

console.log("Second Example");
while (y > 0) {
    if(y % 2 !== 0 ){
        console.log(y)  
    }
    y--;
}

console.log("Third Example");

a = "*"
count = 0;
do {
    console.log(a)
    a =  a + "*";
    count++;
    // console.log(count);
} while (count <=10);