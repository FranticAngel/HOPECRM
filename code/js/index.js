(function ($) {
	
})(jQuery);

function gotoProductLifeCyclePage(){
	$("#sliders").html("");
	$("#main").load("lifecycle/productLifeCycle.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}