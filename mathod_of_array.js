let arrstr=["pooja","sahu","gourik","sona"]
arrstr.sort();
console.log(arrstr);

//Add any value to the last index of array, push mathod is used
let nam=["gourik","chiku","manya"]
nam.push("pooja");
console.log(nam)

//pop mathode is use To remove any value to the last index number of array
let nam1=["gourik","chiku","manya"]
nam1.pop();
console.log(nam1)
//shift mathode is use to remove value to 0 index number of array
let nam2=["gourik","chiku","manya"]
nam2.shift();
console.log(nam2)

//unshift mathode is using to add value to 0 index number of array
let nam3=["gourik","chiku","manya"]
nam3.unshift(52);
console.log(nam3)

//ascending order
let arr =[45,25,20,15,78,96];
arr.sort(function(a,b){return a-b});
console.log(arr);

//descending order
arr.sort(function(a,b){return b-a});
console.log(arr);

//reduce mathod using sum of array value
let output  = arr.reduce (function(a,b){return a+b});
console.log(output);

//array converd to String
let answerstr = arr.toString();
console.log(answerstr)

//ceprate
let answerjoin = arr.join(" ");
console.log(answerjoin);

//higher order method () -->
//map () ---> 
//reduce() ---> adding 
//number.sort() --->
//find () -->
//filter() --->
//foreach() --->