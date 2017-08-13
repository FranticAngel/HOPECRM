(function ($) {

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
            data:[10, 52, 200, 334, 390, 330]
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
            data:[10, 52, 200, 334, 390,22, 330]
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
            data:[10, 52, 200, 334, 390, 330,33]
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
            data:[10, 52, 200, 334, 390, 330,33]
        }
    ]
};
var myChart = echarts.init(document.getElementById('mainContainer'));
myChart.setOption(option);

var myChart1 = echarts.init(document.getElementById('line1'));
myChart1.setOption(optionLine1);

var myChart2 = echarts.init(document.getElementById('line2'));
myChart2.setOption(optionLine2);
var myChart3 = echarts.init(document.getElementById('line3'));
myChart3.setOption(optionLine3);

})(jQuery);

