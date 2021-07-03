$(document).ready(function(){
let long;
let lat;
var temp_c;
let img_add;

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
lat = position.coords.latitude;
long = position.coords.longitude;
const key = "9733af41de3473cdfa81f8e83bed9cbe";
const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
fetch(api)
.then(response =>{
return response.json();
})
.then(data =>{
const{name} = data;
const{temp} = data.main;
const{icon,description} = data.weather[0];
console.log(data);
$(".location h1").text(name);
$(".temperature h1").text(temp);
$(".summary h1").text(description);
$(".temperature").on("click",function(){
if($(".temperature span").text()==="K"){
temp_c = temp-273;
temp_c = temp_c.toFixed(2);
$(".temperature h1").text(temp_c);
$(".temperature span").text("C");}
else{
$(".temperature h1").text(temp);
$(".temperature span").text("K");
}
});

img_add = icon+".png";
$("img").attr("src",img_add);
});

});


}
});