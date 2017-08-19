(function ($) {


option = {
    title : {
        text: '会员生命周期走势图'
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
            type : 'value'
        }
    ],
    series : [
        {
            name:'当前价值',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[10, 250, 51, 254, 10, 130, 50, 190, 50]
        },
        {
            name:'历史价值',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[20, 150, 31, 104, 50, 180, 70, 150, 80]
        },
        {
            name:'潜在价值',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 130, 11, 134, 70, 150, 60, 200, 20]
        }
    ]
};
                    
var myChart = echarts.init(document.getElementById('mainContainer'));
myChart.setOption(option);


})(jQuery);

