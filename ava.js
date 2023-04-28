'use strict';
    $(document).ready(function () {
        $('.form-1').hide();
        $('.bot-icon-1').hide();
        $('.bot-icon-2').hide();
        $('.bot-icon-3').hide();
        $('.line-1').hide();
        $('.line-2').hide();
        $('.line-3').hide();
        $('#btn-1').click(function () {
            $('.anexodecalculadora').hide();
            $('.form-1').show();
            $('.bot-icon-1').show();
            $('.bot-icon-2').show();
            $('.bot-icon-3').show();
            $('.line-1').show();
            $('.line-2').show();
            $('.line-3').show();

        })

        $('.retro-0').click(function () {
            $('.anexodecalculadora').show();
            $('.form-1').hide();
            $('.bot-icon-1').hide();
            $('.bot-icon-2').hide();
            $('.bot-icon-3').hide();
            $('.line-1').hide();
            $('.line-2').hide();
            $('.line-3').hide();

        });





    $('.input-1').keyup(function () {
        if($(this).val() ==''){
            $(this).addClass("error");
        }else{
            $(this).removeClass("error");
            $('.conti-1').css('opacity','1');
            $('.conti-1').css('cursor','pointer');
            $('.conti-1').prop("disabled",false);

        }
    });
        $('.input-2').keyup(function () {
            if($(this).val() ==''){
                $(this).addClass("error");
            }else{
                $(this).removeClass("error");
                $('.conti-3').css('opacity','1');
                $('.conti-3').css('cursor','pointer');
                $('.conti-3').prop("disabled",false);

            }
        });



    $(".check").click(function () {
        if($(this).prop("checked")== true){
            $('.conti-2').css('opacity','1');
            $('.conti-2').css('cursor','pointer');
            $('.conti-2').prop("disabled",false);

        }
        else if($(this).prop("checked")== false){
            $('.conti-2').css('opacity','0.3');
            $('.conti-2').css('cursor','not-allowed');
            $('.conti-2').prop("disabled",true);


        }
    });

        $('.conti-1').click(function () {
            $('.form-1').css('display', 'none');
            $('.form-2').css('display', 'block');
            $('.bot-icon-1').css('color', '#0254b7');
            $('.line-1').css('background-color', '#0254b7');

        });

        $('.retro-1').click(function () {
            $('.form-1').css('display', 'block');
            $('.form-2').css('display', 'none');
            $('.bot-icon-1').color("color","");
            $('.line-1').css("background","");

        });

        $('.conti-2').click(function () {
            $('.form-2').css('display', 'none');
            $('.form-3').css('display', 'block');
            $('.bot-icon-2').css('color', '#0254b7');
            $('.line-2').css('background-color', '#0254b7');
        });

        $('.retro-2').click(function () {
            $('.form-2').css('display', 'block');
            $('.form-3').css('display', 'none');
            $('.bot-icon-2').css("color","");
            $('.line-2').css("background","");


        });




        $('.conti-3').click(function () {
            $('.form-3').css('display', 'none');
            $('.form-4').css('display', 'block');
            $('.bot-icon-3').css('color', '#0254b7');
            $('.line-3').css('background-color', '#0254b7');
        });
});
//INICIO DE (POP-UP)
$(function () {
    function abrir() {
        $("#modal").show();
        $("#modal").dialog();
    }
    $("#abrirPop-up").click(function () {
        abrir()
    });
});
$(function () {
    function cerrar() {
        $("#modal").hide();

    }
    $("#cerrarPop-up1,#cerrarPop-up2").click(function () {
        cerrar()
    });
});
//FIN DE (Pop-Up)


//MOSTRAR FORMULARIO

