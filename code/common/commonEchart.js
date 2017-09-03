(function ($) {


var hours = ['黄金', '钻石', 'k金', '铂金', '珍珠', '银', '宝石'];
var days = ['戒指', '项链', '吊坠',
        '耳环', '手链，脚链', '手镯'];

var data = [[1,6,09],[1,5,05],[1,4,10],[1,3,25],[1,2,20],[1,1,60],[1,0,60],
			[2,6,84],[2,5,32],[2,4,80],[2,3,25],[2,2,33],[2,1,30],[2,0,78],
			[3,6,52],[3,5,50],[3,4,13],[3,3,20],[3,2,45],[3,1,60],[3,0,37],
			[4,6,93],[4,5,89],[4,4,40],[4,3,26],[4,2,56],[4,1,20],[4,0,90],
			[5,6,20],[5,5,83],[5,4,24],[5,3,20],[5,2,87],[5,1,60],[5,0,13]];
option = {
	title: {
        text: '商品购买率与平均值之差'
    },
    tooltip: {},
    visualMap: {
        max: 100,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
		name : '品类',
        type: 'category',
        data: hours
    },
    yAxis3D: {
		name : '饰品',
        type: 'category',
        data: days
    },
    zAxis3D: {
		name : '销量',
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'color',

        label: {
            show: false,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        
        itemStyle: {
            opacity: 0.4
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}
var myChart = echarts.init(document.getElementById('mainContainer'));
myChart.setOption(option);


})(jQuery);

