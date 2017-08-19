(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $("#main").load("client_chart.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $("#main").load("client_chart.html");
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
	$("#main").html("");
}
function gotoWorkPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#course").load("criclework/biaotou.html");
	$("#main").load("criclework/management.html");
}

function gotoContact(){
    $("#azen-header").load("criclework/con_bt.html");
	$("#main").load("criclework/contact.html");
}

function gotoEmp(){
    $("#azen-header").load("criclework/emp_bt.html");
	$("#main").load("criclework/employee.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}