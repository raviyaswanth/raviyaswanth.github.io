$(document).ready(function(){

$("#burger").on("click",function(){
$(".list").toggleClass("list-show");
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

$(".about-click").on("click",function(){
$(".skills,.about-me,.from").css("opacity","1");
});
$(window).scroll(function(){
if(this.scrollY>550){
$(".about-me").css("opacity","1");
}if(this.scrollY>555){
$(".skills,.from").css("opacity","1");
}

});

});