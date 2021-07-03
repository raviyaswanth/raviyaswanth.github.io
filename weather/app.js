$(document).ready(function(){
let long;
let lat;
function getlocation(){
if(navigator.geolocation){
navigator.geolocation.getCurrenPosition(showPosition);
}
else{
$("body div").css("display","none");
}
}
function showPosition(position){
lat = position.coords.latitude;
long = position.coords.longitude;
console.log(lat);

}


});