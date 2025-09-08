// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or equals to
let greaterThanEq = 5 >= 1;

// Less than or equals to
let lessThanEq = 4 <= 9;

// Not equals
let notEquals = 5 !== 5;

let storeA = 1.40;
let storeB = 4.40;


function compareStorePrices (storeA, storeB) {
    let storeALower = storeA < storeB;
    if (storeALower) {
        console.log("Store A has a lower price.");
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.");
    } else {
        console.log("Both stores have the same price.");
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);
compareStorePrices(10, 10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(2);
console.log(squaredNumber);

let x = 10;

function addNumber(n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumber(1,2,10);

//                       0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];
let arrLength = ourArray.length;
for (let i = 0; i < arrLength; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for (let j = 0; j < 10; j++) {
        console.log("j is equal to: " + j);
    }
}

x = 0;
while (x < 10) {
    console.log("Ran");
    x++;
}