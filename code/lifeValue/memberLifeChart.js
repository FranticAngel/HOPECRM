(function ($) {


option = {
    title : {
        text: '高忠诚客户终生价值'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['当前价值','历史价值','潜在价值']
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
            data : ['','苛刻的顾客','','犹豫不决的顾客','','纠结世故的顾客','','群众','']
        }
    ],
    yAxis : [
        {
			name:'单位：人',
            type : 'value'
        }
    ],
    series : [
        {
            name:'当前价值',
            type:'line',
            smooth:true,
			color: ['#00A9E0'],
            itemStyle: {normal: {areaStyle: {color: ['#00A9E0']}}},
            data:[10, 250, 51, 254, 10, 130, 50, 190, 50]
        },
        {
            name:'历史价值',
            type:'line',
            smooth:true,
			color: ['#FE8463'],
            itemStyle: {normal: {areaStyle: {color: ['#FE8463']}}},
            data:[20, 150, 31, 104, 50, 180, 70, 150, 80]
        },
        {
            name:'潜在价值',
            type:'line',
            smooth:true,
			color: ['#C6E579'],
            itemStyle: {normal: {areaStyle: {color: ['#C6E579']}}},
            data:[30, 130, 11, 134, 70, 150, 60, 200, 20]
        }
    ]
};
                    
var myChart = echarts.init(document.getElementById('mainContainer33'));
myChart.setOption(option);


})(jQuery);

