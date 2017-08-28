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
        data:['各会员等级消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['铁牌会员','铜牌会员','银牌会员','金牌会员','钻石会员','皇冠会员']
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
            name:'各会员等级消费占比',
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
            name:'各会员等级消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'铁牌会员'},
                {value:251, name:'铜牌会员'},
                {value:147, name:'银牌会员'},
                {value:102, name:'金牌会员'},
                {value:102, name:'钻石会员'},
                {value:102, name:'皇冠会员'}
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
        data:['不同会龄消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1年以内','1-2年','2-3年','3-5年','5年以上']
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
            name:'不同会龄消费占比',
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
            name:'不同会龄消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1年以内'},
                {value:251, name:'1-2年'},
                {value:147, name:'2-3年'},
                {value:102, name:'3-5年'},
                {value:102, name:'5年以上'}
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
        data:['不同积分值消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['100分以内','101-500分','501-1000分','1001-2000分','2001分以上']
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
            name:'不同积分值消费占比',
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
            name:'不同积分值消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'100分以内'},
                {value:251, name:'101-500分'},
                {value:147, name:'501-1000分'},
                {value:102, name:'1001-2000分'},
                {value:102, name:'2001分以上'}
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
        data:['不同首购金额消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1000元以下','1001-5000元','5001-10000元','10001-20000元','20001-50001元','50001-10万元','10万以上']
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
            name:'不同首购金额消费占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30, 70]
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
            name:'不同首购金额消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1000元以下'},
                {value:251, name:'1001-5000元'},
                {value:147, name:'5001-10000元'},
                {value:102, name:'10001-20000元'},
                {value:102, name:'20001-50001元'},
                {value:102, name:'50001-10万元'},
                {value:102, name:'10万以上'}
            ]
        }
    ]
};

optionbar31 =  {
    title: {
        text: '首购商品'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '首购商品',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "钻石戒指女戒",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "钻石对戒",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "钻石项链",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "黄金吊坠",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "黄金婚嫁套装",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "碧玺吊坠",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "金镶玉吊坠",
                value: 1898,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "和田玉手镯",
                value: 1484,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "碎钻耳钉",
                value: 1112,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "金条",
                value: 965,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "金币",
                value: 847,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "元宝",
                value: 582,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "珍珠项链",
                value: 555,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "珍珠吊坠",
                value: 550,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "珍珠耳饰",
                value: 462,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "黄金生肖",
                value: 366,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "黄金财神",
                value: 360,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
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
        data:['不同购买动机额消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['自我犒赏','节俗性需求','结婚','生日','社交赠礼','投资']
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
            name:'不同购买动机额消费占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30, 70]
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
            name:'不同购买动机额消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'自我犒赏'},
                {value:251, name:'节俗性需求'},
                {value:147, name:'结婚'},
                {value:102, name:'生日'},
                {value:102, name:'社交赠礼'},
                {value:102, name:'投资'}
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
        data:['不同消费总额消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1000元以下','1001-5000元','5001-10000元','10001-20000元','20001-50001元','50001-10万元','10万以上']
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
            name:'不同消费总额消费占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30, 70]
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
            name:'不同消费总额消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1000元以下'},
                {value:251, name:'1001-5000元'},
                {value:147, name:'5001-10000元'},
                {value:102, name:'10001-20000元'},
                {value:102, name:'20001-50001元'},
                {value:102, name:'50001-10万元'},
                {value:102, name:'10万以上'}
            ]
        }
    ]
};
optionbar42 = {
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
        data:['不同消费频次消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['一年3次以上','一年2次','一年一次','两年一次','三年以上一次']
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
            name:'不同消费频次消费占比',
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
            name:'不同消费频次消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'一年3次以上'},
                {value:251, name:'一年2次'},
                {value:147, name:'一年一次'},
                {value:102, name:'两年一次'},
                {value:102, name:'三年以上一次'}
            ]
        }
    ]
};

optionbar51 = {
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
        data:['不同客单价消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1k以下','1k-3k','3k-5k','10k以上']
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
            name:'不同客单价消费占比',
            type:'bar',
            data:[320, 332, 301, 120, 90, 30, 70]
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
            name:'不同客单价消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1k以下'},
                {value:251, name:'1k-3k'},
                {value:147, name:'3k-5k'},
                {value:102, name:'5k-10k'},
                {value:102, name:'10k以上'}
            ]
        }
    ]
};
optionbar52 = {
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
        data:['不同提篮数消费占比']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['1件','2件','3件','4件','5件','6件以上']
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
            name:'不同提篮数消费占比',
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
            name:'不同提篮数消费占比',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            data:[
                {value:1048, name:'1件'},
                {value:251, name:'2件'},
                {value:147, name:'3件'},
                {value:102, name:'4件'},
                {value:102, name:'5件'},
                {value:102, name:'6件以上'}
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
//myChart31.setOption(optionbar31);
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



