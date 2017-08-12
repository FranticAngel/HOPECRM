<?php
require_once ('config.php');
?>
<html xmlns="">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>成绩查询</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="../css/style.css" type="text/css" rel="stylesheet" />
<link rel="icon" href="../images/favicon.ico" mce_href="../images/favicon.ico" type="../images/x-icon"> 
<script type="text/javascript" language="javascript" src="../js/jquery-1.4.3.min.js"></script>
<script type="text/javascript" language="javascript" src="../js/jquery-1.7.2.min.js"></script>

</head>
<body onselectstart="return false">
<div class="header">
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td><div align="center">
      <table width="1002" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top"><table width="1002" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="240" rowspan="2" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="20%">&nbsp;</td>
                  <td width="80%" align="left">
				  <div class="container">
				  <a href="../计算机等级考试.html" class="logo"><span style="background-image: url(images/logo.png); background-position: 0% -38px;"></span></a><div></td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td width="682" valign="middle"><div style="margin-top:21px; margin-bottom:0px; margin-left:0px; margin-right:0px;">	<ul id='navlist'><li><a href='../计算机等级考试.html' target='_self'>首页&nbsp;</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../招生简章/招生简章.html' target='_self'>&nbsp;招生简章</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../考试大纲/考试大纲.html' target='_self'>&nbsp;考试大纲</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../计算机等级/一级.html' target='_self'>&nbsp;计算机一级</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../计算机等级/二级.html' target='_self'>&nbsp;计算机二级</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../计算机等级/三级.html' target='_self'>&nbsp;计算机三级</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='../计算机等级/四级.html' target='_self'>&nbsp;计算机四级</a></li></ul><div id='menu_space'></div>
	<ul id='navlist'><li><a href='http://localhost/dj/chaxun' target='_self'>&nbsp;成绩查询</a></li></ul></div>
</div></td>
              <td width="80" align="center" valign="middle"><table width="80" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" valign="middle"><A class=a1 title="首页" href="../计算机等级考试.html" target=_blank></A></td>
    <td width="10" align="center" valign="middle"></td>
    <td align="center" valign="middle"><A class=a2 title="邮箱" href="1548565234@qq.com" target=_blank></A></td>  
  </tr>
</table></td>
            </tr>   
          </table></td>
        </tr>
      </table>
    </div></td>
  </tr>
</table>
</div>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000403">
  <tr>
    <td height="30" align="center" valign="middle">
<div class="banner" style="background-position: -398.125px 0px;">
<img src="../images/ad/banner_text1.png" class="text">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td height="30" align="center" valign="middle"></td>
        </tr>
</table>
</div>
	</td>
  </tr>
  
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td height="3" align="center" bgcolor="#4B4B4B"></td>
  </tr>
</table>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td><div align="center">
      <table width="1002" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td height="10" colspan="3"></td>
          </tr>
        <tr>
          <td width="220" valign="top"></table>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="style.css" rel="stylesheet" type="text/css" />
<script language="javascript">
function chk(theForm){
	if (theForm.member_user.value.replace(/(^\s*)|(\s*$)/g, "") == ""){
		alert("学校不能为空！");
		theForm.member_user.focus();   
		return (false);   
	}		
	
	if (theForm.member_password.value.replace(/(^\s*)|(\s*$)/g, "") == ""){
		alert("学号不能为空！");
		theForm.member_password.focus();   
		return (false);   
	}	
	
	if (theForm.member_password.value != theForm.pass.value){
		alert("两次输入学号不一样！");
		theForm.pass.focus();   
		return (false);   
	}	
		 
	if (theForm.member_name.value.replace(/(^\s*)|(\s*$)/g, "") == "" || theForm.member_name.value.replace(/[\u4e00-\u9fa5]/g, "")){
		alert("真实姓名不能为空且必须为中文！");   
		theForm.member_name.focus();   
		return (false);   
	}
}
</script>
<?php
if(@$_POST["submit"]){
if(empty($_POST['member_user']))
	echo "<script>alert('学校不能为空');location='?tj=register';</script>";
else if(empty($_POST['member_password']))
	echo "<script>alert('学号不能为空');location='?tj=register';</script>";
else if($_POST['member_password']!=$_POST['pass'])
	echo "<script>alert('两次学号不一样');location='?tj=register';</script>";
else if(!empty($_POST['member_dj'])&&!is_numeric($_POST['member_dj']))
	echo "<script>alert('报考等级填写阿拉伯数字');location='?tj=register';</script>";	
	else if(empty($_POST['member_sr']))
	echo "<script>alert('出生年月不能为空');location='?tj=register';</script>";
	else if(empty($_POST['member_sfz']))
	echo "<script>alert('身份证不能为空');location='?tj=register';</script>";
else if(!empty($_POST['member_phone'])&&!is_numeric($_POST['member_phone']))
	echo "<script>alert('手机号码必须全为数字');location='?tj=register';</script>";
else{
$_SESSION['member']=$_POST['member_user'];
$sql="insert into member values('','".$_POST['member_user']."','".md5($_POST['member_password'])."','".$_POST['member_dj']."','".$_POST['member_name']."','".$_POST['member_sex']."','".$_POST['member_sr']."','".$_POST['member_sfz']."','".$_POST['member_fmname']."','".$_POST['member_phone']."','".$_POST['member_adress']."','".$_POST['member_gradeb']."','".$_POST['member_gradej']."','".$_POST['member_gradez']."')";
$result=mysql_query($sql)or die(mysql_error());
if($result)
echo "<script>alert('恭喜你报考成功,马上进入主页面');location='member.php';</script>";
else
{
	echo "<script>alert('注册失败');location='index.php';</script>";
	mysql_close();
}
	}
}
error_reporting(0);
?>
</head>
<body>
<?php if($_GET['tj'] == 'register'){ ?>
<form id="theForm" name="theForm" method="post" action="" onSubmit="return chk(this)" runat="server" style="margin-bottom:0px;">
  <table width="350" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#B3B3B3">
    <tr>
      <td colspan="2" align="center" bgcolor="#EBEBEB">考生报名&nbsp;&nbsp;以下打“*”为必填项</td>
    </tr>
    <tr>
      <td width="60" align="right" bgcolor="#FFFFFF">学&nbsp;&nbsp;&nbsp;校:</td>
      <td width="317" bgcolor="#FFFFFF"><input name="member_user" type="text" id="member_user" size="20" maxlength="20" />
	  <font color="#FF0000"> *</font>(填写本人所在院校)</td>
    </tr>
    <tr>
      <td align="right" bgcolor="#FFFFFF">学&nbsp;&nbsp;&nbsp;号:</td>
      <td bgcolor="#FFFFFF"><input name="member_password" type="password" id="member_password" size="20" maxlength="20" />
      <font color="#FF0000"> *</font>(由数字或字母组成)</td>
    </tr>
    <tr>
      <td align="right" bgcolor="#FFFFFF">确认学号:</td>
      <td bgcolor="#FFFFFF"><input name="pass" type="password" id="pass" size="20" />
      <font color="#FF0000"> *</font>(再次输入学号)</td>
    </tr>
        <tr>
      <td align="right" bgcolor="#FFFFFF">报考等级:</td>
      <td bgcolor="#FFFFFF"><input name="member_qq" type="text" id="member_qq" size="20"/>
       <font color="#FF0000"> *</font>(填写阿拉伯数字)</td>
    </tr>
    <tr>
      <td align="right" bgcolor="#FFFFFF">真实姓名:</td>
      <td bgcolor="#FFFFFF"><input name="member_name" type="text" id="member_name" size="20" />
      <label><font color="#FF0000">*</font></label></td>
    <tr>
      <td align="right" bgcolor="#FFFFFF">性&nbsp;&nbsp;&nbsp;别:</td>
      <td align="left" bgcolor="#FFFFFF">
          <input name="member_sex" type="radio" id="0" value="男" checked="checked" />
          男
          <input type="radio" name="member_sex" value="女" id="1" />
          女&nbsp;</label></td>
    </tr>
      </tr>
        </tr>
        <tr>
      <td align="right" bgcolor="#FFFFFF">出生年月:</td>
      <td bgcolor="#FFFFFF"><input name="member_sr" type="text" id="member_sr" size="20" maxlength="10" />
      <font color="#FF0000"> *</font>(如：930808)</td>
    </tr>  
        <tr>
      <td align="right" bgcolor="#FFFFFF">身份证号:</td>
      <td bgcolor="#FFFFFF"><input name="member_sfz" type="text" id="member_sfz" size="20" maxlength="18" />
      <font color="#FF0000"> *</font>(由数字或字母组成)</td>
    </tr>
    <tr>
      <td align="right" bgcolor="#FFFFFF">联系方式:</td>
      <td bgcolor="#FFFFFF"><input name="member_phone" type="text" id="member_phone" size="20"/>
      <label><font color="#FF0000">*</font></label></td>
    </tr>
      	 <tr>
      <td align="right" bgcolor="#FFFFFF">邮&nbsp;&nbsp;&nbsp;箱:</td>
      <td bgcolor="#FFFFFF"><input name="member_gradez" type="text" id="member_gradez" size="20" /></td>
    </tr>
     <tr>
      <td align="right" bgcolor="#FFFFFF">父母姓名:</td>
      <td bgcolor="#FFFFFF"><input name="member_fmname" type="text" id="member_fmname" size="20" /></td>
    </tr>
    	 <tr>
      <td align="right" bgcolor="#FFFFFF">家庭住址:</td>
      <td bgcolor="#FFFFFF"><input name="member_adress" type="text" id="member_adress" size="20" /></td>
    </tr>
    	 <tr>
      <td align="right" bgcolor="#FFFFFF">爱&nbsp;&nbsp;&nbsp;好:</td>
      <td bgcolor="#FFFFFF"><input name="member_gradeb" type="text" id="member_gradeb" size="20" /></td>
    </tr>
      	 <tr>
      <td align="right" bgcolor="#FFFFFF">宣&nbsp;&nbsp;&nbsp;言:</td>
      <td bgcolor="#FFFFFF"><input name="member_gradej" type="text" id="member_gradej" size="20" /></td>
    </tr>
    <tr>
      <td colspan="2" align="center" bgcolor="#FFFFFF"><input type="reset" name="button" id="button" value="重置表单" />
      <input type="submit" name="submit" id="submit" value="确定报名" /></td>
    </tr>
  </table>
</form>
<?php
} 
	if($_GET['tj']== ''){
?>
<?php
  if($_POST["submit2"]){
$name=$_POST['name'];
$pw=md5($_POST['password']);
$sql="select * from member where member_user='".$name."'"; 
$result=mysql_query($sql) or die("学校不正确");
$num=mysql_num_rows($result);
if($num==0){
	echo "<script>alert('学校不存在');location='index.php';</script>";
	}
while($rs=mysql_fetch_object($result))
{
	if($rs->member_password!=$pw)
	{
		echo "<script>alert('学号不正确');location='index.php';</script>";
		mysql_close();
	}
	else 
	{
		$_SESSION['member']=$_POST['name'];
		header("Location:member.php");
		mysql_close();
		}
	}
}
?>
<form action="" method="post" name="regform" onSubmit="return Checklogin();" style="margin-bottom:0px;">
<table width="350" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#B3B3B3">
  <tr>
    <td colspan="2" align="center" bgcolor="#EBEBEB" class="font">成绩查询</td>
  </tr>
    <tr>
      <td width="65" align="center" bgcolor="#FFFFFF" class="font">学&nbsp;校:</td>
      <td width="262" bgcolor="#FFFFFF" class="font"><input name="name" type="text" id="name"></td>
    </tr>
    <tr>
      <td align="center" valign="top" bgcolor="#FFFFFF" class="font">考&nbsp;号:</td>
      <td bgcolor="#FFFFFF" class="font"><input name="password" type="password" id="name">        </td>
    </tr>
    <tr>
    <td colspan="2" align="center" valign="top" bgcolor="#FFFFFF" class="font"><input name="submit2" type="submit" value="考生登录"/>
      <a href='index.php?tj=register'>没有报考？立即报考...</a></td>
  </tr>
</table>
</form>
<?php } ?>
<table width="100" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="5"></td>
  </tr>
</table>
   <tr>
            
            </tr>
<table width="350" height="20" border="0" align="center" cellpadding="5" cellspacing="1" bgcolor="#CCCCCC">
</table>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" background="../images/bottomx.gif">
  <tr>
    <td><div align="center">
      <table width="1002" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" background="../images/bottombg.png"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="88%" valign="top"><div style="margin-top:13px; margin-bottom:5px; margin-left:5px; margin-right:5px; font-family: &quot;微软雅黑&quot;">
                  <div class="mlist_one">
                    <div class="mo_top"><a href="../计算机等级考试.html" title="网站首页">网站首页</a></div>
                    <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="../计算机等级考试.html" title="返回首页">返回首页</a></div>
                      </ul>
                    </div>
                  </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="#" title="在线考场">在线考场</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="#" title="一级考场">一级考场</a></div>
						<div class="overflowtxt"><a href="#" title="二级考场">二级考场</a></div>
						<div class="overflowtxt"><a href="#" title="三级考场">三级考场</a></div>
						<div class="overflowtxt"><a href="#" title="四级考场">四级考场</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="News" title="友情链接">友情链接</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="http://ncre.edu-edu.com.cn/" title="NCRE.EDU">NCRE.EDU</a></div>
						<div class="overflowtxt"><a href="http://www.ncre100.com/" title="NCRE100">NCRE100</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="cases" title="解决方案">解决方案</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="#" title="本站相关">本站相关</a></div>
						<div class="overflowtxt"><a href="#" title="网络文档">网络文档</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="#" title="下载中心">下载中心</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="#" title="站内资源">站内资源</a></div>
						<div class="overflowtxt"><a href="#" title="网络资源">网络资源</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="#" title="考生咨询">考生咨询</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a href="#" title="在线咨询">在线咨询</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="#" title="名师在线">名师在线</a></div>
                  <div class="mo_bottom">
                      <ul>
					  	<div class="overflowtxt"><a href="#" title="在线答疑">在线答疑</a></div>
                        <div class="overflowtxt"><a href="#" title="留言查询">留言查询</a></div>
                      </ul>
                  </div>
                </div>
                <div class="mlist_one">
                    <div class="mo_top"><a href="#" title="作者介绍">作者介绍</a></div>
                  <div class="mo_bottom">
                      <ul>
                        <div class="overflowtxt"><a>作者姓名：</a><a href="#" title='曹畅'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;曹畅</a></div>
						<div class="overflowtxt"><a>联系方式：</a><a href="#" title='13187244316'>13187244316</a></div>
						<div class="overflowtxt"><a>邮箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;：</a><a href="#" title='1548565234@qq.com'>1548565234@qq.com</a></div>
						<div class="overflowtxt"><a>制作日期：</a><a href="#" title='2014年12月12日'>2014年12月12日</a></div>
                      </ul>
                  </div>
                </div>
              </div></td>
              <td width="12%" valign="top"><a href="javascript:scroll(0,0)"><img src="../Images/bottomtop.gif" alt="TOP" width="61" height="30" border="0"></a></td>
            </tr>
          </table></td>
        </tr>
        <tr>
          <td align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td colspan="2" align="left">
</strong></td>
            </tr>
            <tr>
              <td height="5" colspan="2"></td>
            </tr>
            <tr>
              <td colspan="2" align="center" valign="middle"><table width="1002" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="203"><div align="center">
                      <table width="186" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="186"><img src="../images/footlogo.png" alt="Kdesign LOGO" width="186" height="50" /></td>
                        </tr>
                      </table>
                  </div></td>
                  <td valign="middle"><div align="left">Author's Name&nbsp;&nbsp;曹畅&nbsp;&nbsp;IN MEMORY FOR&nbsp;&nbsp;数据库课程设计 <br />
                    图片采集于互联网 <span style="color:#99CC00;">&nbsp;&nbsp;版权所有：&nbsp;&nbsp;</span><span style="color:#C6F14D;">曹畅</span><a href="#" title="计算机等级考试" target="_blank">&nbsp;&nbsp;计算机等级考试网</a> <a>&nbsp;||&nbsp;借鉴--启点在线、EDUC100</a> 
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F42c6101a56e15d7ec3c8bd3695bea65d' type='text/javascript'%3E%3C/script%3E"));
</script></div></td>
                </tr>
              </table></td>
            </tr>
          </table></td>
        </tr>
      </table>
    </div></td>
  </tr>
</table>
<script type='text/javascript' src='../js/eqq.js'></script>

<script type="text/javascript" language="javascript" src="../js/picAutoZoom.js"></script>
<script type="text/javascript" language="javascript">
<!--
    $.ajaxSetup({
        timeout: 300000
    });
//-->
</script>
<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"4","bdPos":"left","bdTop":"119"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
</body>
</html>


<script>function xbtn(obj,back_y)	{				$(obj).each(function(){			var this_event=null;			$(this).addClass("xbtn").html($(this).html()+"<span class='xbtn_span'></span>");			var xy;			if( $(this).css('background-position') == undefined)			{				xy=[$(this).css('background-position-x'),$(this).css('background-position-y')];			}			else			{				xy=$(this).css('background-position').split(' ');			}			$('.xbtn_span' , this).css({				'background-image':$(this).css('background-image'),				'background-position': xy[0]+' '+back_y			}).hover(function(){					var obj= this;					function go()					{												var v=$(obj).css('opacity')-0+0.1;												if( v <=1 && this_event=='in')						{							if (v>0.9)							{								v=1;							}							$(obj).css({								'opacity':v,								'filter':'alpha(opacity='+(v*100)+')'							});							setTimeout(go,50);						}					}					this_event='in';					go();								},function(){								var obj= this;					function go()					{						var v=$(obj).css('opacity')-0.1;						if(v<0.1){v=0;}						if( v >=0 && this_event=='out')						{									$(obj).css({								'opacity':v,								'filter':'alpha(opacity='+(v*100)+')'							});														setTimeout(go,50);													}					}					this_event='out';					go();			});								});			}$(function(){		xbtn(".header .btn1,.header .btn2,.header .btn3,.header .btn4,.header .btn5,.header .btn6",'-41px');	/*xbtn(".out .btn1,.out .btn2,.out .btn3,.out .btn4,.out .btn5",'-93px');*/	/*xbtn(".logo",'-38px');*/		$(document).mousemove(function(e) {		var offset=$(document).width()/2-e.clientX;		$(".banner").css({"background-position":( ($(document).width()-1600)/2+offset/4 -100 )+"px 0px"});			});	function foot_scroll()	{		if($(document).scrollTop() < ($(document).height()-$(window).height())*0.7 )		{			$('.footer').animate({'bottom':'-278px'},800,function(){setTimeout(foot_scroll,500);});		}		else		{			$('.footer').animate({'bottom':'0px'},800,function(){setTimeout(foot_scroll,500);});		}	}	foot_scroll();		 		});</script><script>$(function(){	function showPop(index)	{				$('.pop_body_dialog').css({				'background':"url({dede:global.cfg_templeturl/}/hss/inc/img/pop"+index+".png)"		});				$('.pop_body_dialog #span').html( $('#pop_text'+index).html() );				var y= ($(window).height()-419)/2 ;				$('.pop_body').css({'top':y+'px'});		$('.pop_bg,.pop_body').stop().fadeIn(); 			}		$('.box3_m a').click(function(){		for(var i=1;i<7;i++)		{			if( $(this).hasClass('btn'+i))			{				showPop(i);				return;			}		}	});	$(".pop_body_dialog .btn").click(function(){		$('.pop_bg,.pop_body').stop().fadeOut();	});		/*xbtn(".box3_m .btn1,.box3_m .btn2,.box3_m .btn3,.box3_m .btn4,.box3_m .btn5,.box3_m .btn6",'-94px');*/	xbtn(".recommend_read_more",'-41px');	xbtn("#label3",'-49px');	xbtn(".pop_body_dialog .btn",'-14px');		var banner_index=1;	function banner_timer()	{				changeBanner(banner_index);		banner_index++;		if(banner_index==4)		{			banner_index=1;		}		setTimeout(banner_timer,5000);	};	banner_timer();		function changeBanner(_i)	{		var w=$('.shows:first').width();		for(var i=1;i<10;i++)		{			if( i==_i)			{				$('.banner .button a.btn'+i).addClass('btn'+i+'_fire');			}			else			{				$('.banner .button a.btn'+i).removeClass('btn'+i+'_fire');			}					$('#shows'+i).stop().animate({'left':  ((i-_i)*w)+'px' },500,function(){$(this).show();});		}			}	$('.banner .button a').click(function(){		for(var i=1;i<10;i++)		{			if( $(this).hasClass('btn'+i))			{				banner_index=i;				changeBanner(i);				return;			}					}	});		$('.show').css({'width': ($(document).width()*3)+'px'} );		$(".case li").hover(function(){				$('.case_w',this).stop().animate({"bottom":"30px"},400);					$(".x",this).stop().css({'left':'50px'}).animate({'left':"80px"},400).show();				$(".y",this).stop().css({'right':'50px'}).animate({'right':"80px"},400).show();				$('.fire',this).show();			},function(){				$('.case_w',this).stop().animate({"bottom":"14px"},400);				$('.fire, .x, .y',this).hide();			});		});</script>

</body>
</html>