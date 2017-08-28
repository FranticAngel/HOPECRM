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
        data:['各信用度消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['高','中','低']
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
            name:'各信用度消费占比',
            type:'bar',
            data:[320, 332, 301]
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
            name:'各信用度消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'高'},
                {value:251, name:'中'},
                {value:147, name:'低'}
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
        data:['各忠诚度消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['高','中','低']
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
            name:'各忠诚度消费占比',
            type:'bar',
            data:[320, 332, 301]
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
            name:'各忠诚度消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'高'},
                {value:251, name:'中'},
                {value:147, name:'低'}
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
        data:['不同满意度占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['不满意','基本满意','满意','很满意','非常满意']
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
            name:'不同满意度占比',
            type:'bar',
            data:[320, 332, 301, 120, 90]
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
            name:'不同满意度占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'不满意'},
                {value:251, name:'基本满意'},
                {value:147, name:'满意'},
                {value:102, name:'很满意'},
                {value:102, name:'非常满意'}
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
        data:['不同推荐值占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1分','2分','3分','4分','5分','6分','7分','8分','9分','10分']
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
            name:'不同推荐值占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30, 70, 50, 30]
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
            name:'不同推荐值占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1分'},
                {value:251, name:'2分'},
                {value:147, name:'3分'},
                {value:102, name:'4分'},
                {value:102, name:'5分'},
                {value:102, name:'6分'},
                {value:102, name:'7分'},
                {value:102, name:'8分'},
                {value:102, name:'9分'},
                {value:102, name:'10分'}
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

