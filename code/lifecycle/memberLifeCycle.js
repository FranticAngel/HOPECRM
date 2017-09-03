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
option =  {
    title : {
        text: '现有会员生命周期阶段形态',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['新会员', '活跃会员', '沉默会员', '休眠会员','流失会员']
    },
    calculable : true,
    series : [
        {
            name:'会员类型占比',
            type:'pie',
            radius : '55%',
            center: ['50%', 225],
            data:[
                {value:335, name:'新会员'},
                {value:310, name:'活跃会员'},
                {value:234, name:'沉默会员'},
                {value:135, name:'休眠会员'},
                {value:38, name:'流失会员'}
            ]
        }
    ]
};
option2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type: 'shadow'
        }
    },
    legend: {
        data:['新会员', '活跃会员', '沉默会员', '休眠会员','流失会员']
    },
    toolbox: {
        show : true,
        orient : 'vertical',
        y : 'center',
        feature : {
            mark : {show: true},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitArea : {show : true}
        }
    ],
    grid: {
        x2:40
    },
    series : [
        {
            name:'新会员',
            type:'bar',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'活跃会员',
            type:'bar',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'沉默会员',
            type:'bar',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'休眠会员',
            type:'bar',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'流失会员',
            type:'bar',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
optionLine1 = {
    color: ['#3398DB'],
	 title: {
        text: '最近七天新增用户走势图'
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
			name : '单位：人',
            type : 'value'
        }
    ],
    series : [
        {
            name:'新增用户',
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
			name : '单位：人',
            type : 'value'
        }
    ],
    series : [
		{
            name:'客户流量',
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
			name : '单位：万',
            type : 'value'
        }
    ],
    series : [
		{
            name:'成交量',
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
	var main1 = echarts.init(document.getElementById('main1'));
	main1.setOption(option);
	var main2 = echarts.init(document.getElementById('main2'));
	main2.setOption(option2);

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