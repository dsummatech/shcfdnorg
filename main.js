$(function () {

    window.onscroll = function(){scrollFunction()};
 function scrollFunction() {
     if (document.body.scrollTop >= 100 || document.documentElement.scrollTop > 100) {
         $("header").css({"background-color":"black"});
         
     }
     
     else{
       $("header").css({"background-color":"transparent"});
     }
 }

    $(".one-col").mouseover(function () {
       $(this).children("button").fadeToggle(); 
    });
    $(".one-col").mouseleave(function () {
        $(this).children("button").fadeToggle(); 
     });

     $(window).ready(function () {
        $(".slider .rel").css({left:"0%"});
        $(".one-col").css({right:"0%", top:"0%"});
     });
})