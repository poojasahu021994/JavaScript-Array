let selectbtn = document.querySelector('#btn');
selectbtn.addEventListener('click',run);



function run(){
    let str ="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!~#@$%^&*+-";
    let store ='';

for(let i=0; i<4; i++){
let len =str.length;
let ran=Math.random();
let ans =len *ran;
let afterfloor =Math.floor(ans)
let output=str.charAt(afterfloor);
store =store+output;
}
console.log(store);
let selecth1=document.querySelector('#output');
selecth1.innerHTML =store;
}

// let output2=Math.ceil(ans);
// let output1=str.charCodeAt(ans);
// console.log(output);
// console.log(output1);
// console.log(output2);


let a =Math.PI;
console.log(a);

let b=Math.SQRT2;
console.log(b);

let c= 56.7;
console.log(Math.floor(c));
console.log(Math.round(c));
console.log(Math.ceil(c));
console.log(Math.trunc(c));
console.log(Math.abs(c));
console.log(Math.pow(5,2));
console.log(Math.random());

