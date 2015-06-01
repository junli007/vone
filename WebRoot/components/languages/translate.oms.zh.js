/**
 * @Name:    translate_oms_zh.js
 * @Date:    2015/3/25
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define (function (require) {
    var mainApp = require ('components/app');
    require ('components/services/language.service');

    mainApp.config (["$translateProvider", "languageType",
        function ($translateProvider, languageType) {

            $translateProvider.translations (languageType.zh,
                {

                    COMMON_INPUT_MUST: ' *',
                    CORE_BUTTON_LOG_OUT: '退出',

                    // --------------------------------------------------------- START -------- oms - orders - search
                    
                    TXT_ORDERS_SEARCH_SEARCH_ORDER_NUMBER: '订单号',
                    TXT_ORDERS_SEARCH_SEARCH_WEB_ORDER: 'Web订单号',
                    TXT_ORDERS_SEARCH_SEARCH_ORDER_DATE: '下单日',

                    TXT_ORDERS_SEARCH_SEARCH_NAME: '姓名',
                    TXT_ORDERS_SEARCH_SEARCH_COMPANY: '公司',
                    TXT_ORDERS_SEARCH_SEARCH_CITY: '市',
                    TXT_ORDERS_SEARCH_SEARCH_STATE: '省',
                    TXT_ORDERS_SEARCH_SEARCH_COUNTRY: '国家',

                    TXT_ORDERS_SEARCH_SEARCH_PAYMENT_STATUS: '支付状态',
                    TXT_ORDERS_SEARCH_TRANSACTION_STATUS: '交易状态',
                    TXT_ORDERS_SEARCH_SEARCH_ANY: 'Any',
                    TXT_ORDERS_SEARCH_SEARCH_CREDIT_DUE: 'Credit Due',
                    TXT_ORDERS_SEARCH_SEARCH_BALANCE_DUE: 'Balance Due',
                    TXT_ORDERS_SEARCH_SEARCH_PD_IN_FULL: 'Pd. in Full',

                    TXT_ORDERS_SEARCH_SEARCH_PAYMENT_METHOD: '支付方式',

                    TXT_ORDERS_SEARCH_SEARCH_STORE: '店铺',
                    TXT_ORDERS_SEARCH_SEARCH_SHOPPING_CART: '销售渠道',
                    TXT_ORDERS_SEARCH_SEARCH_QUICK_FILTER: '固定筛选条件',
                    TXT_ORDERS_SEARCH_SEARCH_SHIPPING_METHOD: '快递方式',
                    TXT_ORDERS_SEARCH_SEARCH_TRACKING: '快递单号',

                    TXT_ORDERS_SEARCH_CUSTOMER_ID: '顾客ID',

                    TXT_ORDERS_SEARCH_SEARCH_SKU_INCLUDES: 'SKU包含',

                    TXT_ORDERS_SEARCH_SEARCH_ORDER_STATUS: '订单状态',

                    TXT_ORDERS_SEARCH_SEARCH_LOCAL_SHIP_ON_HOLD: '锁单',
                    TXT_ORDERS_SEARCH_SEARCH_INVOICE: '发票',
                    TXT_ORDERS_SEARCH_SEARCH_FREIGHT_BY_CUSTOMER: '运费到付',

                    TXT_ORDERS_SEARCH_SEARCH_PHONE: '电话',
                    TXT_ORDERS_SEARCH_SEARCH_GRAND_TOTAL_AMOUNT: '总金额',

                    TXT_ORDERS_SEARCH_BALANCE_DUE: '差额',
                    TXT_ORDERS_TRANSACTION_BALANCE_DUE: '交易差额',
                    TXT_ORDERS_PAYMENT_BALANCE_DUE: '支付差额',
                    TXT_ORDERS_SEARCH_SEARCH_CHANNEL: '销售渠道',
                    TXT_ORDERS_SEARCH_SEARCH_WANGWANG_ID: '旺旺名',

                    // --------------------------------------------------------- END ---------- oms - orders - search

                    BUTTON_RELOAD: '刷新',
                    BUTTON_BIND: '绑定',
                    BUTTON_ADD: '新建',
                    BUTTON_CANCEL: '取消',
                    BUTTON_LOCK: '加锁',
                    BUTTON_UNLOCK: '解锁',
                    BUTTON_BACK: '返回',
                    BUTTON_SUB_CANCEL: '取消',
                    TXT_OMS_RETURN: '退货',
                    BUTTON_SUB_DISCOUNT: '修改折扣',
                    BUTTON_SUB_SHIP: '修改运费',
                    BUTTON_SUB_ADD: '新建',
                    BUTTON_SUB_SAVE: '保存',
                    BUTTON_SUB_ACTION: '操作',
                    BUTTON_SUB_DELETE: '删除',
                    BUTTON_SUB_SELECT: '选择',
                    BUTTON_SUB_APPROVE: '批准',

                    TXT_ORDER_NEW_ORDER_TITLE: '新订单顾客信息',
                    TXT_ORDER_PAYMENT_TOTAL: '支付合计',
                    TXT_ORDER_LOCKED: '锁单',
                    TXT_ORDER_ORDERNUMBER: '内部单号',
                    TXT_ORDER_WEBORDERNUMBBER: '外部单号',
                    TXT_ORDER_ORDERDATE: '订单日期',
                    TXT_ORDER_SKU: 'SKU',
                    TXT_ORDER_PRODUCT: '产品名称',
                    TXT_ORDER_UNIT_PRICE_DISCOUNT: '单价（折扣）',
                    TXT_ORDER_UNIT_PRICE: '单价',
                    TXT_ORDER_STATUS: '状态',
                    TXT_ORDER_SYNSHIP_STATUS: 'SS状态',
                    TXT_ORDER_STORE: '仓库',
                    TXT_ORDER_INVENTORY: '库存',
                    TXT_ORDER_PRICING: '价格',
                    TXT_ORDER_MAIN: '主要',
                    TXT_ORDER_ADDRESS: '地址',
                    TXT_ORDER_GIFTMESSAGE: '礼物备注',
                    TXT_ORDER_CUSTOMER_COMMENT: '顾客备注',
                    TXT_ORDER_INTERNAL_MESSAGE: '内部备注',
                    TXT_ORDER_NOTES: '便签',
                    TXT_ORDER_SHIPPING: '快递',
                    TXT_ORDER_REFUND: '退款',
                    TXT_ORDER_CUSTOMER_REFUND_REQUEST: '客户申请退款:',
                    TXT_ORDER_TRANSACTION_INFO: '交易履历',
                    TXT_ORDER_PRODUCT_EXPECTED: '应收款',
                    TXT_ORDER_TRANSACTION_DEBT_TOTAL: '收入合计',
                    TXT_ORDER_TRANSACTION_CREDIT_TOTAL: '支出合计',
                    TXT_ORDER_TRANSACTION_OPERATION_TIME: '交易时间',
                    TXT_ORDER_TRANSACTION_NAME: '内容',
                    TXT_ORDER_TRANSACTION_PRICE_DEBT: '收入',
                    TXT_ORDER_TRANSACTION_PRICE_CREDIT: '支出',
                    TXT_ORDER_PRODUCT_TOTAL: '产品总价',
                    TXT_ORDER_CHARGES: '收费',
                    TXT_ORDER_DISCOUNTS: '折扣',
                    TXT_ORDER_COUPON: '优惠劵',
                    TXT_ORDER_SHIPMENT: '运费',
                    TXT_ORDER_GRAND_TOTAL: '累计',
                    TXT_ORDER_DESCRIPTION: '描述',
                    TXT_ORDER_AMOUNT: '金额',
                    TXT_ORDER_TYPE: '类型',
                    TXT_ORDER_SOLD_TO: '买家信息',
                    BUTTON_SUB_EDIT: '编辑',
                    TXT_ORDER_COMMENT: '备注',
                    TXT_ORDER_INVOICE_INFO: '发票信息',
                    BUTTON_SAVE: '保存',
                    TXT_ORDER_ENTERED: '创建日期',
                    TXT_ORDER_CREATED_BY: '创建者',
                    TXT_ORDER_SHIP_DATE: '运送日期',
                    TXT_ORDER_FREIGHT_COLLECT: '运费到付',
                    TXT_ORDER_INVOICE_STATUS: '发票状态',
                    TXT_ORDER_INVOICE_KIND: '发票类型',

                    BUTTON_SEARCH: '检索',
                    BUTTON_SEARCH_SKU: '检索SKU',
                    BUTTON_COPY_FROM_SOLD_TO: '复制<br> 买家信息 >>',
                    BUTTON_PLUS: '+',
                    BUTTON_MINUS: '-',
                    BUTTON_CONTINUE: '继续',
                    BUTTON_CLOSE: '关闭',
                    BUTTON_OK: '确认',

                    TXT_OMS_ADDRESS: '地址',
                    TXT_OMS_PAYMENT_INFO: '支付信息',
                    TXT_OMS_SOLD_TO: '买家信息',
                    TXT_OMS_EMAIL: '电子邮箱',
                    TXT_OMS_PHONE: '电话',
                    TXT_OMS_CITY_STATE_ZIP: '省 & 市 & 邮编',
                    TXT_OMS_COUNTRY: '国家',
                    TXT_OMS_NAME: '姓名',
                    TXT_OMS_DISCOUNT: '折扣',
                    TXT_OMS_CHAR_PERCENT: '%',
                    TXT_OMS_SHIPPING_CHANNEL: '运输渠道',
                    TXT_OMS_SHIPPING_METHOD: '运输方式',
                    TXT_OMS_PARYMENT_METHOD: '支付方式',
                    TXT_OMS_AMOUNT: '金额',
                    TXT_OMS_CURRENT_CUSTOMER_INFO_AND_OPTIONS: '当前用户信息',
                    TXT_OMS_USE_SHIP_TO_ADDRESS_FORM_PREVIOUS_ORDER: '使用前一订单的收件地址?',
                    TXT_OMS_USE_THIS_SHIP_TO_ADDRESS: '使用该收件地址',
                    TXT_OMS_USE_SELECTED_ADDRESS: '使用选择的地址',
                    TXT_OMS_ORDER_LIST: '订单一览',
                    TXT_OMS_ORDER_HISTORY: '历史订单',
                    TXT_OMS_SHIP_TO: '收件信息',
                    TXT_OMS_COMPANY: '公司',
                    TXT_OMS_ADDRESS_1: '地址1',
                    TXT_OMS_ADDRESS_2: '地址2',
                    TXT_OMS_CITY: '市',
                    TXT_OMS_STATE: '省',
                    TXT_OMS_ZIP: '邮编',
                    TXT_OMS_REASON: '原因',
                    TXT_OMS_ADJUSTMENT_SHIPPING: '运费调整',
                    TXT_OMS_ORDER_DISCOUNT: '订单折扣',
                    TXT_OMS_PRODUCT_DISCOUNT: '物品折扣',
                    TXT_OMS_REVISED_AMOUNT: '修正费用',
                    TXT_OMS_AMOUNT_TO_EDIT: '编辑费用',
                    TXT_OMS_FINAL_AMOUNT: '最终费用',
                    //
                    TXT_ORDER_SHIP_ID_WITH_NAME:'客户ID & 姓名',
                    TXT_ORDER_SHIP_EDIT: '修改地址',
                    // --------------------------------------------------------- START ---------- popNewDiscount
                    TXT_OMS_DISCOUNT_TITLE: '订单或物品折扣',
                    TXT_OMS_OLD_PRICE: '原始价格',
                    // --------------------------------------------------------- START ---------- popCancelLine
                    TXT_OMS_CANCEL_ORDER_TITLE: '取消订单或物品',
                    TXT_OMS_CANCEL_ORDER: '取消订单',
                    TXT_OMS_ENTER_REASON: '请输入原因 *',
                    // --------------------------------------------------------- START ---------- popNewNodes
                    TXT_OMS_NODES_ADD_NOTE: '加备注',
                    BUTTON_SELECT_FILE: '选择文件',
                    TXT_OMS_NODES_IMAGE_ALLOWED: '上传图片类型:PNG, GIF, JPG.',
                    // --------------------------------------------------------- START ---------- popSearchSKUs
                    TXT_OMS_SELECT_SKU_SEARCH_SKU_AND_PRICE: '检索SKU & 设定价格',
                    TXT_OMS_SELECT_SKU_NAME: '商品名称',
                    TXT_OMS_SELECT_SKU_QTY_TO_ORDER: '数量',
                    TXT_OMS_SELECT_SKU_DESCRIPTION: '商品描述',
                    // --------------------------------------------------------- START ---------- popBindOrder
                    TXT_OMS_BIND_ORDER_TITLE: '绑定订单',
                    TXT_OMS_BIND_ORDER_CURRENT_ORDER_INFO: '当前订单信息',
                    TXT_OMS_BIND_ORDER_BIND_ORDER_INFO: '绑定订单信息',

                    // --------------------------------------------------------- START ---------- popSearchCustomer
                    TXT_OMS_SEARCH_FOR_A_CUSTOMER: '检索顾客',
                    TXT_OMS_CUSTOMER_ID: '顾客ID',
                    TXT_OMS_CUSTOMER_INFORMATION: '顾客信息',
                    TXT_OMS_CUSTOMER_SEARCH_STORE: '店铺 *',

                    // --------------------------------------------------------- START ---------- popEditSoldTo
                    TXT_OMS_EDIT_SOLD_TO_COMMENT: '替换顾客信息',

                    // --------------------------------------------------------- START ----------  popCancelLineItem
                    TXT_OMS_CANCEL_PRODUCT: '取消物品',
                    // --------------------------------------------------------- START ---------- USER MANATER
                    GRID_TITLE_TXT_USER_MANATER_USERNAME: '用户名',
                    GRID_TITLE_TXT_USER_MANATER_COMPANY: '公司',
                    GRID_TITLE_TXT_USER_MANATER_FIRST_NAME: '姓',
                    GRID_TITLE_TXT_USER_MANATER_LAST_NAME: '名',
                    GRID_TITLE_TXT_USER_MANATER_EMAIL: '邮箱',

                    TITLE_TXT_ACTIVE: 'ACTIVE',
                    GRID_TITLE_TXT_USER_MANATER_SUPERUSER: '管理员',
                    GRID_TITLE_TXT_USER_MANATER_ROLE: '角色',
                    GRID_TITLE_TXT_USER_MANATER_PROPERTY: '属性',
                    GRID_TITLE_TXT_USER_MANATER_DESCRIPTION: '描述',
                    GRID_TITLE_TXT_USER_MANATER_CONTROLLER: 'CONTROLLER',
                    GRID_TITLE_TXT_USER_MANATER_ACTION: 'ACTION',
                    GRID_TITLE_TXT_USER_MANATER_VALUE: '值',
                    // --------------------------------------------------------- END ---------- USER MANATER
                    // --------------------------------------------------------- START ---------- OMS-CUSTOMER-SEARCH
                    TXT_NO_NOTES: '此客户无相关备注!',
                    BUTTON_ADD_ORDER: '添加订单',
                    BUTTON_ADD_NOTES: '添加备注',
                    BUTTON_EDIT_NOTES: '编辑备注', 
                    TXT_TITLE_CUSTOMER_SEARCH: '客户查询', 
                    TXT_TITLE_CUSTOMER_INFO: '客户信息',
                    TXT_CUSTOMER_SEARCH_CUSTMERID: '客户ID',
                    TXT_TITLE_CUSTOMER_NOTES_ENTERED: '录入日期',
                    TXT_TITLE_CUSTOMER_NOTES_ENTPER: '录入人',
                    TAB_TITLE_CUSTOMER_DETAIL_ORDTRAN: '订单 & 交易',
                    TAB_TITLE_CUSTOMER_DETAIL_NOTES: '备注',
                    GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_NAME: '姓名',
                    GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_LASTORDERDATE: '最近订单日期',
                    GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_STATE: '省/市',
                    GRID_TITLE_CUSTOMER_ORDER: '相关订单信息(最新优先)',
                    GRID_TITLE_CUSTOMER_TRANSACTION: '相关交易信息(最新优先)',
                    //---------------------------------------------------------- END ---------- OMS-CUSTOMER-SEARCH

                    TXT_ORDER_SEARCH_ORDER_INFO: '订单查询',
                    TXT_ORDER_SEARCH_BILL_TO: 'B',
                    TXT_ORDER_SEARCH_SHIP_TO: 'S',
                    TXT_ORDER_SEARCH_TO: '-',
                    TXT_ORDER_RESERVATION_ID: 'Reservation ID',
                    TXT_ORDER_TRACKING_CARRIER: '快递公司',
                    TXT_ORDER_TRACKING_NO: '运单号',
                    TXT_ORDER_TRACKING_AREA: '区域',
                    	
                    //--------------------------------------------------------OMS-INDEX
	            	TXT_ORDER_INDEX_TODATORDER: '今日订单统计',
	                TXT_ORDER_INDEX_REFUNDORDER: '退款未处理订单统计',
	                TXT_ORDER_INDEX_UNAPPROVED: '未Approved订单统计',
	
	                TXT_OMS_PAYMENT_BALANCE_DUE: '支付差额',
	                TXT_OMS_TRANSACTION_BALANCE_DUE: '交易差额',
                });
        }]);
});
