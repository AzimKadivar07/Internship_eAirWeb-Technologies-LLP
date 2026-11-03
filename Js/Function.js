// Function to check if a number is odd or even
function isOdd(number){
    let rem = number %2;
    let isOdd = rem == 1;
    return isOdd;
}
console.log(isOdd(4));
console.log(isOdd(3));
console.log(isOdd(786));

// Function to check which number is larger
function Larger(num1, num2){
    // if(num1 > num2){
    //     return num1;
    // } else {
    //     return num2;
     return num1 > num2 ? num1 : num2;
}
console.log(Larger(4, 5));
console.log(Larger(9, 5));
console.log(Larger(888, 567));

function Fernheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(Fernheit(0));
console.log(Fernheit(50));
console.log(Fernheit(100));