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
option = {
    color: ['#3398DB'],
	 title: {
        text: '会员生命周期走势图'
    },
    legend: {
        data:['人数']
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
            data : ['消费者', '顾客', '新会员', '活跃会员', '沉默会员', '休眠会员'],
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
            name:'会员生命周期走势图',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 250, 150]
        }
    ]
};
optionLine1 = {
    color: ['#3398DB'],
	 title: {
        text: '最近七天新增用户走势图'
    },
    legend: {
        data:['新增用户']
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
            name:'最近七天新增用户走势图',
            type:'line',
            barWidth: '60%',
            data:[40, 80, 90, 70, 88,100, 89]
        }
    ]
};
optionLine2 = {
    color: ['#3398DB'],
	 title: {
        text: '最近七天客户流量走势图'
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
            name:'最近七天客户流量走势图',
            type:'line',
            barWidth: '60%',
            data:[432, 489, 330, 490, 478, 475,432]
        }
    ]
};

optionLine3 = {
    color: ['#3398DB'],
	 title: {
        text: '最近七天成交量走势图'
    },
    legend: {
        data:['成交量']
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
            name:'最近七天成交量走势图',
            type:'line',
            barWidth: '60%',
            data:[300, 321, 350, 322, 360, 365,350]
        }
    ]
};

var myChart1 = echarts.init(document.getElementById('line1'));
var myChart2 = echarts.init(document.getElementById('line2'));
var myChart3 = echarts.init(document.getElementById('line3'));
(function ($) {
	var myChart = echarts.init(document.getElementById('mainContainer'));
	myChart.setOption(option);

	myChart1.setOption(optionLine1);
	myChart2.setOption(optionLine2);
	myChart3.setOption(optionLine3);

})(jQuery);

function changeDate(type){
	$("#startDate").hide()
	$("#endDate").hide()
	$("#query").hide()
	var dateArray = []; 
	var dataArray = []; 
	var dataArray2 = []; 
	var dataArray3 = []; 
	myDate = new Date(); //获取今天日期
	
	var option1 = myChart1.getOption();
	var option2 = myChart2.getOption();
	var option3 = myChart3.getOption();
	if(type==0){
		myDate.setDate(myDate.getDate() - 7);
		var endDate = new Date();
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-myDate.getTime())/60/60/24/1000;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text = "最近七天新增用户走势图";
		option2.title[0].text = "最近七天客户流量走势图";
		option3.title[0].text = "最近七天成交量走势图";
	}else if(type==1){
		myDate.setMonth(myDate.getMonth() - 1);
		var endDate = new Date();
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-myDate.getTime())/60/60/24/1000;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text =  "最近一个月新增用户走势图";
		option2.title[0].text =  "最近一个月客户流量走势图";
		option3.title[0].text =  "最近一个月成交量走势图";
	}else if(type==2){
		myDate.setMonth(myDate.getMonth() - 4);
		var endDate = new Date();
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-myDate.getTime())/60/60/24/1000;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text = "最近一个季度新增用户走势图";
		option2.title[0].text = "最近一个季度客户流量走势图";
		option3.title[0].text = "最近一个季度成交量走势图";
	}else if(type==3){
		myDate.setMonth(myDate.getMonth() - 6);
		var endDate = new Date();
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-myDate.getTime())/60/60/24/1000;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text =  "最近半年新增用户走势图";
		option2.title[0].text =  "最近半年客户流量走势图";
		option3.title[0].text =  "最近半年成交量走势图";
	}else if(type==4){
		myDate.setMonth(myDate.getMonth() - 12);
		var endDate = new Date();
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-myDate.getTime())/60/60/24/1000;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text =  "最近一年新增用户走势图";
		option2.title[0].text =  "最近一年客户流量走势图";
		option3.title[0].text =  "最近一年成交量走势图";
	}else if(type==5){
		$("#startDate").show()
		$("#endDate").show()
		$("#query").show()
		return;
	}else if(type==100){
		$("#startDate").show()
		$("#endDate").show()
		$("#query").show()
		var startDate = formateDate($("#startDate").val());
		var endDate = formateDate($("#endDate").val());
		myDate = startDate;	
		var dateTemp; 
		var flag = 1; 
		var size = (endDate.getTime()-startDate.getTime())/60/60/24/1000+1;
		for (var i = 0; i < size; i++) {
			dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
			dateArray.push(dateTemp);
			dataArray.push(parseInt(Math.random()*100));
			dataArray2.push(parseInt(Math.random()*1000));
			dataArray3.push(parseInt(Math.random()*10000));
			myDate.setDate(myDate.getDate() + flag);
		}
		option1.title[0].text = "时间范围新增用户走势图";
		option2.title[0].text = "时间范围客户流量走势图";
		option3.title[0].text = "时间范围成交量走势图";
	}
	
	option1.xAxis[0].data = dateArray;
	option1.series[0].data = dataArray;
	myChart1.setOption(option1);
	option2.xAxis[0].data = dateArray;
	option2.series[0].data = dataArray2;
	myChart2.setOption(option2);
	option3.xAxis[0].data = dateArray;
	option3.series[0].data = dataArray3;
	myChart3.setOption(option3);
}
function formateDate(fDate){
    var fullDate = fDate.split("-");
    return new Date(fullDate[0], fullDate[1]-1, fullDate[2], 0, 0, 0);  
} 