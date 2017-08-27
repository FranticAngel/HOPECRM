/**
 * Created by Administrator on 2017/8/26.
 */

/*字符串格式化函数*/
String.prototype.format = function(args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length === 1 && typeof(args) === "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === undefined) {
                    return "";
                } else {
                    reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    } else {
        return this;
    }
};

$(function(){
    $(".config_container_div").on('click','.blue_input',function () {
        $(this).toggleClass("blue_input_checked");
    });
    var config_0=$("#config_0");
    config_0.find(".depart").on('click',function () {
        if ( !$(this).hasClass("active")){
            $("#config_0").find(".operation").appendTo($(this).find("div"));
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");
        }
    });
    config_0.on('click','.blue_input',function (e) {
        $(this).toggleClass("blue_input_checked");
        if($(this).attr('id')==="select_all"){
            if($(this).hasClass("blue_input_checked")){
                config_0.find('.blue_input').removeClass('blue_input_checked').addClass('blue_input_checked');
            }else {
                config_0.find('.blue_input').removeClass('blue_input_checked');
            }
        }
        var selected_num =config_0.find('.blue_input_checked').filter("[id!='select_all']").length;
        $(".selected_num").text(selected_num);
        e.stopPropagation();
    });


    var config_1=$("#config_1");
    config_1.find(".depart").on('click',function () {
        if ( !$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");
        }
    });

    /*自定义产品*/
    var second_class=[
        ["戒指","项链","吊坠","链牌","耳钉/耳环","手镯","手链"],
        ["戒指","吊坠","链牌","耳钉","手链","套装"],
        ["戒指","对戒","男戒","项链","吊坠","链牌","耳钉/耳环","手镯","手链","脚链","婚嫁套饰"],
        ["戒指","对戒","项链","耳钉/耳环","手链","脚链"],
        ["戒指","对戒","男戒","女戒","项链","吊坠","链牌","耳钉/耳环","手镯","手链","脚链","婚嫁套饰","宝宝金"],
        ["金条","金币","元宝"],
        ["财神","生肖","发财树"],
        ["戒指","项链","吊坠","耳钉/耳环","胸针","套装"],
        ["戒指","对戒","男戒","女戒","项链","吊坠","链牌","耳钉/耳环","手镯","手链","脚链","套装","宝宝金"]
    ];

    var jewel_type={
        "翡翠&玉":["翡翠","常规玉","和田玉","墨玉","金镶玉"],
        "彩宝":["红蓝宝","碧玺","坦桑石","芙蓉石","葡萄石","有机宝石","其他宝石"],
        "钻石镶嵌":["大钻","碎钻","裸钻","素金"],
        "黄金":["黄金首饰","投资黄金","黄金摆件"],
        "珍珠":["淡水珍珠","海水珍珠"],
        "饰品":["银饰","钛钢","半宝"]
    };

    var jewel_type_second_class={
        "翡翠&玉":[0,0,0,0,0],
        "彩宝":[1,1,1,1,1,1,1],
        "钻石镶嵌":[2,2,2,3],
        "黄金":[4,5,6],
        "珍珠":[7,7],
        "饰品":[8,8,8]
    };


    var config_2=$("#config_2");
    config_2.find(".depart").on('click',function () {
        var config_2=$("#config_2");
        if ( !$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");

            //添加产品选项
            var jewel_type_name = $(this).text();
            $(".product_tile").text(jewel_type_name);
            config_2.find(".config_tab").children().remove();
            config_2.find(".tab-content").children().remove();
            //标题
            var jewel_ul_html = jewel_type[jewel_type_name].map(function (item,index) {
                if(index===0){
                    return '<li class="active"><a href="#jewel_type_{0}" data-toggle="tab" >{1}</a></li>'.format(index,item)
                }
                return '<li><a href="#jewel_type_{0}" data-toggle="tab" >{1}</a></li>'.format(index,item)
            }).join("");
            config_2.find(".config_tab").append(jewel_ul_html);
            //选项
            var jewel_second_class_html = jewel_type[jewel_type_name].map(function (item,index) {
                var html='';
                if(index===0){
                    html = '<div class="tab-pane fade in active" id="jewel_type_{0}"><div class="role_config_div">'.format(index,item);
                }else {
                    html = '<div class="tab-pane fade" id="jewel_type_{0}"><div class="role_config_div">'.format(index,item);
                }
                var option_html =  second_class[jewel_type_second_class[jewel_type_name][index]].map(function (item) {
                    return '<div><div class="blue_input"></div>{0}</div>'.format(item);
                }).join('');
                html +=option_html+'</div></div>';
                return html
            }).join("");
            config_2.find(".tab-content").append(jewel_second_class_html);


        }
    });

    var config_3 =$("#config_3");
    config_3.find(".yellow_btn").on('click',function () {
        config_3.find(".config_option_tile:gt(0),.hint").toggleClass('edit_hide');
        if($(this).text()==="编辑"){
            $(this).text("保存");
        }else {
            $(this).text("编辑");
        }
    });

    var config_4 =$("#config_4");
    config_4.find(".yellow_btn").on('click',function () {
        config_4.find(".config_option_tile,.hint").toggleClass('edit_hide');
        if($(this).text()==="编辑"){
            $(this).text("保存");
        }else {
            $(this).text("编辑");
        }
    })





});