(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#course").html("#");
    $("#main").load("client_chart.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#course").html("#");
    $("#main").load("client_chart.html");
}
function gotoProductLifeCyclePage(){
	$("#sliders").html("#");
    $("#course").html("#");
	$("#main").load("lifecycle/productLifeCycle.html");
}
function gotoMemberLifeCyclePage(){
	$("#sliders").html("#");
    $("#course").html("#");
	$("#main").load("lifecycle/memberLifeCycle.html");
}
function gotoWorkPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#course").load("criclework/biaotou.html");
	$("#main").load("criclework/management.html");
}

function gotoContact(){
    $("#azen-header").load("criclework/2.html");
	$("#main").load("criclework/contact.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}