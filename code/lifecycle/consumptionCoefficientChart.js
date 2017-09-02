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
        data:['信用度','忠诚度']
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
            name:'信用度',
            type:'bar',
            data:[320, 80, 30]
        },
        {
            name:'忠诚度',
            type:'bar',
            data:[489, 149, 50]
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
            name:'信用度',
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
        data:['满意度']
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
            name:'满意度',
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
            name:'满意度',
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
optionbar21 = {
	 title: {
        x: 'center',
        text: '推荐值'
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
        data:['推荐值']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
			show: false,
            data : ['1分','2分','3分','4分','5分','6分','7分','8分','9分','10分']
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
            data:[320, 332, 301, 120, 90, 30, 70, 50, 30]
        }
    ]
};

optionbar22 =  {
    title: {
        text: '购物偏好'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:['购物偏好','高关注度商品']
    },
    radar: [
       
        {
            indicator: [
                {text: '项链', max: 100},
                {text: '戒指', max: 100},
                {text: '手镯', max: 100},
                {text: '脚链', max: 100},
                {text: '彩宝', max: 100},
                {text: '钻石', max: 100}
            ],
            center: ['50%','50%'],
            radius: 100
        }
    ],
    series: [
        {
            type: 'radar',
            radarIndex: 0,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    name: '购物偏好',
                    value: [82.6, 75.9, 69.0, 56.4, 48.7, 30.7],
                },
                {
                    name:'高关注度商品',
                    value:[72.0, 67.9, 67.0, 53.2, 45.6, 16.7]
                }
            ]
        }
    ]
};

optionbar32 = {
    title : {
        text: '品牌总提及',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['老凤祥','周大生','周生生','周大福','六福珠宝','卡地亚','潮宏基','钻石小鸟','戴梦得','谢瑞麟','金伯利钻石资']
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
                {value:50, name:'老凤祥'},
                {value:5, name:'周大生'},
                {value:15, name:'周生生'},
                {value:25, name:'周大福'},
                {value:20, name:'六福珠宝'},
                {value:35, name:'卡地亚'},
                {value:30, name:'潮宏基'},
                {value:40, name:'钻石小鸟'},
                {value:40, name:'戴梦得'},
                {value:40, name:'谢瑞麟'},
                {value:40, name:'金伯利钻石资'}
            ]
        }
    ]
};
optionbar31 = {
    title : {
        text: '品牌第一提及',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['老凤祥','周大生','周生生','周大福','六福珠宝','卡地亚','潮宏基','钻石小鸟','戴梦得','谢瑞麟','金伯利钻石资']
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
            name:'品牌第一提及',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:50, name:'老凤祥'},
                {value:5, name:'周大生'},
                {value:15, name:'周生生'},
                {value:25, name:'周大福'},
                {value:20, name:'六福珠宝'},
                {value:35, name:'卡地亚'},
                {value:30, name:'潮宏基'},
                {value:40, name:'钻石小鸟'},
                {value:40, name:'戴梦得'},
                {value:40, name:'谢瑞麟'},
                {value:40, name:'金伯利钻石资'}
            ]
        }
    ]
};


optionbar41 = {
	 title: {
        x: 'center',
        text: '信息渠道'
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
        data:['信息渠道']
    },
    xAxis : [
        {
            type : 'category',
			show: false,
            splitLine : {show : false},
            data : ['朋友介绍','自主逛街','电视广告','社交平台','品牌忠诚者']
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
optionbar51 = {
    title: {
        text: '广告记忆'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '广告记忆',
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
                name: "一生只送一人的钻戒",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "一枚婚戒，一个故事、一生一戒",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "每一颗珍珠里都筑着一个少女梦",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "And after all this time,you’re still one I love",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "经过这么长时间，你仍是我的爱人",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "爱 伴你一生，因为爱很美",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "缔造一生的承诺，纵享恒久的情缘",
                value: 2467,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};

optionbar42 =  {
    title: {
        text: '兴趣爱好'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '兴趣爱好',
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
                name: "时尚潮流美妆",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "影视",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "视频",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "明星娱乐",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "综艺搞笑",
                value: 2467,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "游戏动漫",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "萌宠",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "星座情感",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "音乐",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "体育",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "运动健身",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "美食",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "旅游",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "摄影",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "数码",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "历史军事",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "科学",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "收藏",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "学术",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "医疗养生",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "IT互联网",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "电商",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "财经",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "教育",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "法律 ",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "婚庆",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "艺术设计",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "房产家装",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "汽车交通",
                value: 2244,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "公益",
                value: 2244,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};


optionbar52 =  {
    title: {
        text: '意见'
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '意见',
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
                name: "提高售后服务质量、",
                value: 10000,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "导购态度需要改进",
                value: 6181,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "期待更加精致的工艺、",
                value: 4386,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "要跟随潮流",
                value: 4055,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "官网感觉产品不齐全",
                value: 2467,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
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
var myChart61 = echarts.init(document.getElementById('bar61'));
myChart61.setOption(optionbar61);
var myChart62 = echarts.init(document.getElementById('bar62'));
myChart62.setOption(optionbar62);
})(jQuery);

