// Normal Function
function square(num) {
    return num * num;
}

console.log(square(5)); // 25

// Anonymous Function
let square = function(num) {
    return num * num;
};

console.log(square(5)); // 25

// Arrow Function 
let square = (num) => {
    return num * num;
};

console.log(square(5)); // 25

// Shortcut Arrow Function
let square = num => num * num;
console.log(square(5)); // 25