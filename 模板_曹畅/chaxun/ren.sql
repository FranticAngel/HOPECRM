

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL auto_increment COMMENT '考生ID号',
  `member_user` varchar(25) collate utf8_unicode_ci NOT NULL COMMENT '院校名称',
  `member_password` varchar(32) collate utf8_unicode_ci NOT NULL COMMENT '考生考号',
  `member_dj` int(5) collate utf8_unicode_ci NOT NULL COMMENT '报考等级',
  `member_name` varchar(20) collate utf8_unicode_ci NOT NULL COMMENT '真实姓名',
  `member_sex` varchar(1) collate utf8_unicode_ci NOT NULL COMMENT '性别',
  `member_sr` varchar(10) collate utf8_unicode_ci NOT NULL COMMENT '出生年月',
  `member_sfz` varchar(32) collate utf8_unicode_ci NOT NULL COMMENT '身份证号',
  `member_fmname` varchar(20) collate utf8_unicode_ci NOT NULL COMMENT '父母姓名',
  `member_phone` varchar(15) collate utf8_unicode_ci NOT NULL COMMENT '联系方式',
  `member_adress` varchar(200) collate utf8_unicode_ci NOT NULL COMMENT '家庭住址',
  `member_gradeb` int(5) collate utf8_unicode_ci  COMMENT '笔试成绩',
  `member_gradej` int(5) collate utf8_unicode_ci  COMMENT '上机成绩',
  `member_gradez` int(5) collate utf8_unicode_ci  COMMENT '总成绩',
  PRIMARY KEY  (`id`),
  UNIQUE KEY `member_account` (`member_password`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO member VALUES ('3', '湖南工学院', '21232f297a57a5a743894a0e4a801fc3','3', '希达', '女', '930909', '101010121435663', '天空之城', '101010', '湖南省衡阳市','null','null','null');
INSERT INTO member VALUES ('4',  '北京大学', '1220140113', '4','波妞', '女', '940820', '3401221234561777', '悬崖上的金鱼公主', '23222331', '北京市海淀区','55','45','51');

