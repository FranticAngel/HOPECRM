/**
 * Created by Administrator on 2017/8/26.
 */
$(function(){
   var config_0=$("#config_0");
    config_0.find(".depart").on('click',function () {
        if ( !$(this).hasClass("active")){
            $("#config_0").find(".operation").appendTo($(this).find("div"));
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");
        }
    });
    config_0.on('click','.blue_input',function () {
        $(this).toggleClass("blue_input_checked");
        if($(this).attr('id')==="select_all"){
            if($(this).hasClass("blue_input_checked")){
                $('.blue_input').removeClass('blue_input_checked').addClass('blue_input_checked');
            }else {
                $('.blue_input').removeClass('blue_input_checked');
            }
        }
        var selected_num =config_0.find('.blue_input_checked').filter("[id!='select_all']").length;
        $(".selected_num").text(selected_num);

    });


    var config_1=$("#config_1");
    config_1.find(".depart").on('click',function () {
        if ( !$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");
        }
    });

});