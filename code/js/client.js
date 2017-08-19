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
    var client_filter_data=[
        ["性别","年龄","职业","收入"],
        ["价值取向","消费频次","会员等级","忠诚度","客户来源渠道"]
    ];
    var client_filter_option=[
        [
            ["男","女"],
            ["20岁以下","21-25岁","26-30岁","31-35岁","36-45岁","46-50岁","51岁以上"],
            ["国家机关","党群组织","企业","事业单位负责人","专业技术人员 ","办事人员","商业","服务业人员 ","农林牧渔水利业生产人员 ","生产","运输设备操作人员及有关人员 ","军人 ","其他"],
            ["5000元以下","5001-8000元","8001-12000元","12001-20000元","20001元以上"]
        ],
        [
            ["象征性价值观","体验性价值观","享乐型价值观","经济型价值观","功能型价值观"],
            ["一年3次以上","一年2次","一年一次","两年一次","三年以上一次"],
            ["铁牌会员","铜牌会员","银牌会员","金牌会员","钻石会员","皇冠会员"],
            ["高","中","低"],
            ["朋友介绍","自主逛街","电视广告","社交平台","品牌忠诚者"]
        ]
    ];

    function showOption(filter_type) {
        var filter_type_index=0;
        if(filter_type==="行为特征"){
            filter_type_index=1;
        }
        var button_html ='<div class="center-block"><button type="button" class="btn btn-primary" id="filter_reset">重置</button><button type="button" class="btn btn-info" data-dismiss="modal">取消 </button></div>';
        var client_filter_html=client_filter_data[filter_type_index].map(function (item,index) {
            var html= '<div class="title"><div></div>{0}</div>'.format(item);
            html+='<div class="option">'+client_filter_option[filter_type_index][index].join('</div><div class="option">')+"</div>";
            return html;
        });
        var div = $("#client_filter_div");
        div.html("");
        div.append(button_html+client_filter_html.join(""));
    }



    $("#client_filter_button").click(function(){
        showOption()
    });
    $(".filter_type").click(function(){
        showOption($(this).text());
        $(".filter_type").toggleClass('filter_type_selected');
    });

    var select_html=select_data.map(function (item,index) {
        var html= '<div class="select"><p data-value="{0}">{0}</p><ul>'.format(item);
        html+="<li>"+select_options[index].join("</li><li>")+"</li>";
        html+= '</ul></div>';
        return html;
    });
    $(".content").append(select_html);

    $(".select_all").click(function(e){
        $(this).toggleClass('blue');
        e.stopPropagation();
    });

    $(".select").click(function(e){
        $(this).toggleClass('open');
        e.stopPropagation();
    });
    var modal_body=$(".modal-body");
    modal_body.on("click","#filter_reset",function(e){
        $(".option").removeClass("option_selected")
    });
    modal_body.on("click",".option",function(e){
        $(this).toggleClass('option_selected');
        e.stopPropagation();
    });

    // $(".option").removeClass("option_selected")

    $(".content .select ul li").click(function(e){
        // var _this=$(this);
//                $(".select > p").text(_this.attr('data-value'));
//         _this.addClass("Selected").siblings().removeClass("Selected");
//                $(".select").removeClass("open");
        $(this).toggleClass('Selected');
        e.stopPropagation();
    });

    $(document).on('click',function(){
        $(".select").removeClass("open");
    })

});





