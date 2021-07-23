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
alert("more than one inputs are filled/please give the input");
}




});

$("#clear").on("click",function(){
clear();
});



















});