$(document).ready(function(){

$("#burger").on("click",function(){
$(".list").toggleClass("list-vis");
});

$(".first-second").hover(function(){
$(".first-second").toggleClass("first-second-add");
});

var typed = new Typed(".typing",{
strings : ["web developer", "content creator" ,"python developer"],
typeSpeed : 100,
backSpeed : 60,
loop : true
});


});