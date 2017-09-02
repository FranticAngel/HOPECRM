function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}
(function ($) {
optionbar11 = {
	 title: {
        x: 'center',
        text: '会员等级'
    },
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
        data:['会员等级']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['铁牌会员','铜牌会员','银牌会员','金牌会员','钻石会员','皇冠会员']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30]
        }
    ]
};

optionbar12 = {
	 title: {
        x: 'center',
        text: '会龄'
    },
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
        data:['不同会龄消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['1年以内','1-2年','2-3年','3-5年','5年以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90]
        }
    ]
};            
		
optionbar21 = {
	 title: {
        x: 'center',
        text: '会员积分'
    },
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
        data:['会员积分']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['100分以内','101-500分','501-1000分','1001-2000分','2001分以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90]
        }
    ]
};		
optionbar22 = {
	 title: {
        x: 'center',
        text: '首购金额'
    },
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
        data:['首购金额']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['1000元以下','1001-5000元','5001-10000元','10001-20000元','20001-50001元','50001-10万元','10万以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30, 70]
        }
    ]
};

optionbar31 =  {
    title : {
        text: '首购商品',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'品牌总提及',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:100, name:'钻石戒指'},
                {value:90, name:'女戒'},
                {value:80, name:'钻石对戒'},
                {value:85, name:'钻石项链'},
                {value:70, name:'黄金吊坠'},
                {value:75, name:'黄金婚嫁套装'},
                {value:60, name:'碧玺吊坠'},
                {value:64, name:'金镶玉吊坠'},
                {value:62, name:'和田玉手镯'},
                {value:61, name:'碎钻耳钉'},
                {value:54, name:'金条'},
                {value:50, name:'金币'},
                {value:42, name:'元宝'},
                {value:43, name:'珍珠项链'},
                {value:46, name:'珍珠吊坠'},
                {value:40, name:'珍珠耳饰'},
                {value:30, name:'黄金生肖'},
                {value:20, name:'黄金财神'},
                {value:10, name:'转运珠'}
            ]
        }
    ]
};

optionbar32 = {
    title: {
        x: 'center',
        text: '购买动机'
    },
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
        data:['购买动机']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['自我犒赏','节俗性需求','结婚','生日','社交赠礼','投资']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30, 70]
        }
    ]
};

optionbar41 = {
    title: {
        x: 'center',
        text: '消费总额'
    },
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
        data:['消费总额']
    },
    xAxis : [
        {
            type : 'category',
			show: false,
            splitLine : {show : false},
            data : ['1000元以下','1001-5000元','5001-10000元','10001-20000元','20001-50001元','50001-10万元','10万以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30, 70]
        }
    ]
};
optionbar42 = {
    title: {
        x: 'center',
        text: '消费频次'
    },
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
        data:['消费频次']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['一年3次以上','一年2次','一年一次','两年一次','三年以上一次']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30]
        }
    ]
};

optionbar51 = {
    title : {
        text: '消费态度',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'品牌总提及',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:100, name:'完美型'},
                {value:90, name:'价值认知型'},
                {value:80, name:'品牌认知型'},
                {value:85, name:'流行认知型'},
                {value:70, name:'时间节省型'},
                {value:75, name:'资讯困扰型'},
                {value:60, name:'享乐主义型'},
                {value:64, name:'习惯型'}
            ]
        }
    ]
};
optionbar52 = {
    title: {
        x: 'center',
        text: '提篮数'
    },
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
        data:['提篮数']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['1件','2件','3件','4件','5件','6件以上']
        }
    ],
    yAxis : [
        {
            type : 'value',
			show: false,
            position: 'left'
        }
    ],
    series : [
        {
            name:'消费',
            type:'bar',
			itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data:[320, 332, 301, 120, 90, 30]
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
var myChart42 = echarts.init(document.getElementById('bar42'));
myChart42.setOption(optionbar42);
var myChart51 = echarts.init(document.getElementById('bar51'));
myChart51.setOption(optionbar51);
var myChart52 = echarts.init(document.getElementById('bar52'));
myChart52.setOption(optionbar52);

})(jQuery);



