
SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `core_admin`;
CREATE TABLE `core_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `manage_name` varchar(200) DEFAULT NULL,
  `manage_password` varchar(200) DEFAULT NULL,
  `manage_truename` varchar(200) DEFAULT NULL,
  `manage_isstop` int(11) DEFAULT '0' COMMENT '是否停用 1是 0否',
  `manage_role` int(11) DEFAULT NULL COMMENT '1信息发布管理员  10超级管理员',
  `login_count` int(11) DEFAULT '0' COMMENT '登录次数',
  `last_ip` varchar(200) DEFAULT NULL,
  `last_login_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

INSERT INTO `core_admin` VALUES ('9', 'cc', '14e1b600b1fd579f47433b88e8d85291', '曹畅', '0', '1', '3', '127.0.0.1', '1367751281');


DROP TABLE IF EXISTS `core_daqu`;
CREATE TABLE `core_daqu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL COMMENT '大区名称',
  `num` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '大区编号',
  `desc` text,
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='大区表';


INSERT INTO `core_daqu` VALUES ('1', '京津大区', '1', '北京、天津', '1367717894', '1367718092');
INSERT INTO `core_daqu` VALUES ('3', '华南大区', '2', '湖南、湖北', '1367719055', '1367719055');


DROP TABLE IF EXISTS `core_kaosheng`;
CREATE TABLE `core_kaosheng` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `daqu_num` int(11) unsigned NOT NULL COMMENT '大区num',
  `kaosheng_num` int(11) NOT NULL COMMENT '区下编号',
  `kaosheng_no` varchar(100) NOT NULL COMMENT '报名号 如201301001',
  `zuowei_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '0为未分配座位',
  `zuowei_part` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1上午   2下午',
  `zuowei_all_num` varchar(100) DEFAULT NULL COMMENT '座位编号 如1502',
  `name` varchar(250) NOT NULL,
  `sex` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '1男  0女',
  `birthday` varchar(10) DEFAULT NULL COMMENT '出生年月  如200101',
  `school_name` varchar(200) DEFAULT NULL COMMENT '毕业学校',
  `sfz` varchar(200) DEFAULT NULL COMMENT '身份证',
  `address` varchar(250) DEFAULT NULL COMMENT '家庭住址',
  `fmqo_name` varchar(200) DEFAULT NULL COMMENT '父母、亲戚、老师或者其他人姓名',
  `tel` varchar(250) DEFAULT NULL COMMENT '联系电话',
  `photo` varchar(200) DEFAULT NULL COMMENT '照片',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='考生表';


INSERT INTO `core_kaosheng` VALUES ('3', '1', '1', '201301001', '82', '2', '0201', '千寻', '1', '出生年月', '湖南大学', '身份证号', '家庭住址', '父母姓名', '联系电话', '#', '1367737371', '1367764655');
INSERT INTO `core_kaosheng` VALUES ('4', '2', '3', '201302003', '18', '2', '0109', '哈尔', '1', '出生年月', '天津大学', '身份证号', '家庭住址', '父母姓名', '联系电话', '#', '1367844180', '1367844194');
INSERT INTO `core_kaosheng` VALUES ('5', '2', '2', '201302002', '2', '2', '0101', '波妞', '1', '198712', '北京大学', '3401221234561777', '北京市海淀区', '宫崎骏', '0551-23222331', '#', '1367751138', '1367842206');
INSERT INTO `core_kaosheng` VALUES ('6', '2', '3', '201302003', '0', '0', null, '0110', '1', '1010', '希达', '1010101', '100', '101010', '101010', '', '1367844218', '1367844218');


DROP TABLE IF EXISTS `core_school`;
CREATE TABLE `core_school` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `daqu_num` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '大区num',
  `school_name` varchar(200) NOT NULL COMMENT '学校名称',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;


INSERT INTO `core_school` VALUES ('1', '1', '湖南大学', '1367719337', '1367719337');
INSERT INTO `core_school` VALUES ('4', '2', '天津大学', '1367719378', '1367719378');
INSERT INTO `core_school` VALUES ('3', '1', '湖南工学院', '1367719362', '1367719362');


DROP TABLE IF EXISTS `core_system`;
CREATE TABLE `core_system` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kaochang_count` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '考场总数',
  `per_kaochang_zuowei_count` int(10) unsigned NOT NULL DEFAULT '40' COMMENT '每个考场座位数量',
  `sys_title` varchar(200) NOT NULL,
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='系统配置';


INSERT INTO `core_system` VALUES ('1', '70', '40', '全国计算机等级考试考务管理系统', '0', '0');


DROP TABLE IF EXISTS `core_zuowei`;
CREATE TABLE `core_zuowei` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kaochang_num` int(10) unsigned NOT NULL COMMENT '考场num',
  `zuowei_num` int(11) unsigned NOT NULL COMMENT '座位num',
  `zuowei_all_num` varchar(100) NOT NULL,
  `part` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '1上午   2下午',
  `kaosheng_id` int(100) NOT NULL DEFAULT '0' COMMENT '考生id  0为未分配座位',
  `kaosheng_no` varchar(100) DEFAULT '' COMMENT '为空则未分配   考试报名号',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5601 DEFAULT CHARSET=utf8 COMMENT='座位表';


INSERT INTO `core_zuowei` VALUES ('1', '1', '1', '0101', '1', '0', '', '1367739178', '1367842206');
INSERT INTO `core_zuowei` VALUES ('2', '1', '1', '0101', '2', '5', '201302002', '1367739178', '1367842206');
INSERT INTO `core_zuowei` VALUES ('3', '1', '2', '0102', '1', '0', '', '1367739178', '1367746008');
INSERT INTO `core_zuowei` VALUES ('4', '1', '2', '0102', '2', '0', '', '1367739178', '1367746132');
INSERT INTO `core_zuowei` VALUES ('5', '1', '3', '0103', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('6', '1', '3', '0103', '2', '0', '', '1367739178', '1367745109');
INSERT INTO `core_zuowei` VALUES ('7', '1', '4', '0104', '1', '0', '', '1367739178', '1367746376');
INSERT INTO `core_zuowei` VALUES ('8', '1', '4', '0104', '2', '0', '', '1367739178', '1367746571');
INSERT INTO `core_zuowei` VALUES ('9', '1', '5', '0105', '1', '0', '', '1367739178', '1367746677');
INSERT INTO `core_zuowei` VALUES ('10', '1', '5', '0105', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('11', '1', '6', '0106', '1', '0', '', '1367739178', '1367746821');
INSERT INTO `core_zuowei` VALUES ('12', '1', '6', '0106', '2', '0', '', '1367739178', '1367746677');
INSERT INTO `core_zuowei` VALUES ('13', '1', '7', '0107', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('14', '1', '7', '0107', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('15', '1', '8', '0108', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('16', '1', '8', '0108', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('17', '1', '9', '0109', '1', '0', '', '1367739178', '1367747812');
INSERT INTO `core_zuowei` VALUES ('18', '1', '9', '0109', '2', '4', '201302001', '1367739178', '1367747625');
INSERT INTO `core_zuowei` VALUES ('19', '1', '10', '0110', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('20', '1', '10', '0110', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('21', '1', '11', '0111', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('22', '1', '11', '0111', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('23', '1', '12', '0112', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('24', '1', '12', '0112', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('25', '1', '13', '0113', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('26', '1', '13', '0113', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('27', '1', '14', '0114', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('28', '1', '14', '0114', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('29', '1', '15', '0115', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('30', '1', '15', '0115', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('31', '1', '16', '0116', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('32', '1', '16', '0116', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('33', '1', '17', '0117', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('34', '1', '17', '0117', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('35', '1', '18', '0118', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('36', '1', '18', '0118', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('37', '1', '19', '0119', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('38', '1', '19', '0119', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('39', '1', '20', '0120', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('40', '1', '20', '0120', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('41', '1', '21', '0121', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('42', '1', '21', '0121', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('43', '1', '22', '0122', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('44', '1', '22', '0122', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('45', '1', '23', '0123', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('46', '1', '23', '0123', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('47', '1', '24', '0124', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('48', '1', '24', '0124', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('49', '1', '25', '0125', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('50', '1', '25', '0125', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('51', '1', '26', '0126', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('52', '1', '26', '0126', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('53', '1', '27', '0127', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('54', '1', '27', '0127', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('55', '1', '28', '0128', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('56', '1', '28', '0128', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('57', '1', '29', '0129', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('58', '1', '29', '0129', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('59', '1', '30', '0130', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('60', '1', '30', '0130', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('61', '1', '31', '0131', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('62', '1', '31', '0131', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('63', '1', '32', '0132', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('64', '1', '32', '0132', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('65', '1', '33', '0133', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('66', '1', '33', '0133', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('67', '1', '34', '0134', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('68', '1', '34', '0134', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('69', '1', '35', '0135', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('70', '1', '35', '0135', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('71', '1', '36', '0136', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('72', '1', '36', '0136', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('73', '1', '37', '0137', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('74', '1', '37', '0137', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('75', '1', '38', '0138', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('76', '1', '38', '0138', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('77', '1', '39', '0139', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('78', '1', '39', '0139', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('79', '1', '40', '0140', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('80', '1', '40', '0140', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('81', '2', '1', '0201', '1', '0', '', '1367739178', '1367764655');
INSERT INTO `core_zuowei` VALUES ('82', '2', '1', '0201', '2', '3', '201301001', '1367739178', '1367764655');
INSERT INTO `core_zuowei` VALUES ('83', '2', '2', '0202', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('84', '2', '2', '0202', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('85', '2', '3', '0203', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('86', '2', '3', '0203', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('87', '2', '4', '0204', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('88', '2', '4', '0204', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('89', '2', '5', '0205', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('90', '2', '5', '0205', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('91', '2', '6', '0206', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('92', '2', '6', '0206', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('93', '2', '7', '0207', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('94', '2', '7', '0207', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('95', '2', '8', '0208', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('96', '2', '8', '0208', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('97', '2', '9', '0209', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('98', '2', '9', '0209', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('99', '2', '10', '0210', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('100', '2', '10', '0210', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('101', '2', '11', '0211', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('102', '2', '11', '0211', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('103', '2', '12', '0212', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('104', '2', '12', '0212', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('105', '2', '13', '0213', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('106', '2', '13', '0213', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('107', '2', '14', '0214', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('108', '2', '14', '0214', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('109', '2', '15', '0215', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('110', '2', '15', '0215', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('111', '2', '16', '0216', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('112', '2', '16', '0216', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('113', '2', '17', '0217', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('114', '2', '17', '0217', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('115', '2', '18', '0218', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('116', '2', '18', '0218', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('117', '2', '19', '0219', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('118', '2', '19', '0219', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('119', '2', '20', '0220', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('120', '2', '20', '0220', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('121', '2', '21', '0221', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('122', '2', '21', '0221', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('123', '2', '22', '0222', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('124', '2', '22', '0222', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('125', '2', '23', '0223', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('126', '2', '23', '0223', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('127', '2', '24', '0224', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('128', '2', '24', '0224', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('129', '2', '25', '0225', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('130', '2', '25', '0225', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('131', '2', '26', '0226', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('132', '2', '26', '0226', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('133', '2', '27', '0227', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('134', '2', '27', '0227', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('135', '2', '28', '0228', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('136', '2', '28', '0228', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('137', '2', '29', '0229', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('138', '2', '29', '0229', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('139', '2', '30', '0230', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('140', '2', '30', '0230', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('141', '2', '31', '0231', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('142', '2', '31', '0231', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('143', '2', '32', '0232', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('144', '2', '32', '0232', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('145', '2', '33', '0233', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('146', '2', '33', '0233', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('147', '2', '34', '0234', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('148', '2', '34', '0234', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('149', '2', '35', '0235', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('150', '2', '35', '0235', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('151', '2', '36', '0236', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('152', '2', '36', '0236', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('153', '2', '37', '0237', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('154', '2', '37', '0237', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('155', '2', '38', '0238', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('156', '2', '38', '0238', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('157', '2', '39', '0239', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('158', '2', '39', '0239', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('159', '2', '40', '0240', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('160', '2', '40', '0240', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('161', '3', '1', '0301', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('162', '3', '1', '0301', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('163', '3', '2', '0302', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('164', '3', '2', '0302', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('165', '3', '3', '0303', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('166', '3', '3', '0303', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('167', '3', '4', '0304', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('168', '3', '4', '0304', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('169', '3', '5', '0305', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('170', '3', '5', '0305', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('171', '3', '6', '0306', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('172', '3', '6', '0306', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('173', '3', '7', '0307', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('174', '3', '7', '0307', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('175', '3', '8', '0308', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('176', '3', '8', '0308', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('177', '3', '9', '0309', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('178', '3', '9', '0309', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('179', '3', '10', '0310', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('180', '3', '10', '0310', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('181', '3', '11', '0311', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('182', '3', '11', '0311', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('183', '3', '12', '0312', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('184', '3', '12', '0312', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('185', '3', '13', '0313', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('186', '3', '13', '0313', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('187', '3', '14', '0314', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('188', '3', '14', '0314', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('189', '3', '15', '0315', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('190', '3', '15', '0315', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('191', '3', '16', '0316', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('192', '3', '16', '0316', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('193', '3', '17', '0317', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('194', '3', '17', '0317', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('195', '3', '18', '0318', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('196', '3', '18', '0318', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('197', '3', '19', '0319', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('198', '3', '19', '0319', '2', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('199', '3', '20', '0320', '1', '0', '', '1367739178', '1367739178');
INSERT INTO `core_zuowei` VALUES ('200', '3', '20', '0320', '2', '0', '', '1367739178', '1367739178');