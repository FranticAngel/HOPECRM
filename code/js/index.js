(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#main").load("client_chart.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html");
    $("#main").load("client_chart.html");
}
function gotoProductLifeCyclePage(){
	$("#sliders").html("");
	$("#main").load("lifecycle/productLifeCycle.html");
}
function gotoMemberLifeCyclePage(){
	$("#sliders").html("");
	$("#main").load("lifecycle/memberLifeCycle.html");
}
function gotoWorkPage(){
	$("#sliders").load("common/commonEchart.html");
	$("#main").load("criclework/management.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}