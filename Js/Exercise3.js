//updating Array
let arr = [5,6];
console.log(arr);
arr.push(7);
arr.unshift(4);
console.log(arr);

console.log()

//prime number
function Prime(num){
    for(let i = 2; i < 5; i++){
        if(num % 2 === 0){
            return false;
        }
        return true;
    }
}
console.log(Prime(3));
console.log(Prime(21));
console.log(Prime(6));

let num = 2;
let i = 0;
while(i < 5){
    if(Prime(num)){
        console.log(num);
        i++
    }
    num++
}

console.log()

//Reverse Array 
for( let i = 5; i>0; i--){
    console.log(i);
}

// //Other Way just add -i in console.log() it will make reverse order 
// // for( let i = 0; i < 10; i++){
// //     console.log(10 - i);
// // }

console.log()
//Printing Positive Number 
let arr2 = [1,2,-3,4,5,-6];
for( let i = 0; i < arr2.length; i++){
    if(arr2[i] < 0){
        continue;
    }
    console.log(arr2[i]);
}

console.log()
// Concatenate all elements of arr3 into a single string with spaces between them
let arr3 = ['my','name','is','azim'];
let result = '';
for( let i = 0; i < arr3.length; i++){
    result = result + arr3[i] + ' ';
}
console.log(result);
// other way this is shortcut 
// console.log(arr3.join(" "));