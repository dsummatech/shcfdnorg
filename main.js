$(function () {

    window.onscroll = function(){scrollFunction()};
 function scrollFunction() {
     if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
         $("header").css({"background-color":"white"});
         $(".menu .media").css({"color":"#791e15"});
         $(".menu .option").css({"color":"#791e15"});
         $(".logo img").attr("src","shcfdn_image/logob.png");
     }
     
     else{
       $("header").css({"background-color":"transparent"});
       $(".menu .media").css({"color":"white"});
       $(".menu .option").css({"color":"white"});
       $(".logo img").attr("src","shcfdn_image/logo.png");
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

        
        $(".mini-slider .mini-rel").css({left:"0%"});
     });

    $(".ham").click(function(){
$(".mobilemenu").css({left:"20%"});
    });

    $(".mobilemenu h2 span").click(function(){
$(".mobilemenu").css({left:"110%"});
    });
})
