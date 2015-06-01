package com.voyageone.core;


public interface MessageConstants {
	// 消息类型：输入参数校验失败
	public static final int MESSAGE_TYPE_VALIDATE = 1;
	// 消息类型：业务异常
	public static final int MESSAGE_TYPE_BUSSINESS_EXCEPTION = 2;
	// 消息类型：session过期
	public static final int MESSAGE_TYPE_SESSION_TIMEOUT = 3;
	// 消息类型：弹出框（URL无权限或token不一致等）
	public static final int MESSAGE_TYPE_DIALOG = 4;
	// 消息类型：不可恢复异常（系统异常、其他）
	public static final int MESSAGE_TYPE_EXCEPTION = 5;

	// 消息代码
	public static final String MESSAGE_CODE_100001 = "100001";

	public static final String MESSAGE_CODE_200001 = "200001";
	public static final String MESSAGE_CODE_200002 = "200002";
	public static final String MESSAGE_CODE_200003 = "200003";
	public static final String MESSAGE_CODE_200004 = "200004";

	public static final String MESSAGE_CODE_200010 = "200010";

	public static final String MESSAGE_CODE_300001 = "300001";

	public static final String MESSAGE_CODE_400001 = "400001";
	public static final String MESSAGE_CODE_400002 = "400002";
	public static final String MESSAGE_CODE_400003 = "400003";
	public static final String MESSAGE_CODE_400004 = "400004";
	public static final String MESSAGE_CODE_400005 = "400005";
	public static final String MESSAGE_CODE_400006 = "400006";
	public static final String MESSAGE_CODE_400007 = "400007";

	public static final String MESSAGE_CODE_500001 = "500001";
	public static final String MESSAGE_CODE_500002 = "500002";
	public static final String MESSAGE_CODE_500003 = "500003";
	public static final String MESSAGE_CODE_500004 = "500004";
	public static final String MESSAGE_CODE_500005 = "500005";

    /**
     * 共通MSG定义
     */
    public final static class ComMsg {
        public static java.lang.String INPUT_REQUIRE = "1000001";
        public static java.lang.String INPUT_FORMAT = "1000002";
        public static java.lang.String UPDATE_BY_OTHER = "1000003";
        public static java.lang.String DATA_NOT_FOUND = "1000004";
        public static java.lang.String TIME_OUT = "1000005";
        public static java.lang.String NO_AUTHORIZE = "1000006";
        public static java.lang.String SYSTEM_ERR = "1000007";
        public static java.lang.String NOT_EXISTS = "1000008";
        public static java.lang.String ALREADY_EXISTS = "1000009";
    }

}
