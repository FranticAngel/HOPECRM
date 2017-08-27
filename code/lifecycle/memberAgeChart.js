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
            data : ['小学','初中','高中','中专/技校','大专','本科','硕士','博士','其他']
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
            data:[320, 332, 301, 120, 90, 30, 90, 30, 90]
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
                {value:1048, name:'小学'},
                {value:251, name:'初中'},
                {value:147, name:'高中'},
                {value:102, name:'中专/技校'},
                {value:102, name:'大专'},
                {value:102, name:'本科'},
                {value:102, name:'硕士'},
                {value:102, name:'博士'},
                {value:102, name:'其他'}
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
            data : ['深圳','广州','香港','上海','北京','南京']
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
                {value:1048, name:'深圳'},
                {value:251, name:'广州'},
                {value:147, name:'香港'},
                {value:102, name:'上海'},
                {value:102, name:'北京'},
                {value:102, name:'南京'}
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
            data : ['国家机关','党群组织','企业','事业单位负责人','专业技术人员','办事人员','商业','服务业人员','农林牧渔水利业生产人员','生产','军人']
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
            data:[320, 332, 301, 120, 90, 30, 70, 50, 30, 30]
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
                {value:1048, name:'国家机关'},
                {value:251, name:'党群组织'},
                {value:147, name:'企业'},
                {value:102, name:'事业单位负责人'},
                {value:102, name:'专业技术人员'},
                {value:102, name:'办事人员'},
                {value:102, name:'商业'},
                {value:102, name:'服务业人员'},
                {value:102, name:'农林牧渔水利业生产人员'},
                {value:102, name:'生产'},
                {value:102, name:'军人'}
            ]
        }
    ]
};
		
optionbar31 = {
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
        data:['不同性别消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['男','女']
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
            name:'不同性别消费人群',
            type:'bar',
            data:[80, 30]
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
            name:'不同性别消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'男'},
                {value:251, name:'女'}
            ]
        }
    ]
};		
optionbar32 = {
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
        data:['不同价值取向消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['象征性价值观','体验性价值观','享乐型价值观','经济型价值观','功能型价值观']
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
            name:'不同价值取向消费人群',
            type:'bar',
            data:[ 301, 120, 90, 30, 70]
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
            name:'不同价值取向消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'象征性价值观'},
                {value:251, name:'体验性价值观'},
                {value:147, name:'享乐型价值观'},
                {value:102, name:'经济型价值观'},
                {value:102, name:'功能型价值观'}
            ]
        }
    ]
};

optionbar41 = {
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
        data:['不同个人月收入消费人群']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['5000元以下','5001-8000元','8001-12000元','12001-20000元','20001元以上']
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
            name:'不同个人月收入消费人群',
            type:'bar',
            data:[332, 301, 120, 90, 30]
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
            name:'不同个人月收入消费人群',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'5000元以下'},
                {value:251, name:'5001-8000元'},
                {value:251, name:'8001-12000元'},
                {value:251, name:'12001-20000元'},
                {value:251, name:'20001元以上'}
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
var myChart31 = echarts.init(document.getElementById('bar31'));
myChart31.setOption(optionbar31);
var myChart32 = echarts.init(document.getElementById('bar32'));
myChart32.setOption(optionbar32);
var myChart41 = echarts.init(document.getElementById('bar41'));
myChart41.setOption(optionbar41);

})(jQuery);

