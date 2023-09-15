$(function () {

    window.onscroll = function(){scrollFunction()};
 function scrollFunction() {
     if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
         $("header").css({"background-color":"rgb(248, 78, 107)"});
         
     }
     
     else{
       $("header").css({"background-color":"transparent"});
     }
 }

    $(".one-col").mouseover(function () {
       $(this).children("button").css({display:"block"}); 
    });
    /*$(".one-col").mouseleave(function () {
        $(this).children("button").fadeToggle(); 
     });*/

     $(window).ready(function () {
        $(".slider .rel").css({left:"0%"});
        $(".one-col").css({right:"0%", top:"0%"});
     });

    $(".ham").click(function(){
$(".mobilemenu").css({left:"20%"});
    });

    $(".mobilemenu h2 span").click(function(){
$(".mobilemenu").css({left:"110%"});
    });
})
