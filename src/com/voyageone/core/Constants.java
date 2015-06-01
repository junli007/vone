package com.voyageone.core;

import java.util.Random;

public interface Constants {
	public static final String SCOPE_PROTOTYPE = "prototype";
	
	public static final String DAO_NAME_SPACE_CORE = "com.voyageone.core.sql.";
	public static final String DAO_NAME_SPACE_OMS = "com.voyageone.oms.sql.";
	public static final String DAO_NAME_SPACE_WMS = "com.voyageone.wms.sql.";
	
	public static final String DAO_READ = "read";
	public static final String DAO_WRITE = "write";
	
	// exception消息分隔符
	public static final String EXCEPTION_MESSAGE_PREFIX = "; cause is ";
	// exception消息描述最大值
	public static final int EXCEPTION_MESSAGE_LENGTH = 200;
	
	// 存放在session中用户信息key
	public static final String VOYAGEONE_USER_INFO = "voyageone.userInfo";
	// voyeageone当前用户token的key
	public static final String VOYAGEONE_USER_TOKEN = "voyageone.user.token";
	// voyeageone当前用户选择语言
	public static final String VOYAGEONE_USER_LANG = "voyageone.user.lang";
	// voyeageone当前用户选择公司
	public static final String VOYAGEONE_USER_COMPANY = "voyageone.user.company";
	
	// 随机数
	public static final Random RANDOM = new Random();
	
	// controll的后缀
	public static final String CONTROLLER_SUFFIX = ".html";
	
	// Ajax 请求返回值
	public static final String AJAX_RESULT_OK = "OK";
	public static final String AJAX_RESULT_NG = "NG";
	
	// 公共公告类型
	public static final int ANNOUNCEMENT_PUBLIC = 0;
	
	// 密码加密固定盐值
	public static final String MD5_FIX_SALT = "crypto.voyageone.la";
	// 密码加密散列加密次数
	public static final int MD5_HASHITERATIONS = 4;

	public static final String EmptyString = "";
}
