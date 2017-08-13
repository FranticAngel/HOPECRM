/**
 * Created by Administrator on 2017/8/13.
 */

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
    var select_data=["黄金","钻石","K金","铂金","珍珠","银饰","宝石","时期","价格"];
    var select_options=[
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"],
        ["黄金","钻石","K金","铂金","珍珠","银饰","宝石"]
    ];

    var select_html=select_data.map(function (item,index) {
        var html= '<div class="select"><p data-value="{0}">{0}</p><ul>'.format(select_data[index]);
        html+="<li>"+select_options[index].join("</li><li>")+"<li>";
        html+= '</ul></div>';
        return html;
    });
    $(".content").append(select_html);



    $(".select").click(function(e){
        $(this).toggleClass('open');
        e.stopPropagation();
    });

    $(".content .select ul li").click(function(e){
        var _this=$(this);
//                $(".select > p").text(_this.attr('data-value'));
        _this.addClass("Selected").siblings().removeClass("Selected");
//                $(".select").removeClass("open");
        e.stopPropagation();
    });

    $(document).on('click',function(){
        $(".select").removeClass("open");
    })

});





