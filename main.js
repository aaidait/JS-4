// Task-1
let a = 6 
let sum = 0; 
if (a >= 0) {
    for (let i = 1; i<=a; i++ ) {
        sum += i
    }
    console.log (sum);

}



// //   Task-2: Треугольник в цикле

let str= "#";

while (str.length<=7 ){
    console.log (str + "\n");

    str += "#";
}


// // Task-3: FizzBuzz

for (let i = 1; i <= 100; i ++) {

    if (i % 3 === 0 && i % 5 === 0){
        console.log ("FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log ("FIZZ");
    } else if (i % 5 === 0){
        console.log("BUZZ");
    } else {
        console.log(i);
    }
}

