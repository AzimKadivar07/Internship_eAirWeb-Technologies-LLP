//While Loop
let num = 1;
while (num <=10){
    console.log(num);
    num++;
}
console.log();

//DO While Loop
let num2 = 1;

do {
    console.log(num2);
    num2 = num2 + 1;
} while (num2 < 0);

console.log();// for space in output 


//For Loop
for (let num3 = 1; num3 < 10; num3++) {
    console.log(num3);
}
console.log()

//Loop with Array Example 
let nums = [1,4,88,0,35,7,85,6];
for(i=0; i<=7; i++){
    console.log(nums[i]);
}

console.log()

//Accumulator Pattern
let nums2 = [5,5,5,5,];
let sum = 0;
for( let i=0; i < nums2.length; i++){
    sum = sum + nums2[i];
      
}
  console.log('the sum of nums2 is:' + sum);

  console.log()

let nums2sqaure = [];
for( let i=0; i < nums2.length; i++){
    nums2sqaure[i] = nums2[i] * nums2[i];
}
console.log(nums2sqaure);

console.log()
//Break
for( let i = 0; i<= 20; i++){
    console.log(i);
    if( i === 10){
        break;
    }
}

let myArray = [10,20,30,40,50];
for( let i = 0; i < myArray.length ; i++){
    if( myArray[i] === 30){
       console.log(`Number Found At Index  ${i}`);
        break;
    }
    console.log('Still Finding Number');
}

console.log()
// Continue
for(let i = 1; i < 30; i++){
 if(i % 2 == 0){
continue;
 }
 console.log(i);
}