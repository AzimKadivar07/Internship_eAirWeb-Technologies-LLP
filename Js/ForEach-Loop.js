let arr = [2,3,5,6,7,8];
// for (i = 0; i < arr.length; i++ ){
//     console.log(arr[i]);
// }

arr.forEach(function(num){
    console.log(num)
});

let food = ['burger', 'Pizza', 'sandwitch', 'hotDog'];
food.forEach(function(foods){
    console.log(foods)
});

// array filter methode
let arr2 = [1,3,7,4,3,8,6,2];

let newarr = arr2.filter((num) => {
    if( num %2 === 1){
         return true; 
    }
       return false
});

console.log(newarr);

// array map methode 

let arr3 = [5,10,25,30];
let sqaure = arr3.map((num) => {
    return num*num;
});
console.log(sqaure);

