// AutoBoxing 
console.log('i have Laptop'.length);
console.log('i have Laptop'.toUpperCase());
console.log('i have Laptop'.replace('Laptop', 'Mobile'));

let a = 5
let b = a
console.log(`a: ${a}  b: ${b}`);
a = 10
console.log(`a: ${a}  b: ${b}`);

// Object Reference
let x = {num: 5};
let y = x;
console.log(`x: ${x.num}  y: ${y.num}`);
x.num = 10
console.log(`x: ${x.num}  y: ${y.num}`);