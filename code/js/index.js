(function ($) {
	
})(jQuery);

function gotoMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $(".search_input").attr('placeholder',"请输入姓名、会员编码、电话");
    $("#main").load("client.html");
}

function gotoUnMemberPage(){
	$("#sliders").load("common/commonEchart.html?"+new Date().getTime());
    $("#course").html("");
    $(".search_input").attr('placeholder',"请输入姓名、电话");
    $("#main").load("client.html");
}
function gotoProductLifeCyclePage(){
	$("#sliders").html("");
    $("#course").html("");
	$("#main").load("lifecycle/productLifeCycle.html?"+new Date().getTime());
}
function gotoMemberLifeCyclePage(){
	$("#sliders").load("lifecycle/memberLifeChart.html?"+new Date().getTime());
    $("#course").html("");
	$("#main").load("lifecycle/memberLifeCycle.html?"+new Date().getTime());
}
function gotoMemberAgeChart(){
	$("#sliders").html("");
    $("#course").html("");
	$("#main").load("lifecycle/memberAgeChart.html?"+new Date().getTime());
}
function gotoMemberLifeChart(){
	$("#sliders").load("lifeValue/memberLifeChart.html?"+new Date().getTime());
    $("#course").html("");
	$("#main").load("lifeValue/lifeChart.html");
}
function gotoWorkPage(){
    $("#course").load("criclework/top/management_top.html");
	$("#main").load("criclework/management.html");
}

function gotoContact(){
    $("#course").load("criclework/top/contact_top.html");
	$("#main").load("criclework/contact.html");
}

function gotoEmp(){
    $("#course").load("criclework/top/emp_top.html");
	$("#main").load("criclework/employee.html");
}

function gotoTrends(){
    $("#course").load("criclework/top/trends_top.html");
	$("#main").load("criclework/trends.html");
}

function gotoGuhai(){
    $("#course").load("criclework/top/conguhai_top.html");
	$("#main").load("criclework/conguhai.html");
}

function gotoGhxq1(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq1.html");
}
function gotoGhxq2(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq2.html");
}
function gotoGhxq3(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq3.html");
}
function gotoGhxq4(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq4.html");
}
function gotoGhxq5(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq5.html");
}
function gotoGhxq6(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq6.html");
}
function gotoGhxq7(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq7.html");
}
function gotoGhxq8(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq8.html");
}
function gotoGhxq9(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq9.html");
}
function gotoGhxq10(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq10.html");
}
function gotoGhxq11(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq11.html");
}
function gotoGhxq12(){
    $("#course").load("criclework/top/ghxq_top.html");
    $("#main").load("criclework/ghxq12.html");
}

function gotoConfig(){
    $("#course").load("criclework/top/config_top.html");
    $("#main").load("criclework/config.html");
}

function gotoGrxx(){
        $("#course").load("criclework/biaotou.html");
    $("#main").load("criclework/huiyuan.html");
}

function gotoGeren(){
    //$("#sliders").load("common/commonEchart.html");
    $("#sliders").html("");
    $("#course").load("criclework/biaotou.html");
    $("#main").load("criclework/huiyuan.html");
}

function hideSubMenu(obj){
	$(obj).next().css("display","none")
}
function showSubMenu(obj){
	$(obj).next().css("display","block")
}



// 生成随机姓名
function getName(){
    var familyNames = ["赵",    "钱",    "孙",    "李",    "周",    "吴",    "郑",    "王",    "冯",    "陈",
        "褚",    "卫",    "蒋",    "沈",    "韩",    "杨",    "朱",    "秦",    "尤",    "许",
        "何",    "吕",    "施",    "张",    "孔",    "曹",    "严",    "华",    "金",    "魏",
        "陶",    "姜",    "戚",    "谢",    "邹",    "喻",    "柏",    "水",    "窦",    "章",
        "云",    "苏",    "潘",    "葛",    "奚",    "范",    "彭",    "郎",    "鲁",    "韦",
        "昌",    "马",    "苗",    "凤",    "花",    "方",    "俞",    "任",    "袁",    "柳",
        "酆",    "鲍",    "史",    "唐",    "费",    "廉",    "岑",    "薛",    "雷",    "贺",
        "倪",    "汤",    "滕",    "殷",    "罗",    "毕",    "郝",    "邬",    "安",    "常",
        "乐",    "于",    "时",    "傅",    "皮",    "卞",    "齐",    "康",    "伍",    "余",
        "元",    "卜",    "顾",    "孟",    "平",    "黄",    "和",    "穆",    "萧",    "尹"];
    var givenNames =  ["子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"];

    var i = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
    var familyName = familyNames[i];

    var j = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
    var givenName = givenNames[i];

    var name = familyName + givenName;
    return name
}

//生成随机手机号
function getMobile() {
    var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];

    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix
}
//性别
function getGender() {
    var gender = [ "男", "女"];
    var i = parseInt(10 * Math.random())%2;
    return gender[i]
}

//年龄
function getAge() {
    return parseInt(10*Math.random())*3+20
}

//学历
function getEducation() {
    var education =["初中","高中","大专","本科","硕士","高中","大专","本科"];
    var i = parseInt(10 * Math.random())%8;
    return education[i]
}

//职业
function getCareer() {
    var career =["护士","职员","会计","会计","程序员","职员","公司主管","教师","职员"];
    var i = parseInt(10 * Math.random())%9;
    return career[i]
}

//区
function getArea() {
    var area =["罗湖","福田","南山","盐田","宝安","龙岗"];
    var i = parseInt(10 * Math.random())%6;
    return area[i]
}

//店名

function getShopName() {
    var name = ["宝盈","玉阁","金玉","良缘","翠缘","金乐","万福"];
    var i = parseInt(10 * Math.random())%7;
    return name[i]
}