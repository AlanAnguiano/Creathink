$(document).ready(function(){
    $menuHtml="<nav><ul><li><a class ='ancla' data-ancla='home'>Incio</a></li><li><a class ='ancla' data-ancla='nosotros'>Nosotros</a></li><li><a class ='ancla' data-ancla='servicio'>Servicio</a></li><li><a class ='ancla' data-ancla='Contactanos'>Contactanos</a></li></ul></nav>";

    function menuResponsive(){
        $ventanaAncho = $(window).width();
        $isCell = false;
        if($ventanaAncho <= 1000){
            $("#menuResp").css("display","flex");
            $("#menuDesk").css("display","none");
            $("#contentDash").html($menuHtml);
            $isCell=true;
            
        }else{
            $("#menuResp").css("display","none");
            $("#menuDesk").css("display","flex")
            $("#menuDesk").html($menuHtml);
            $isCell=false;
        }
        $('.ancla').on('click', function(e){
            var strAncla = '#' + $(this).data('ancla');
            $('html,body').animate({scrollTop: $(strAncla).offset().top}, 1000);
            if($isCell){
                $(".contLateralMenu").css("display","none");
                $("#menuResp").css("display","flex");
            }
        });
    } 
    
    $(window).ready(menuResponsive);
    
    $(window).resize(menuResponsive);

    $("#menuResp").click(function(){
        $("#menuResp").css("display","none");
        $(".contLateralMenu").css("display","block");
    });

    $(".close").click(function(){
        $(".contLateralMenu").css("display","none");
        $("#menuResp").css("display","flex");
    });

    
});