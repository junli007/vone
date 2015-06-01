/**
 * @Name:    translate_oms_en.js
 * @Date:    2015/3/25
 *
 * @User:    Edward
 * @Version: 1.0.0
 */

define(function(require) {
    var mainApp = require('components/app');
    require('components/services/language.service');

    mainApp.config (["$translateProvider", "languageType",
        function ($translateProvider, languageType) {

        $translateProvider.translations(languageType.en,
            {
                COMMON_INPUT_MUST: ' *',
                CORE_BUTTON_LOG_OUT: 'LOG OUT',

                // --------------------------------------------------------- START -------- oms - orders - search
                
                TXT_ORDERS_SEARCH_SEARCH_ORDER_NUMBER: 'Order#',
                TXT_ORDERS_SEARCH_SEARCH_WEB_ORDER: 'Web Order#',
                TXT_ORDERS_SEARCH_SEARCH_ORDER_DATE: 'Order Date',

                TXT_ORDERS_SEARCH_SEARCH_NAME: 'Name',
                TXT_ORDERS_SEARCH_SEARCH_COMPANY: 'Company',
                TXT_ORDERS_SEARCH_SEARCH_CITY: 'City',
                TXT_ORDERS_SEARCH_SEARCH_STATE: 'State',
                TXT_ORDERS_SEARCH_SEARCH_COUNTRY: 'Country',

                TXT_ORDERS_SEARCH_SEARCH_PAYMENT_STATUS: 'Payment Status',
                TXT_ORDERS_SEARCH_TRANSACTION_STATUS: 'Transaction Status',
                TXT_ORDERS_SEARCH_SEARCH_ANY: 'Any',
                TXT_ORDERS_SEARCH_SEARCH_CREDIT_DUE: 'Credit Due',
                TXT_ORDERS_SEARCH_SEARCH_BALANCE_DUE: 'Balance Due',
                TXT_ORDERS_SEARCH_SEARCH_PD_IN_FULL: 'Pd. in Full',

                TXT_ORDERS_SEARCH_SEARCH_PAYMENT_METHOD: 'Payment Method',

                TXT_ORDERS_SEARCH_SEARCH_STORE: 'Store',
                TXT_ORDERS_SEARCH_SEARCH_SHOPPING_CART: 'Shopping Cart',
                TXT_ORDERS_SEARCH_SEARCH_QUICK_FILTER: 'Quick Filter',
                TXT_ORDERS_SEARCH_SEARCH_SHIPPING_METHOD: 'Shipping Method',
                TXT_ORDERS_SEARCH_SEARCH_TRACKING: 'Tracking#',

                TXT_ORDERS_SEARCH_CUSTOMER_ID: 'Customer ID',

                TXT_ORDERS_SEARCH_SEARCH_SKU_INCLUDES: 'SKU Includes',

                TXT_ORDERS_SEARCH_SEARCH_ORDER_STATUS: 'Order Status',

                TXT_ORDERS_SEARCH_SEARCH_LOCAL_SHIP_ON_HOLD: 'local ship on hold',
                TXT_ORDERS_SEARCH_SEARCH_INVOICE: 'invoice',
                TXT_ORDERS_SEARCH_SEARCH_FREIGHT_BY_CUSTOMER: 'freight by customer',

                TXT_ORDERS_SEARCH_SEARCH_PHONE: 'Phone',
                TXT_ORDERS_SEARCH_SEARCH_GRAND_TOTAL_AMOUNT: 'Grand Total Amount',

                TXT_ORDERS_SEARCH_BALANCE_DUE: 'Balance Due',
                TXT_ORDERS_TRANSACTION_BALANCE_DUE: 'Transaction Balance Due',
                TXT_ORDERS_PAYMENT_BALANCE_DUE: 'Payment Balance Due',
                TXT_ORDERS_SEARCH_SEARCH_CHANNEL: 'Channel',
                TXT_ORDERS_SEARCH_SEARCH_WANGWANG_ID: 'Wangwang ID',

                // --------------------------------------------------------- END ---------- oms - orders - search

                BUTTON_RELOAD: 'RELOAD',
                BUTTON_BIND: 'BIND',
                BUTTON_ADD: 'ADD',
                BUTTON_CANCEL: 'CANCEL',
                BUTTON_LOCK: 'LOCK',
                BUTTON_UNLOCK: 'UNLOCK',
                BUTTON_BACK: 'BACK',
                BUTTON_SUB_CANCEL: 'Cancel',
                TXT_OMS_RETURN: 'Return',
                BUTTON_SUB_DISCOUNT: 'Discount',
                BUTTON_SUB_SHIP: 'Shipping',
                BUTTON_SUB_ADD: 'Add',
                BUTTON_SUB_SAVE: 'Save',
                BUTTON_SUB_ACTION: 'Action',
                BUTTON_SUB_DELETE: 'Delete',
                BUTTON_SUB_SELECT: 'Select',
                BUTTON_SUB_APPROVE: 'Approve',

                TXT_ORDER_NEW_ORDER_TITLE: 'New Order Customer Info',
                TXT_ORDER_PAYMENT_TOTAL: 'Payment Total',
                TXT_ORDER_LOCKED: 'Locked',
                TXT_ORDER_ORDERNUMBER: 'Order#',
                TXT_ORDER_WEBORDERNUMBBER: 'Web#',
                TXT_ORDER_ORDERDATE: 'OrderDate',
                TXT_ORDER_SKU: 'SKU',
                TXT_ORDER_PRODUCT: 'Product Name',
                TXT_ORDER_UNIT_PRICE_DISCOUNT: 'Price(Discount)',
                TXT_ORDER_UNIT_PRICE: 'Price',
                TXT_ORDER_STATUS: 'Status',
                TXT_ORDER_SYNSHIP_STATUS: 'SS Status',
                TXT_ORDER_STORE: 'Store',
                TXT_ORDER_INVENTORY: 'Inv.',
                TXT_ORDER_PRICING: 'Pricing',
                TXT_ORDER_MAIN: 'Main',
                TXT_ORDER_ADDRESS: 'Address',
                TXT_ORDER_GIFTMESSAGE: 'Gift Message',
                TXT_ORDER_CUSTOMER_COMMENT: 'Customer Comments',
                TXT_ORDER_INTERNAL_MESSAGE: 'Internal Comments',
                TXT_ORDER_NOTES: 'Notes',
                TXT_ORDER_SHIPPING: 'Shipping',
                TXT_ORDER_REFUND: 'Refund',
                TXT_ORDER_CUSTOMER_REFUND_REQUEST: 'Customer\'s Request Refund:',
                TXT_ORDER_TRANSACTION_INFO: 'Transaction Info',
                TXT_ORDER_PRODUCT_EXPECTED: 'Expected',
                TXT_ORDER_TRANSACTION_DEBT_TOTAL: 'Debt Total',
                TXT_ORDER_TRANSACTION_CREDIT_TOTAL: 'Credit Total',
                TXT_ORDER_TRANSACTION_OPERATION_TIME: 'Time',
                TXT_ORDER_TRANSACTION_NAME: 'Name',
                TXT_ORDER_TRANSACTION_PRICE_DEBT: 'Debt',
                TXT_ORDER_TRANSACTION_PRICE_CREDIT: 'Credit',
                TXT_ORDER_PRODUCT_TOTAL: 'Product Total',
                TXT_ORDER_CHARGES: 'Charges',
                TXT_ORDER_DISCOUNTS: 'Discounts',
                TXT_ORDER_COUPON: 'Coupon',
                TXT_ORDER_SHIPMENT: 'Shipment',
                TXT_ORDER_GRAND_TOTAL: 'Grand Total',
                TXT_ORDER_DESCRIPTION: 'Description',
                TXT_ORDER_AMOUNT: 'Amount',
                TXT_ORDER_TYPE: 'Type',
                TXT_ORDER_SOLD_TO: 'Sold To',
                BUTTON_SUB_EDIT: 'Edit',
                TXT_ORDER_COMMENT: 'Comment',
                TXT_ORDER_INVOICE_INFO: 'Invoice Info',
                BUTTON_SAVE: 'SAVE',
                TXT_ORDER_ENTERED: 'Entered',
                TXT_ORDER_CREATED_BY: 'Created By',
                TXT_ORDER_SHIP_DATE: 'Ship Date',
                TXT_ORDER_FREIGHT_COLLECT: 'Freight Collect',
                TXT_ORDER_INVOICE_STATUS: 'Invoice Status',
                TXT_ORDER_INVOICE_KIND: 'Invoice Kind',

                BUTTON_SEARCH: 'Search',
                BUTTON_SEARCH_SKU: 'Search SKU',
                BUTTON_COPY_FROM_SOLD_TO: 'Copy From<br> Sold To >>',
                BUTTON_PLUS: '+',
                BUTTON_MINUS: '-',
                BUTTON_CONTINUE: 'Continue',
                BUTTON_CLOSE: 'Close',
                BUTTON_OK: 'OK',

                TXT_OMS_ADDRESS: 'Address',
                TXT_OMS_PAYMENT_INFO: 'Payment Info',
                TXT_OMS_SOLD_TO: 'Sold To',
                TXT_OMS_EMAIL: 'E-Mail',
                TXT_OMS_PHONE: 'Phone',
                TXT_OMS_CITY_STATE_ZIP: 'City & State & Zip',
                TXT_OMS_COUNTRY: 'Country',
                TXT_OMS_NAME: 'Name',
                TXT_OMS_DISCOUNT: 'Discount',
                TXT_OMS_CHAR_PERCENT: '%',
                TXT_OMS_SHIPPING_CHANNEL: 'Shipping Channel',
                TXT_OMS_SHIPPING_METHOD: 'Shipping Method',
                TXT_OMS_PARYMENT_METHOD: 'Payment Method',
                TXT_OMS_AMOUNT: 'Amount',
                TXT_OMS_CURRENT_CUSTOMER_INFO_AND_OPTIONS: 'Current Customer Info & Options',
                TXT_OMS_USE_SHIP_TO_ADDRESS_FORM_PREVIOUS_ORDER: 'Use Ship To Address From Previous Order?',
                TXT_OMS_USE_THIS_SHIP_TO_ADDRESS: 'Use This Ship To Address',
                TXT_OMS_USE_SELECTED_ADDRESS: 'Use Selected Address',
                TXT_OMS_ORDER_LIST: 'Order List',
                TXT_OMS_ORDER_HISTORY: 'Order History',
                TXT_OMS_SHIP_TO: 'Ship To',
                TXT_OMS_COMPANY: 'Company',
                TXT_OMS_ADDRESS_1: 'Address 1',
                TXT_OMS_ADDRESS_2: 'Address 2',
                TXT_OMS_CITY: 'City',
                TXT_OMS_STATE: 'State',
                TXT_OMS_ZIP: 'Zip',
                TXT_OMS_REASON: 'Reason',
                TXT_OMS_ADJUSTMENT_SHIPPING: 'Adjust shipping',
                TXT_OMS_ORDER_DISCOUNT: 'Order Discount',
                TXT_OMS_PRODUCT_DISCOUNT: 'Product Discount',
                TXT_OMS_REVISED_AMOUNT: 'Revised Amount',
                TXT_OMS_AMOUNT_TO_EDIT: 'Amount to Edit',
                TXT_OMS_FINAL_AMOUNT: 'Final Amount',
                //
                TXT_ORDER_SHIP_ID_WITH_NAME:'ID & Name',
                TXT_ORDER_SHIP_EDIT:'Edit Address',
                // --------------------------------------------------------- START ---------- popNewDiscount
                TXT_OMS_DISCOUNT_TITLE: 'Order or Sku Discount',
                TXT_OMS_OLD_PRICE: 'Original Price',
                // --------------------------------------------------------- START ---------- popCancelLine
                TXT_OMS_CANCEL_ORDER_TITLE: 'Cancel Order Or Item',
                TXT_OMS_CANCEL_ORDER: 'Cancel Order',
                TXT_OMS_ENTER_REASON: 'Enter Reason *',
                // --------------------------------------------------------- START ---------- popNewNodes
                TXT_OMS_NODES_ADD_NOTE: 'Add Note',
                BUTTON_SELECT_FILE: 'Select File',
                TXT_OMS_NODES_IMAGE_ALLOWED: 'Only PNG, GIF, JPG files allowed.',
                // --------------------------------------------------------- START ---------- popBindOrder
                TXT_OMS_BIND_ORDER_TITLE: 'Bind Order',
                TXT_OMS_BIND_ORDER_CURRENT_ORDER_INFO: 'Current Order Info',
                TXT_OMS_BIND_ORDER_BIND_ORDER_INFO: 'Bind Order Info',
                // --------------------------------------------------------- START ---------- popSearchSKUs
                TXT_OMS_SELECT_SKU_SEARCH_SKU_AND_PRICE: 'Search Sku & Set Price',
                TXT_OMS_SELECT_SKU_NAME: 'Name',
                TXT_OMS_SELECT_SKU_QTY_TO_ORDER: 'Qty',
                TXT_OMS_SELECT_SKU_DESCRIPTION: 'Description',
                // --------------------------------------------------------- START ---------- popSearchCustomer
                TXT_OMS_SEARCH_FOR_A_CUSTOMER: 'Search for a customer',
                TXT_OMS_CUSTOMER_ID: 'Customer ID',
                TXT_OMS_CUSTOMER_INFORMATION: 'Customer Information',
                TXT_OMS_CUSTOMER_SEARCH_STORE: 'Store *',

                // --------------------------------------------------------- START ---------- popEditSoldTo
                TXT_OMS_EDIT_SOLD_TO_COMMENT: 'Replace Customer Data with revised data',

                // --------------------------------------------------------- START ----------  popCancelLineItem
                TXT_OMS_CANCEL_PRODUCT: 'Cancel Product',
                // --------------------------------------------------------- START ---------- USER MANATER
                GRID_TITLE_TXT_USER_MANATER_USERNAME:'USERNAME',
                GRID_TITLE_TXT_USER_MANATER_COMPANY:'COMPANY',
                GRID_TITLE_TXT_USER_MANATER_FIRST_NAME:'FIRST NAME',
                GRID_TITLE_TXT_USER_MANATER_LAST_NAME:'LAST NAME',
                GRID_TITLE_TXT_USER_MANATER_EMAIL:'EMALL',
                TITLE_TXT_ACTIVE:'ACTIVE',
                GRID_TITLE_TXT_USER_MANATER_SUPERUSER:'SUPERUSER',
                GRID_TITLE_TXT_USER_MANATER_ROLE:'ROLE',
                GRID_TITLE_TXT_USER_MANATER_PROPERTY:'PROPERTY',
                GRID_TITLE_TXT_USER_MANATER_DESCRIPTION:'DESCRIPTION',
                GRID_TITLE_TXT_USER_MANATER_CONTROLLER:'CONTROLLER',
                GRID_TITLE_TXT_USER_MANATER_ACTION:'ACTION',
                GRID_TITLE_TXT_USER_MANATER_VALUE:'VALUE',
                // --------------------------------------------------------- END ---------- USER MANATER
                // --------------------------------------------------------- START ---------- OMS-CUSTOMER-SEARCH
                TXT_NO_NOTES: 'No Notes!',
                BUTTON_ADD_ORDER: 'New Order',                                                                      
                BUTTON_ADD_NOTES: 'Add Notes',  
                BUTTON_EDIT_NOTES: 'Edit Notes', 
                TXT_TITLE_CUSTOMER_SEARCH: 'Customer Search',  
                TXT_TITLE_CUSTOMER_INFO: 'Customer Infomation',    
                TXT_CUSTOMER_SEARCH_CUSTMERID: 'CustomerID',  
                TXT_TITLE_CUSTOMER_NOTES_ENTERED: 'Entered',                                                        
                TXT_TITLE_CUSTOMER_NOTES_ENTPER: 'By',   
                TAB_TITLE_CUSTOMER_DETAIL_ORDTRAN: 'Orders & Transactions',                                         
                TAB_TITLE_CUSTOMER_DETAIL_NOTES: 'Notes',
                GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_NAME: 'Full Name',                                             
                GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_LASTORDERDATE: 'Last Order Date',                                
                GRID_TITLE_TXT_OMS_SEARCH_CUSTOMER_STATE: 'State',
                GRID_TITLE_CUSTOMER_ORDER: "This customer's orders (most recent of top)",                           
                GRID_TITLE_CUSTOMER_TRANSACTION: "This customer's transactions (most recent of top)", 
                //---------------------------------------------------------- END ---------- OMS-CUSTOMER-SEARCH

                TXT_ORDER_SEARCH_ORDER_INFO: 'Order Search',
                TXT_ORDER_SEARCH_BILL_TO: 'B',
                TXT_ORDER_SEARCH_SHIP_TO: 'S',
                TXT_ORDER_SEARCH_TO: '-',
                TXT_ORDER_RESERVATION_ID: 'Reservation ID',
                TXT_ORDER_TRACKING_CARRIER: 'Carrier',
                TXT_ORDER_TRACKING_NO: 'Tracking No',
                TXT_ORDER_TRACKING_AREA: 'Tracking Area',                	
                	
                //-------------------------------------------------OMS-INDEX             TXT_ORDER_INDEX_TODATORDER: 'Today Orders Count',
                TXT_ORDER_INDEX_REFUNDORDER: 'Refund Orders Count',
                TXT_ORDER_INDEX_UNAPPROVED: 'UnApproved Orders Count',

                TXT_OMS_PAYMENT_BALANCE_DUE: 'Payment Balance Due',
                TXT_OMS_TRANSACTION_BALANCE_DUE: 'Transaction Balance Due',

            });
    }]);
});

