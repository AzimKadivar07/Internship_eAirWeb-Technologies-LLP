// Set Time Out 
function Alaram() {
    console.log('Good Morning');
}
console.log('Alaram set');
setTimeout(Alaram, 2000);
// shortcut using Arrow Function 
// setTimeout(Alaram = () => console.log('Good Morning'), 2000);

// Set Interval 
function Alaram2(){
    console.log('Good Morning Azim')
}
console.log('Alaram2 Set')
setInterval(Alaram2, 3000);

// Combination of Set Time out and set interval hello will print after every 2 second of interval and set time out will stop it after 10 second .
function Alaram3() {
    console.log('hello');
}
console.log('Alaram3 Set')
let timer = setInterval(Alaram3, 2000);

setTimeout(() => clearInterval(timer), 10000);