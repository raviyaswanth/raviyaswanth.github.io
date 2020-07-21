var name = prompt('hey there! may i know your name ??');
//numbers in javascript
var num =10;
//increment by 1;
num++;
console.log(num);
//decrement by 1;
num--;
//getting the remainder
console.log(num%4);
//increment or decrement by  any number 
num += 10;
console.log(num);
//function
//creating 
function fun(){
	console.log('this is a function');
}
//calling
fun();
/* lets create a function that takes the name and returns hello followed by your name */


/*function greeting(){
	var name = prompt('hey! = what is your name ?')
	var result = 'hello '+name;// string concatenation
	console.log(result) 



}
greeting();*/
document.getElementById('username').innerHTML = 'Hey! '+name+' welcome to my website';


/*while loops
var yash1 = 1;
while(yash1<100){
yash1 ++;
console.log(yash1);
}*/



/*for loops
for(let yash2 = 2; yash2 <= 100;yash2++){
console.log(yash2);
}*/



//data types in javascript
/*
let yourage = 10; //number;
let yourname = yaswanth; //string;
let name = {first : yaswanth , last : sai}; //object [this is dictionary in python]
let truth = false; //bolean
let groceries = ['apples','bananas','jackfruit'] //array
let something = null; //value is null
let random; //undefined
*/


//strings in javascript (common methods)
let fruit = 'banana';
let morefruits = 'banana\napple' //new line
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.slice(2,5));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //splits by comma
console.log(fruit.split(' ')); //splits by character


//arrays
let fruits=['banana','apple','strawberry','orange','pineapples'];
fruits = new Array('banana','apple','strawberry','orange','pineapples'); //two ways to create an array;
console.log(fruits[2]);  //this is how we acess elements in an array
fruits[0] = 'pear';  //this is how we change elements in an array

for (let i=0; i<fruits.length;i++){
 console.log(fruits[i]);
}

//array common methods 
console.log('to string', fruits.toString());
console.log(fruits.join('-'));  //joins elemenrs by '-'
console.log(fruits.join('*')); 
console.log(fruits.pop()); //pops out last element and also returns the element 
console.log(fruits.push('blackberry')); //adds an element at the lastof the array
fruits[5] = 'new fruit';  // also adds a new element 
fruits.shift();   // removes the first elemnet of the array
fruits.unshift('kiwi'); //adds an element to the first of an array;

let vegetables = ['carrot','brocolli','aspargus']
let allgrococeries = fruits.concat(vegetables);
allgrococeries.reverse(); // reverses the array elements
console.log(allgrococeries.sort()); // sorts 

let somenumbers = [1, 345, 56, 34, 6 , 181]
console.log(somenumbers.sort());  //sorts out numbers by their first digit 
console.log(somenumbers.sort(function(a,b) {return a-b})); //sorts out numbers in the ascending order 
console.log(somenumbers.sort(function(a,b) {return b-a})); //sorts out numbers in the descending order 


let emptyarray = new Array();
for(let i=0; i<=10;i++){
	emptyarray.push(i);}
console.log(emptyarray);



//objects in javascript




























