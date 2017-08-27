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
/*数组移除方法*/
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
var myDate = new Date(); //获取今天日期
myDate.setDate(myDate.getDate() - 7);
var dateArray = [];
var dateTemp;
var flag = 1;
for (var i = 0; i < 7; i++) {
    dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
    dateArray.push(dateTemp);
    myDate.setDate(myDate.getDate() + flag);
}
optionLine = {
    color: ['#3398DB'],
	 title: {
        text: '消费记录'
    },
    legend: {
        data:['客户流量人数']
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : dateArray,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'消费记录',
            type:'line',
            barWidth: '60%',
            data:[432, 489, 330, 490, 478, 475,432]
        }
    ]
};
var myChart = echarts.init(document.getElementById('line'));
$(function(){
	myChart.setOption(optionLine);
    /*商品信息筛选条件*/
    var select_data=["翡翠&玉","彩宝","钻石","黄金","珍珠","饰品","时期","价格"];
    var select_options=[
        ["戒指","项链","吊坠","链牌","耳钉/环","手镯","手链"],
        ["戒指","吊坠","链牌","耳钉","手链","套装"],
        ["戒指","对戒","男戒","项链","吊坠","链牌","耳钉/环","手镯","手链","脚链","婚嫁套饰","戒指","对戒","项链","耳钉/环","手链","脚链"],
        ["戒指","对戒","男戒","女戒","项链","吊坠","链牌","耳钉/环","手镯","手链","脚链","婚嫁套饰","宝宝金","金条","金币","元宝","财神","生肖","发财树"],
        ["戒指","项链","吊坠","耳钉/环","胸针","套装"],
        ["戒指","对戒","男戒","女戒","项链","吊坠","链牌","耳钉/环","手镯","手链","脚链","套装","宝宝金"],
        ["时期"],
        ["价格"]
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


    /*已勾选商品数组*/
    var selected_commodity_data = {};
    select_data.forEach(function (first_category,index) {
        selected_commodity_data[first_category]=select_options[index].slice();
    });//初始化已选中数据为 全选
    var selected_commodity_data_backup = JSON.parse(JSON.stringify(selected_commodity_data));

    function initCommoditySelect() {
        /* 显示店铺商品筛选选项 */
        function show_select_option() {
            var select_html=select_data.map(function (item,index) {
                var html= '<div class="select commodity_blue"><p data-value="{0}">{0}</p><ul>'.format(item);
                html+="<li class='selected'>"+select_options[index].join("</li><li class='selected'>")+"</li>";
                html+= '</ul></div>';
                return html;
            });
            var person_filter_btn='<div class="person_filter_btn" data-toggle="modal" data-target="#client_filter_modal" id="client_filter_button">个人信息筛选</div>';        //个人信息筛选按钮
            var client_chart_content= $(".content");
            client_chart_content.append(select_html.join("")+person_filter_btn);
        }
        show_select_option();


        /*全选按钮*/
        $(".select_all").click(function(e){
            $(this).toggleClass('blue');
            selected_commodity_div.find(".op_btn").css("display","inline-block");//显示确认取消按钮
            e.stopPropagation();
            //清空或全选
            var options =$(".content .select ul li");
            var commodity_dropDown=$(".content .select");
            options.removeClass("selected");
            if($(this).hasClass("blue")){//点击全选
                options.addClass("selected");
                $(this).find("p").text("清空");
                //commodity_blue
                commodity_dropDown.removeClass("commodity_blue").addClass("commodity_blue");
            }else {//点击清空
                $(this).find("p").text("全选");
                commodity_dropDown.removeClass("commodity_blue");
                $(".selected_data").remove();
            }
        });

        var selected_commodity_div=$("#selected_commodity_div");//显示已选中选项的div


        /*勾选栏与勾选数据的同步*/
        function sync_selected_commodity_option(data) {
            var selected_data = !!data?data:selected_commodity_data;
            var option_li = $(".select li");
            option_li.removeClass("selected");
            option_li.each(function () {
                var first_category=$(this).parent().prev().text();
                var second_category=$(this).text();
                if(selected_data[first_category].indexOf(second_category)>=0){
                    $(this).addClass("selected");
                }
            })
        }



        /*显示已勾选的选项到快速取消栏*/
        function show_selected_commodity_data(data) {
            var first_category;
            var html ="";
            var selected_data = !!data?data:selected_commodity_data;
            for( first_category in selected_data){
                if(selected_data[first_category].length===select_options[select_data.indexOf(first_category)].length){//如果长度一样说明该一级分类为全选
                    html+='<div class="selected_data">{0}<div class="x">X</div></div>'.format(first_category+":"+"全部");

                }else {
                    selected_data[first_category].forEach(function (second_category) {
                        html+='<div class="selected_data">{0}<div class="x">X</div></div>'.format(first_category+":"+second_category);
                    })
                }
            }
            selected_commodity_div.html("");
            var btn='<div class="selected_opt"><a class="op_btn blue">确定</a><a class="op_btn gray">取消</a></div>';
            selected_commodity_div.append(html+btn);

        }
        /*操作存储数据的数组的函数*/
        function sync_selected_commodity_data(type,first_category,second_category) {
            // $(".select").each(function () {
            //     var secondary_category=$(this).children();//二级分类
            //     secondary_category.filter("selected")
            //
            // });
            if(type==="add"){
                selected_commodity_data[first_category].push(second_category);//添加选项到已勾选商品数组
            }else {
                if(second_category==='全部'){
                    selected_commodity_data[first_category].splice(0,selected_commodity_data[first_category].length)
                }else{
                    selected_commodity_data[first_category].remove(second_category);//删除选项已勾选商品数组
                }
                sync_selected_commodity_option(selected_commodity_data);
            }
            show_selected_commodity_data();
        }
        /*商品品类下拉框点击下拉*/
        $(".select").click(function(e){
            $(this).toggleClass('open');
            e.stopPropagation();
        });
        /*商品品类下拉框选项勾选与取消事件*/
        $(".content .select ul li").click(function(e){
            // var _this=$(this);
//                $(".select > p").text(_this.attr('data-value'));
//         _this.addClass("selected").siblings().removeClass("selected");
//                $(".select").removeClass("open");
            $(this).toggleClass('selected');
            var first_category = $(this).parent().prev().text();
            var second_category = $(this).text();
            if( $(this).hasClass('selected')){
                sync_selected_commodity_data('add',first_category,second_category)
            }else{
                sync_selected_commodity_data('remove',first_category,second_category)
            }
            selected_commodity_div.find(".op_btn").css("display","inline-block");//显示确认取消按钮
            e.stopPropagation();
        });
        // client_chart_content.click(function () {
        //
        // });
        /*点击空白收回下拉框*/
        $(document).on('click',function(){
            $(".select").removeClass("open");
        });


        /*选中商品显示*/

        //确定,取消按钮
        selected_commodity_div.on('click',".blue,.gray",function () {
            selected_commodity_div.find(".op_btn").hide();
            if($(this).hasClass("blue")){//确定
                selected_commodity_data_backup = JSON.parse(JSON.stringify(selected_commodity_data));//保存备份,取消的时候显示备份数组的数据
            }else {//取消
                show_selected_commodity_data(selected_commodity_data_backup);
                /*用备份数据还原之前的勾选项*/
                sync_selected_commodity_option(selected_commodity_data_backup);
                // var option_li = $(".select li");
                // option_li.removeClass("selected");
                // option_li.each(function () {
                //     var first_category=$(this).parent().prev().text();
                //     var second_category=$(this).text();
                //     if(selected_commodity_data_backup[first_category].indexOf(second_category)>=0){
                //         $(this).addClass("selected");
                //     }
                // })
            }
        });

        //快速取消x按钮
        selected_commodity_div.on('click',".selected_data",function () {
            var first_category=$(this).text().split(':')[0];
            var second_category=$(this).text().split(':')[1].slice(0,-1);
            sync_selected_commodity_data('remove',first_category,second_category);
            selected_commodity_div.find(".op_btn").css("display","inline-block");
            $(this).remove();
        })



    }

    initCommoditySelect();




    /* 显示个人信息筛选选项到弹出框*/
    function showOption(filter_type) {
        var filter_type_index=0;
        if(filter_type==="行为特征"){
            filter_type_index=1;
        }
        var client_filter_html=client_filter_data[filter_type_index].map(function (item,index) {
            var html= '<div class="title"><div></div>{0}</div>'.format(item);
            html+='<div class="option">'+client_filter_option[filter_type_index][index].join('</div><div class="option">')+"</div>";
            return html;
        });
        var div = $("#client_filter_div");
        div.html("");
        div.append(client_filter_html.join(""));
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




     /*图表与表格切换*/
    var change_sheet=$(".change_sheet");
    var client_chart=$("#client_chart");
    var client_table=$("#client_table");
    var client_info=$("#client_info");
    var operation=$(".operation ");
    change_sheet.text("显示表格");
    operation.hide();
    change_sheet.unbind("click");
    change_sheet.click(function(){
        if(change_sheet.text().trim()==="显示表格"){
            change_sheet.text("显示图表");
            operation.show();
            client_table.show();
            client_table.siblings(".client_container").hide();
        }else{
            change_sheet.text("显示表格");
            operation.hide();
            client_chart.show();
            client_chart.siblings(".client_container").hide();

        }
    });
    client_info.find(".return").click(function () {
        client_table.show();
        client_table.siblings(".client_container").hide();
    });


    /*客户记录点击切换到详细客户信息页面*/
    client_table.on('click','td',function () {
        client_info.show();
        client_info.siblings(".client_container").hide();
    });






	showPie('population');
});

function showPie(div_){
	if(div_=="population"){
		$("#population").html("");
		$("#population").css("width","100%")
		$("#population").css("height","100%")
		$("#population").css("min-height","800px")
		$("#population").load("lifecycle/memberAgeChart.html?"+new Date().getTime());
	}else if(div_=="consumption"){
		$("#population").html("");
		$("#population").html("");
		$("#population").css("width","100%")
		$("#population").css("height","100%")
		$("#population").css("min-height","800px")
		$("#population").load("lifecycle/consumptionChart.html?"+new Date().getTime());
	}else if(div_=="consumptionCoefficient"){
		$("#population").html("");
		$("#population").css("width","100%")
		$("#population").css("height","100%")
		$("#population").css("min-height","800px")
		$("#population").load("lifecycle/memberAgeChart.html?"+new Date().getTime());
	}
}