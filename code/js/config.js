/**
 * Created by Administrator on 2017/8/26.
 */

/*
*
* 工作圈  设置页面js
* */

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
    var config_container_div = $(".config_container_div");
    config_container_div.on('click','.blue_input',function () {
        $(this).toggleClass("blue_input_checked");
    });
    var config_0=$("#config_0");
    config_0.on('click',".depart",function () {//选中效果切换
        if ( !$(this).hasClass("active")){
            $(".depart").find(".operation").appendTo($(this).find("div"));
            $(this).addClass("active");
            $(this).siblings(".depart").removeClass("active");
            showTableRows();
        }
    });
    config_0.on('click','.blue_input',function (e) {//单选框选中效果
        $(this).toggleClass("blue_input_checked");
        if($(this).attr('id')==="select_all"){
            if($(this).hasClass("blue_input_checked")){
                config_0.find('.blue_input').removeClass('blue_input_checked').addClass('blue_input_checked');
            }else {
                config_0.find('.blue_input').removeClass('blue_input_checked');
            }
        }
        var selected_num =config_0.find('.blue_input_checked').filter("[id!='select_all']").length;
        $(".selected_num").text(selected_num);//显示被选中数目
        e.stopPropagation();
    });


    var config_1=$("#config_1");
    config_1.on('click',".depart",function () {//单选框选中效果
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
    config_3.find(".yellow_btn").on('click',function () {//编辑保存按钮
        config_3.find(".config_option_tile:gt(0),.hint").toggleClass('edit_hide');
        if($(this).text()==="编辑"){
            $(this).text("保存");
        }else {
            $(this).text("编辑");
        }
    });

    var config_4 =$("#config_4");
    config_4.find(".yellow_btn").on('click',function () {//编辑保存按钮
        config_4.find(".config_option_tile,.hint").toggleClass('edit_hide');
        if($(this).text()==="编辑"){
            $(this).text("保存");
        }else {
            $(this).text("编辑");
        }
    });

    /*部门用户权限按钮*/
    //删除按钮
    config_container_div.on('click',".del",function () {
        if(window.confirm("确定删除?") ){
            if ($(this).parent().parent().hasClass("company_name")){
                $(this).parent().parent().parent().fadeOut(300);
            }else {
                $(this).parent().parent().siblings(".depart").fadeOut(300);
                $(this).parent().parent().parent().fadeOut(300);
            }
        }
    });
    //下载按钮
    config_container_div.on('click',".download",function () {
        var str = "栏位1,栏位2,栏位3\n值1,值2,值3";
        str =  encodeURIComponent(str);
        var link = document.getElementById("download");
        link.className="download";
        link.href = 'data:attachment/csv,' + str;
        link.target = '_blank';
        link.download =$(this).parent().parent().text().replace(/[\n]/g,"").replace(/[ ]/g,"")+".csv";
        link.click();
    });
    //编辑按钮
    config_container_div.on('click',".edit",function () {
        var title_div = $(this).parent().parent();
        if(title_div.find("input").length===0){
            var title_label = title_div.find("label");
            var text = title_label.text();
            title_label.html('<input class="td_edit" style="width: 140px" type="text" value="'+text+'" />').find('input').focus().blur(function(){
                var input_text = $(this).val();
                if(input_text.length!==0){
                    title_label.html(input_text);
                }

            });
        }
    });
    //新增按钮
    config_container_div.on('click',".add",function () {
       var new_depart_html = '<div class="depart new_depart"><div><label><input class="td_edit" style="width: 140px" type="text" value="" /></label></div></div>';
       if(config_container_div.find(".new_depart").length===0){
           var config_0=$("#config_0");
           config_0.find(".depart").eq(-1).after(new_depart_html);
           config_0.find(".new_depart").find('input').blur(function() {
               var input_text = $(this).val();
               if (input_text.length !== 0) {
                   $(this).parent().html(input_text);
               }
           })
       }
    });


    /*部门用户*/
    function generateRow(input_text,type) {
        var html= '<tr>\
            <td><div class="blue_input"></div></td>\
            <td>{0}</td>\
            <td>{1}</td>\
            <td>{2}</td>\
            <td>超级管理员</td>\
            <td>营销主管</td>\
            <td>{3}</td>\
            <td>产品部</td>\
            <td>{4}</td>\
            </tr>';
        if(type==="random"){
            return html.format(getName(),getGender(),getMobile(),$("#config_0").find(".active").find("label").text(),getTime("random"));
        }else if(type==="new"){
            return html.replace("<tr>","<tr class='new_row'>");
        }else if(type==="random_name"){
            return html.format(input_text,getGender(),getMobile(),$("#config_0").find(".active").find("label").text(),getTime("random"));
        }else if(type==="random_mobile"){
            return html.format(getName(),getGender(),input_text,$("#config_0").find(".active").find("label").text(),getTime("random"));
        }
    }

    function showTableRows() {
        var html="";
        for (var i=0;i<10;i++){
            html+= generateRow("","random");
        }
        $("#config_0").find("tbody").html(html);
    }
    showTableRows();

    //新增用户记录
    config_0.find(".add_user").on('click',function () {
        config_0.find("tbody").append(generateRow("","new"));
        $(".new_row td:not(td:first-child)").addClass('input').html('<input class="td_edit" type="text" value="" />');
        scrollToEnd()
    });
    //查询
    config_0.find(".query").on('click',function () {
        var input_text = $(".query").parent().find("input").val();
        switch (input_text.length){
            case 0:
                config_0.find("tbody").html("");
                config_0.find(".am-cf").before("<div style='margin-left:20px;'>没有相关用户</div>");
                config_0.find(".am-cf").remove();
                break;
            case 3:
                config_0.find("tbody").html(generateRow(input_text,"random_name"));
                break;
            case 11:
                config_0.find("tbody").html(generateRow(input_text,"random_mobile"));
        }
    });





    /*新增复制角色*/
    //新增按钮
    config_container_div.on('click',".add_user",function () {
        var new_depart_html = '<div class="depart new_depart"><div><label><input class="td_edit" style="width: 140px" type="text" value="" /></label></div></div>';
        if($(this).hasClass("copy")){
            config_container_div.find(".new_depart").removeClass("new_depart");
            new_depart_html = '<div class="depart new_depart"><div><label>'+$("#config_1").find(".active").find("lable").text()+'的复制</label></div></div>';
        }

        if(config_container_div.find(".new_depart").length===0){
            var config_1 = $("#config_1");
            config_1.find(".depart").eq(-1).after(new_depart_html);
            config_1.find(".new_depart").find('input').blur(function() {
                var input_text = $(this).val();
                if (input_text.length !== 0) {
                    $(this).parent().html(input_text);
                }
            })
        }
    });

    config_3.find(".config_option_tile").eq(0).find("img").on('click',function () {//上传效果
        $("[type='file']").click();
    })

});