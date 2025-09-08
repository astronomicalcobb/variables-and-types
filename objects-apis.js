/* Objects */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Dachshund",
    size: "small",
    bark: function (typeOfBark) {
        console.log("Bark!");
    }
};

dog.bark();

/* APIs */

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10
};
x(y);
console.log(y);