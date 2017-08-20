/**
 * Created by Administrator on 2017/8/13.
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
    /*商品信息筛选条件*/
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
    /*个人信息筛选条件*/
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


    function initCommoditySelect() {
        /* 显示店铺商品筛选选项 */
        var select_html=select_data.map(function (item,index) {
            var html= '<div class="select"><p data-value="{0}">{0}</p><ul>'.format(item);
            html+="<li>"+select_options[index].join("</li><li>")+"</li>";
            html+= '</ul></div>';
            return html;
        });
        //个人信息筛选按钮
        var person_filter_btn='<div class="person_filter_btn" data-toggle="modal" data-target="#client_filter_modal" id="client_filter_button">个人信息筛选</div>';
        $(".content").append(select_html.join("")+person_filter_btn);


        /*全选按钮*/
        $(".select_all").click(function(e){
            $(this).toggleClass('blue');
            e.stopPropagation();
            //清空或全选
            var options =$(".content .select ul li");
            options.removeClass("Selected");
            if($(this).hasClass("blue")){
                options.addClass("Selected");
                $(this).find("p").text("清空")
            }else {
                $(this).find("p").text("全选")
            }
        });

        /*商品品类下拉框*/
        $(".select").click(function(e){
            $(this).toggleClass('open');
            e.stopPropagation();
        });
        /*商品品类下拉框选项勾选与取消*/
        $(".content .select ul li").click(function(e){
            // var _this=$(this);
//                $(".select > p").text(_this.attr('data-value'));
//         _this.addClass("Selected").siblings().removeClass("Selected");
//                $(".select").removeClass("open");
            $(this).toggleClass('Selected');
            e.stopPropagation();
        });
    }

    initCommoditySelect();


    /* 显示个人信息筛选选项到弹出框*/
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

    /*点击按钮显示个人信息筛选选项到弹出框*/
    $("#client_filter_button").click(function(){
        showOption()
    });
    /*切换个人信息筛选类型*/
    $(".filter_type").click(function(){
        showOption($(this).text());
        $(".filter_type").toggleClass('filter_type_selected');
    });
    /*弹出框内按钮*/
    var modal_body=$(".modal-body");
    modal_body.on("click","#filter_reset",function(){//取消清空
        $(".option").removeClass("option_selected")
    });
    modal_body.on("click",".option",function(e){//勾选与取消勾选
        $(this).toggleClass('option_selected');
        e.stopPropagation();
    });

    /*点击空白收回下拉框*/
    $(document).on('click',function(){
        $(".select").removeClass("open");
    });



     /*图表与表格切换*/
    var change_sheet=$(".change_sheet");
    change_sheet.unbind("click");
    change_sheet.click(function(){
        $(".client_container").toggleClass('client_hide');
        if(change_sheet.text().trim()==="显示表格"){
            change_sheet.text("显示图表");
            $(".operation ").show();
        }else{
            change_sheet.text("显示表格");
            $(".operation ").hide();
        }
    });

});





