(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $("#main").load("client.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $("#main").load("client.html");
}
function gotoProductLifeCyclePage(){
	$("#sliders").html("");
    $("#course").html("");
	$("#main").load("lifecycle/productLifeCycle.html?"+new Date().getTime());
}
function gotoMemberLifeCyclePage(){
	$("#sliders").load("lifecycle/memberLifeChart.html?"+new Date().getTime());
    $("#course").html("");
	$("#main").load("lifecycle/memberLifeCycle.html?"+new Date().getTime());
}
function gotoMemberAgeChart(){
	$("#sliders").html("");
    $("#course").html("");
	$("#main").load("lifecycle/memberAgeChart.html?"+new Date().getTime());
}
function gotoMemberLifeChart(){
	$("#sliders").load("lifeValue/memberLifeChart.html?"+new Date().getTime());
    $("#course").html("");
	$("#main").load("lifeValue/lifeChart.html");
}
function gotoWorkPage(){
    $("#course").load("criclework/top/management_top.html");
	$("#main").load("criclework/management.html");
}

function gotoContact(){
    $("#course").load("criclework/top/contact_top.html");
	$("#main").load("criclework/contact.html");
}

function gotoEmp(){
    $("#course").load("criclework/top/emp_top.html");
	$("#main").load("criclework/employee.html");
}

function gotoTrends(){
    $("#course").load("criclework/top/trends_top.html");
	$("#main").load("criclework/trends.html");
}

function gotoGuhai(){
    $("#course").load("criclework/top/conguhai_top.html");
	$("#main").load("criclework/conguhai.html");
}

function gotoGhxq(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq.html");
}

function gotoConfig(){
    $("#course").load("criclework/top/config_top.html");
    $("#main").load("criclework/config.html");
}

function gotoGrxx(){
        $("#course").load("criclework/biaotou.html");
    $("#main").load("criclework/huiyuan.html");
}

function gotoGeren(){
    //$("#sliders").load("common/commonEchart.html");
    $("#sliders").html("");
    $("#course").load("criclework/biaotou.html");
    $("#main").load("criclework/huiyuan.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}