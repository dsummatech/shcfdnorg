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

        var n1 = -1;
        function count1() {
            if (n1 < 15) {
                n1++;
                $(".one-col h2 .num1").html(n1);
            }
        }
        setInterval(count1, 100);

        var n2 = -1;
        function count2() {
            if (n2 < 7000) {
                n2+=50;
                $(".one-col h2 .num2").html(n2);
            }
        }
        setInterval(count2, 10);

        var n3 = -1;
        function count3() {
            if (n3 < 700) {
                n3+=50;
                $(".one-col h2 .num3").html(n3);
            }
        }
        setInterval(count3, 100);

        var n4 = -1;
        function count4() {
            if (n4 < 10) {
                n4++;
                $(".one-col h2 .num4").html(n4);
            }
        }
        setInterval(count4, 100);

        
        $(".mini-slider .mini-rel").css({left:"0%"});
     });

    $(".ham").click(function(){
$(".mobilemenu").css({left:"20%"});
    });

    $(".mobilemenu h2 span").click(function(){
$(".mobilemenu").css({left:"110%"});
    });
})
