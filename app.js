console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
/*
for (let counting = 0; counting < 101; counting ++){
    if (counting % 2 != 0){
        console.log(`${counting}`);
    }
}

/*
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
/*
for (let fizzBuzz = 0; fizzBuzz < 101; fizzBuzz ++){
    if ((fizzBuzz % 3 == 0 && fizzBuzz % 5 == 0) == true){
        console.log(`${fizzBuzz}`,"FIZZBUZZ");
    } else if (fizzBuzz % 3 == 0){
        console.log(`${fizzBuzz}`,"FIZZ");
    } else if (fizzBuzz % 5 == 0){
        console.log(`${fizzBuzz}`,"BUZZ");
    }
}


for (let i = 0; i <= 100; i ++){
    if((i % 3 == 0 && i % 5 == 0) == true){
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log(i, "FIZZ");
    } else if (i % 5 == 0){
        console.log(i, "BUZZ");
    }
}
*/
//Exercise 3
console.log("EXERCISE 3:\n==========\n");


let i = 1;

while (i < 100){
    let output = "";

    if (i % 3 == 0){
        output += "FIZZ";
    }

    if (i % 5 == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);

    i ++;
}


//Exercise 4
console.log("EXERCISE 4:\n==========\n");
/*
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let f = 1; f <= n; f ++){
    if (f == numberToFind){
        console.log(`Found ${numberToFind}!`);
        break;
    }
    if (f == n){
        console.log(`Did not find ${numberToFind} within 1-${n}.`);
    }
}
*/