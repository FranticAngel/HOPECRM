(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html");
<<<<<<< HEAD
    $("#course").html("");
=======
>>>>>>> 7cd188f36b1e1e79a35a27ea29a52bac47184102
    $("#main").load("client_chart.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html");
<<<<<<< HEAD
    $("#course").html("");
=======
>>>>>>> 7cd188f36b1e1e79a35a27ea29a52bac47184102
    $("#main").load("client_chart.html");
}
function gotoProductLifeCyclePage(){
	$("#sliders").html("");
<<<<<<< HEAD
    $("#course").html("");
=======
>>>>>>> 7cd188f36b1e1e79a35a27ea29a52bac47184102
	$("#main").load("lifecycle/productLifeCycle.html");
}
function gotoMemberLifeCyclePage(){
	$("#sliders").html("");
<<<<<<< HEAD
    $("#course").html("");
=======
>>>>>>> 7cd188f36b1e1e79a35a27ea29a52bac47184102
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