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
    var modal_body=$("#client_filter_modal");
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
    change_sheet.text("显示图表");
    operation.show();
    change_sheet.unbind("click");
    change_sheet.click(function(){
        if(change_sheet.text().trim()==="显示表格"){
            change_sheet.text("显示图表");
            operation.show();
            client_table.show();
            client_table.siblings(".client_container").hide();
        }else{
            showPie('population');
            change_sheet.text("显示表格");
            operation.hide();
            client_chart.show();
            client_chart.siblings(".client_container").hide();

        }
    });


    /*生成表格*/
    function showTable() {
        $(".am-fr").css('opacity',1);
        $(".no_result").remove();
        var client_tbody=$("#client_tbody");
        client_tbody.html("");
        var client_info_html="";
        for (i=0;i<10;i++){
            client_info_html+='<tr>\
                <td>{0}</td>\
                <td >{1}</td>\
                <td class="member" >00{2}</td>\
                <td >{3}</td>\
                <td >{4}</td>\
                <td >{5}</td>\
                <td >{6}</td>\
                <td >{7}</td>\
                <td class="member">深圳{8}门店</td>\
                <td >{9}黄金</td>\
                <td >华南地区</td>\
                <td >广东</td>\
                <td >深圳</td>\
                <td>\
                <div class="am-btn-toolbar">\
                <div class="am-btn-group am-btn-group-xs">\
                <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>\
                </div>\
                </div>\
                </td>\
                </tr>'.format(i+1,getName(),getMobile().slice(7),getGender(),getAge(),getMobile(),getEducation(),getCareer(),getArea(),getShopName())
        }
        client_tbody.append(client_info_html);
        if( $(".search_input").attr('placeholder')==="请输入姓名、会员编码、电话"){
            $(".member").show();
        }else {
            $(".member").hide();
        }
    }



    function generateRow(input_text,type) {
        var html= '<tr>\
                <td>{0}</td>\
                <td>{1}</td>\
                <td class="member">{2}</td>\
                <td>{3}</td>\
                <td>{4}</td>\
                <td>{5}</td>\
                <td>{6}</td>\
                <td>{7}</td>\
                <td class="member">深圳{8}门店</td>\
                <td>{9}黄金</td>\
                <td>华南地区</td>\
                <td>广东</td>\
                <td>深圳</td>\
                <td>\
                <div class="am-btn-toolbar">\
                <div class="am-btn-group am-btn-group-xs">\
                <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>\
                </div>\
                </div>\
                </td>\
                </tr>';
        if(type==="new"){
            return html.replace("<tr>","<tr class='new_row'>").format('').replace('<span class="am-icon-trash-o"></span> 删除</button>','<span class="am-icon-save"></span> 保存</button>').replace("am-text-danger","am-text-secondary");
        }
        switch(input_text.length)
        {
            case 3://人名
                return html.format(1,input_text,"00"+getMobile().slice(7),getGender(),getAge(),getMobile(),getEducation(),getCareer(),getArea(),getShopName());
                break;
            case 6://会员编码
                return html.format(1,getName(),input_text,getGender(),getAge(),getMobile(),getEducation(),getCareer(),getArea(),getShopName());
                break;
            case 11://电话
                return html.format(1,getName(),"00"+getMobile().slice(7),getGender(),getAge(),input_text,getEducation(),getCareer(),getArea(),getShopName());
                break;
            default:
                return ""

        }
    }
    //表格删除按钮
    client_table.on('click',"button.am-text-danger",function () {
        if(window.confirm("确定删除?") ){
            $(this).parent().parent().parent().parent().fadeOut(300);
        }
    });
    //表格保存按钮
    client_table.on('click',"button.am-text-secondary",function () {
        $(this).parent().parent().parent().parent().fadeOut(300);
    });


    var page_div = $(".am-pagination");
    page_div.on('click','a',function () {
        if($(this).parent().hasClass("am-active")){
            var cur_active_page = $(".active_page");//当前页码
            cur_active_page.removeClass("active_page");
            if($(this).parent().hasClass("up")){
                cur_active_page.parent().prev().children('a').addClass("active_page");//当前页码移到上一页
            }else {
                cur_active_page.parent().next().children('a').addClass("active_page");//当前页码移到下一页
            }
            showTable();
        }else if(!$(this).hasClass("active_page")){
            page_div.find('.active_page').removeClass("active_page");
            $(this).addClass("active_page");
            showTable();
        }

    });
    page_div.find('option').on('click',function () {
        showTable();
    });




    showTable();

    /*按钮*/
    //刷新按钮
    var operate=$(".operate");
    operate.unbind('click');
    operate.eq(0).on('click',function () {
        showTable();
    });
    //新增记录
    operate.eq(2).on('click',function () {
        $("#client_tbody").append(generateRow("","new"));
        $(".new_row td:not(td:last-child):not(td:first-child)").addClass('input').html('<input class="td_edit" type="text" value="" />');
        scrollToEnd()
    });

    //搜索按钮
    $(".search").find(".input_search").on('click',function () {
       var input_text = $(this).prev().val();
        $(".am-fr").css('opacity',0);
        var client_tbody = $("#client_tbody");
        client_tbody.html('');
        $(".no_result").remove();
        var row_html = generateRow(input_text);
        if(row_html.length===0){
            $("table.bordered").after('<div class="no_result">没有找到匹配结果</div>');
        }else {
            client_tbody.append(row_html);//显示表格内容
        }
    });

    /*点击编辑记录*/
    client_table.on('click','tr:not(.new_row)>td:not(td:last-child)',function () {
        if(!$(this).is('.input')){
            $(this).addClass('input').html('<input class="td_edit" type="text" value="'+ $(this).text() +'" />').find('input').focus().blur(function(){
                $(this).parent().removeClass('input').html($(this).val() || 0);
            });
        }
    });

    /*客户记录点击切换到详细客户信息页面*/
    client_table.on('click','tr:not(.new_row)>td:nth-child(2)',function () {
        client_info.show();
        client_info.siblings(".client_container").hide();
        $(".change_sheet").hide();
		var tr = $(this).parent().children('td');
		var hide = $(this).parent().find('[style]');
		//debugger;
		if(hide.length==0){
			var base = $('#base-vip');
			var cst = $('#cst-vip');
			var name = tr.eq(1).children('input').val();
			base.find('#name').text(name);
			base.find('#vipid').text(tr.eq(2).text());
			cst.find('#vipid').text(tr.eq(2).text());
			base.find('#gender').text(tr.eq(3).text());
			base.find('#age').text(tr.eq(4).text());
			base.find('#phonenumber').text(tr.eq(5).text());
			base.find('#sch').text(tr.eq(6).text());
			base.find('#job').text(tr.eq(7).text());
			//base.children('parch').text(tr.eq(9).text());
			cst.find('#regp').text(tr.eq(9).text());
			base.find('#city').text(tr.eq(12).text());
			$('#base-vip').show();
			$('#base-unvip').hide();
		}else{
			var base = $('#base-unvip');
			var cst = $('#cst-unvip');
			base.find('#name').text(tr.eq(1).children('input').val());
			base.find('#gender').text(tr.eq(3).text());
			base.find('#age').text(tr.eq(4).text());
			base.find('#phonenumber').text(tr.eq(5).text());
			base.find('#sch').text(tr.eq(6).text());
			base.find('#job').text(tr.eq(7).text());
			//base.children('parch').text(tr.eq(9).text());
			base.find('#city').text(tr.eq(12).text());
			$('#base-vip').hide();
			$('#base-unvip').show();
		}
    });
    //返回按钮
    client_info.find(".return").click(function () {
        $(".change_sheet").show();
        client_table.show();
        client_table.siblings(".client_container").hide();
    });


});
function scrollToEnd(){//滚动到底部
    var h = $(document).height()-$(window).height();
    $(document).scrollTop(h);
}

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
		$("#population").load("lifecycle/consumptionCoefficientChart.html?"+new Date().getTime());
	}
}

function gameRocordEx(msg){
	if(msg=="info"){
		$("#game-record-info").css("display","block");
		$(".game-info-name").css("color","#00a9e0");
		$("#game-record-ex").css("display","none");
		$(".game-info-date").css("color","#000");
	}else{
		$("#game-record-info").css("display","none");
		$(".game-info-name").css("color","#000");
		$("#game-record-ex").css("display","block");
		$(".game-info-date").css("color","#00a9e0");
	}
}



function exparent(id){
	//debugger;
	var arr = ['record','selplan','relcont'];
	for(var i =0;i<arr.length;i++){
		if(arr[i]==id){
			$('#'+arr[i]).css('display','block');
		}else{
			$('#'+arr[i]).css('display','none');
		}
	}
}
$(function(){
	$(".single-baseinfo-record-sort").children('div').on("click",function(){
		debugger;
		$(this).parent().children("div").removeClass("single-baseinfo-record-sort-selected");
		//$(this).attr("class","single-baseinfo-record-sort-selected");
		$('#record').find('.single-baseinfo-record-list').css('display','none');
		if($(this).text()=='电话记录'){
			
			$('.single-baseinfo-record-list#phonerecord').css('display','block');
			$(this).addClass("single-baseinfo-record-sort-selected");
			return;
		}
		if($(this).text()=='短信记录'){
			//$('.single-baseinfo-record-list').css('display','none');
			$('.single-baseinfo-record-list#msgrecord').css('display','block');
			$(this).addClass("single-baseinfo-record-sort-selected");
			return;
		}
		
		if($(this).text()=='客户来访记录'){
			//$('.single-baseinfo-record-list').css('display','none');
			$('.single-baseinfo-record-list#vstrecord').css('display','block');
			$(this).addClass("single-baseinfo-record-sort-selected");
			return;
		}
		
		if($(this).text()=='微信动态'){
			//$('.single-baseinfo-record-list').css('display','none');
			$('.single-baseinfo-record-list#wxstatus').css('display','block');
			$(this).addClass("single-baseinfo-record-sort-selected");
			return;
		}
	})
})

function exvip(obj){
	//debugger;
	if($(obj).css('class')=='active'){
		return;
	}else{
		if($('#base-vip').is(":hidden")){
			$('#cst-vip').hide();
			$('#cst-unvip').show();
		}else{
			$('#cst-vip').show();
		$('#cst-unvip').hide();
		}
	}
}


