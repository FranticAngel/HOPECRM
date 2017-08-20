$(function(){
	$("#flush_info").on("click",function(){
		location.reload(true);
	})
	
	$("#edit_info").on("click",function(){
		
	})
	
	$('.single-baseinfo-record-sort').children().on('click',function(){
		$(this).parent().children().removeClass();
		$(this).attr('class','single-baseinfo-record-sort-seleted')
	})
	
	$('.single-baseinfo-selection').children().on('click',function(){
		$(this).parent().children().removeClass();
		$(this).attr('class','single-baseinfo-selection-selected')
	})
})


function   exchange_info_bar(obj){
	if($(obj).attr('class')=="detail-info-sort-li"){
		$(obj).attr("class","detail-info-sort-select");
		if($(obj).prev().length==0){
			$(obj).next().attr("class","detail-info-sort-li");
			$("#baseinfo").css("display","");
			$("#baseinfo-sug").css("display","");
			$("#cstinfo").css("display","none");
			$("#cstinfo-sug").css("display","none");
			$(".single-baseinfo-bar").show();
		}else{
			$(obj).prev().attr("class","detail-info-sort-li");
			$("#baseinfo").css("display","none");
			$("#baseinfo-sug").css("display","none");
			
			$("#cstinfo").css("display","");
			$("#cstinfo-sug").css("display","");
			$(".single-baseinfo-bar").hide();
			
		}
	}
}

