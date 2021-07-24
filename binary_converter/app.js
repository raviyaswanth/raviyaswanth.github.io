$(document).ready(function(){
var condition_one = (document.getElementById("base2").value.length==0 &&
document.getElementById("base8").value.length == 0 &&
document.getElementById("base16").value.length == 0);
var base10 = "";
var base2 = "";
var base8 = "";
var base16 = "";
function clear(){
document.getElementById("base10").value = "";
document.getElementById("base2").value = "";
document.getElementById("base8").value = "";
document.getElementById("base16").value = "";
}
function updateScreen(){
document.getElementById("base10").value = base10;
document.getElementById("base2").value = base2;
document.getElementById("base8").value = base8;
document.getElementById("base16").value = base16;

}
function DecToBin(decimal){
base10 = decimal;
base2 = ""
var dummy1 = parseInt(decimal);
while(dummy1>=1){
base2 = base2+(dummy1%2).toString();
dummy1 = Math.floor(dummy1/2);
}
base2 = base2.split("").reverse().join("");
DecToOct(decimal);
DecToHex(decimal);
}
function DecToOct(decimal){
base8 = ""
var dummy1 = parseInt(decimal);
while(dummy1>=1){
base8 = base8+(dummy1%8).toString();
dummy1 = Math.floor(dummy1/8);
}
base8 = base8.split("").reverse().join("");
}
function DecToHex(decimal){
base16 = ""
var dummy1 = decimal;
while(dummy1>=1){
if((dummy1%16)>9){
switch(dummy1%16){
case 10:
base16 = base16+"A";
dummy1 = Math.floor(dummy1/16);
break;
case 11:
base16 = base16+"B";
dummy1 = Math.floor(dummy1/16);
break;
case 12:
base16 = base16+"C";
dummy1 = Math.floor(dummy1/16);
break;
case 13:
base16 = base16+"D";
dummy1 = Math.floor(dummy1/16);
break;
case 14:
base16 = base16+"E";
dummy1 = Math.floor(dummy1/16);
break;
case 15:
base16 = base16+"F";
dummy1 = Math.floor(dummy1/16);
break;
}
}
else{
base16 = base16+(dummy1%16).toString();
dummy1 = Math.floor(dummy1/16);
console.log(dummy1);
}
}
base16 = base16.split("").reverse().join("");
}
function BinToDec(binary){
base2 = binary;
var dec = 0;
var n = 0;
for(var i = binary.toString().length-1;i>=0;i--){
dec = dec + Math.pow(2,n)*parseInt(binary.charAt(i));
n++;
}
base10 = dec;
DecToOct(dec);
DecToHex(dec);
}

function OctToBin(octal){
base8 = octal;
var oct = octal.toString();
var bin = "";
for(var i = oct.length-1;i>=0;i--){
var m = parseInt(oct.charAt(i));
while(m>=1){
bin = (m%2)+bin;
m = Math.floor(m/2);
}
}
base2 = bin;
BinToDec(bin);
}
function HexToBin(hexal){
base16 = hexal;
var bin = "";
for(var i = hexal.length;i>=0;i--){
var n;
switch(hexal.charAt(i)){
case 'A' :
case'a':
n = 10;
break;
case 'B':
case'b':
n = 11;
break;
case 'C':
case 'c':
n = 12;
break;
case 'D':
case 'd':
n = 13;
break;
case 'E':
case 'e':
n = 14;
break;
case 'F':
case 'f':
n = 15;
break;
default:
n = parseInt(hexal.charAt(i));
break;
}
while(n>=1){
bin = (n%2)+bin;
n = Math.floor(n/2);
}
base2 = bin;
BinToDec(bin);
}
}

$("#final").on("click",function(){
if(document.getElementById("base10").value.length != 0 && document.getElementById("base2").value.length==0 && document.getElementById("base8").value.length == 0 &&
document.getElementById("base16").value.length == 0 )
{
DecToBin(document.getElementById("base10").value);
updateScreen();
}
else if(document.getElementById("base2").value.length != 0 && document.getElementById("base10").value.length==0 && document.getElementById("base8").value.length == 0 &&
document.getElementById("base16").value.length == 0)
{
BinToDec(document.getElementById("base2").value);
updateScreen();
}
else if(document.getElementById("base2").value.length == 0 && document.getElementById("base10").value.length==0 && document.getElementById("base8").value.length != 0 &&
document.getElementById("base16").value.length == 0)
{
OctToBin(document.getElementById("base8").value);
updateScreen();
}
else if(document.getElementById("base2").value.length == 0 && document.getElementById("base10").value.length==0 && document.getElementById("base8").value.length == 0 &&
document.getElementById("base16").value.length != 0)
{
HexToBin(document.getElementById("base16").value);
updateScreen();
}
else{
alert("more than one inputs are filled/ please give the input /Clear input before next Operation");
}
});

$("#clear").on("click",function(){
clear();
});

var firstOp = "";
var secondOp = "";
var answer;
function add(operator1,operator2){
firstOp = operator1;
secondOp = operator2;
var i = firstOp.length-1;
var j = secondOp.length-1;
answer ="";
var sum = 0;
var carry = 0;
while(i>=0 || j>=0){
if(i>=0){
sum += parseInt(firstOp.charAt(i));
}
if(j>=0){
sum += parseInt(secondOp.charAt(j));
}
answer = (sum+carry)%2+answer;
carry = sum+carry>1?1:0;
sum = 0;
i--;
j--;
}
if(carry!=0){
answer = carry+answer;
}
}
function updateAddScreen(){
document.getElementById("first-operator").value = firstOp;
document.getElementById("second-operator").value = secondOp;
document.getElementById("add-answer").innerHTML = answer;
console.log(answer);
}
function addClear(){
document.getElementById("first-operator").value = "";
document.getElementById("second-operator").value = "";
document.getElementById("add-answer").innerHTML = "answer";
document.getElementById("first-operator-sub").value = "";
document.getElementById("second-operator-sub").value = "";
document.getElementById("sub-answer").innerHTML = "answer";
}

$("#add-calc").on("click",function(){

add(document.getElementById("first-operator").value,document.getElementById("second-operator").value);
updateAddScreen();
});
$("#add-clear").on("click",function(){
addClear();
});

var firstOp_sub = "";
var secondOp_sub = "";
var answer_sub;
function sub(operator1,operator2){
var sum1 = 0;
var sum2 = 0;
var carry_sub = 0;
var add_sub = 0;
answer_sub = "";
firstOp_sub = operator1;
secondOp_sub = operator2;
var i = firstOp_sub.length-1;
var j = secondOp_sub.length-1;
while(i>=0 || j>=0){
if(i>=0){
sum1 = parseInt(firstOp_sub.charAt(i));
}
if(j>=0){
sum2 = parseInt(secondOp_sub.charAt(j));
}
if(sum1==0 && sum2==0){
answer_sub = add_sub+answer_sub;
}
if(sum1==1 && sum2==0){
if(carry_sub!=0){
answer_sub = 0+answer_sub;
add_sub = 0;
carry_sub = 0;
}
else{
answer_sub = 1+answer_sub;
add_sub = 0;
}
}
if(sum1 == 0 && sum2==1){
carry_sub = 1;
if(add_sub == 1){
answer_sub = 0+answer_sub;
}
else{
answer_sub = 1+answer_sub;
}
}
if(sum1 == 1 && sum2 == 1){
answer_sub = 0+answer_sub;
} 
i--;
j--;
sum1 = sum2 = 0;
}
if(carry_sub!=0){
answer_sub = 1+answer_sub;
}
else{
answer_sub = 0+answer_sub;
}

}
function updateSubScreen(){
document.getElementById("first-operator-sub").value = firstOp_sub;
document.getElementById("second-operator-sub").value = secondOp_sub;
document.getElementById("sub-answer").innerHTML = answer_sub;
}


$("#sub-calc").on("click",function(){

sub(document.getElementById("first-operator-sub").value,document.getElementById("second-operator-sub").value);
updateSubScreen();
});
$("#sub-clear").on("click",function(){
addClear();
});


});