(function ($) {


option = {
    title : {
        text: '会员生命周期走势图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['消费者','顾客','新增会员','活跃会员','沉默会员','休眠会员','流失会员']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'消费者',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']}}},
            data:[10, 250, 51, 254, 10, 130, 50, 190, 50, 31, 104, 50]
        },
        {
            name:'顾客',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[20, 150, 31, 104, 50, 180, 70, 150, 80, 50, 190, 50]
        },
        {
            name:'新增会员',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 130, 11, 134, 70, 150, 60, 200, 20, 31, 104, 50]
        },
        {
            name:'活跃会员',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 250, 51, 254, 10, 130, 50, 190, 50, 70, 150, 80]
        },
        {
            name:'沉默会员',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[20, 150, 31, 104, 50, 180, 70, 150, 80, 60, 200, 20]
        },
        {
            name:'休眠会员',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 130, 11, 134, 70, 150, 60, 200, 20, 50, 190, 50]
        },
        {
            name:'流失会员',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 250, 51, 254, 10, 130, 50, 190, 50, 130,190, 50]
        }
    ]
};
                    
var myChart = echarts.init(document.getElementById('mainContainer33'));
myChart.setOption(option);


})(jQuery);

