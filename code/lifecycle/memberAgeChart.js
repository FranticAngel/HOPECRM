(function ($) {
optionbar11 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['各年龄消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['18-25岁','26-30岁','31-35岁','36-40岁','41-50岁','50岁以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left'
        }
    ],
    series : [
        {
            name:'各年龄消费占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30]
        },

        {
            center: [400,120],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            name:'各年龄消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'18-25岁'},
                {value:251, name:'26-30岁'},
                {value:147, name:'31-35岁'},
                {value:102, name:'36-40岁'},
                {value:102, name:'41-50岁'},
                {value:102, name:'50岁以上'}
            ]
        }
    ]
};

optionbar12 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['不同学历消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['18-25岁','26-30岁','31-35岁','36-40岁','41-50岁','50岁以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left'
        }
    ],
    series : [
        {
            name:'不同学历消费人群',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30]
        },

        {
            center: [400,120],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            name:'不同学历消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'18-25岁'},
                {value:251, name:'26-30岁'},
                {value:147, name:'31-35岁'},
                {value:102, name:'36-40岁'},
                {value:102, name:'41-50岁'},
                {value:102, name:'50岁以上'}
            ]
        }
    ]
};            
		
optionbar21 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['不同城市消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['18-25岁','26-30岁','31-35岁','36-40岁','41-50岁','50岁以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left'
        }
    ],
    series : [
        {
            name:'不同城市消费人群',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30]
        },

        {
            center: [400,120],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            name:'不同城市消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'18-25岁'},
                {value:251, name:'26-30岁'},
                {value:147, name:'31-35岁'},
                {value:102, name:'36-40岁'},
                {value:102, name:'41-50岁'},
                {value:102, name:'50岁以上'}
            ]
        }
    ]
};		
optionbar22 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['不同职业消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['18-25岁','26-30岁','31-35岁','36-40岁','41-50岁','50岁以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'left'
        }
    ],
    series : [
        {
            name:'不同职业消费人群',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30]
        },

        {
            center: [400,120],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            name:'不同职业消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'18-25岁'},
                {value:251, name:'26-30岁'},
                {value:147, name:'31-35岁'},
                {value:102, name:'36-40岁'},
                {value:102, name:'41-50岁'},
                {value:102, name:'50岁以上'}
            ]
        }
    ]
};

var myChart11 = echarts.init(document.getElementById('bar11'));
myChart11.setOption(optionbar11);
var myChart12 = echarts.init(document.getElementById('bar12'));
myChart12.setOption(optionbar12);
var myChart21 = echarts.init(document.getElementById('bar21'));
myChart21.setOption(optionbar21);
var myChart22 = echarts.init(document.getElementById('bar22'));
myChart22.setOption(optionbar22);

})(jQuery);

