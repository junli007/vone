<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  
  <body>
    This is my JSP page. <br>
  </body>
    <%
	String webRootPath = request.getContextPath();
	%>
	  <script charset="UTF-8" type="text/javascript" src="<%=webRootPath%>/dep/jquery/jquery.min.js"></script>
	<script  type="text/javascript">
		var rootPath = "<%=webRootPath%>";
	
		// /addneworder/doSave
		/*var FormOrdersSearch = {
			"orderInfo" : {
						orderNumber : "7777099",
				
						// 有就传
						customerId : "",				

						// address
						//	bill to
						name : "纪明1",
						company : "chaobo22",
						email : "jiming1221@163.com",
						address : "长宁路1302弄73支弄32号504室1",
						address2 : "长宁路1302弄73支弄32号504室2",
						city : "市辖区",
						state : "上海市",
						zip : "200051",
						country : "China",
						phone : "15000708158",
				
						//	ship to
						shipName : "ship纪明",
						shipCompany : "ship chaobo",
						shipEmail : "ship jiming1221@163.com",
						shipAddress : "ship 长宁路1302弄73支弄32号504室1",
						shipAddress2 : "ship 长宁路1302弄73支弄32号504室2",
						shipCity : "ship 市辖区",
						shipState : "ship 上海市",
						shipZip : "200052",
						shipCountry : "ship China",
						shipPhone : "15000708159",
				
						// custom fields
						localShipOnHold : false,						 
						waitRealRefund : false,
						priceDifferenceNoPay : true,
						useTmallPointFee : 50,
						
						// message and notes
						orderInst : "orderInst",
						comments : "comments",
						invoiceInfo : "上海潮舶",
						invoice : "YES",
						
						// payment
						shipping : "SF Standard",
						cartId : "23",
						poNumber : "123456",
						
						// server set field
						orderChannelId : "001",
						
						// calu field
						productTotal : "2884",
						finalProductTotal : "2884",

						surcharge : "100",
						revisedSurcharge : "100",

						discount : "-200",
						revisedDiscount : "-200",
						
						shippingTotal : "10",
						finalShippingTotal : "10",
						
						grandTotal : "2794",
						finalGrandTotal : "2794",

						expectedNet : "2794",
						actualNet : "0",
						balanceDue : "2794",

						coupon : "",
						couponDiscount : "0",
						couponOk : "",
						revisedCouponDiscount : "0",
						
						shippedWeight : "0",
						actualShippedWeight : "0",

						discountType : "2",
						discountPercent : "0",
						
						sourceOrderId : "12",
						orderKind : "1"
						},
			"orderDetailsList" : [
							// 物品信息
							{
								orderNumber : "7777099",
								sku : "glm03-pgry-8",
								quantityOrdered : "2",
								product : "Nike Air Force 1 Premium1",
								pricePerUnit : "927"
							},							
							{
								orderNumber : "7777099",
								sku : "511371-100-12",
								quantityOrdered : "1",
								product : "Nike Air Force 1 Premium2",
								pricePerUnit : "1030"
							}
						],
			"transactionsList" : [
							{	
								orderNumber : "7777099",
								description : "Payment Received at Manual Orders",
								amount : 890,
								type : "Cash"
							},
							{	
								orderNumber : "7777099",
								description : "Payment Received at Manual Orders",
								amount : 70,
								type : "Cash"
							}
						]
			};*/
		
		// /orderdetail/doInit
		/*var FormOrdersSearch = {
				orderNumber : '7777099'			
			};*/
			
		// doGetCode
		/*var FormOrdersSearch = {
				typeIdList : ['6','9']
			};*/
			
		// doGetSKUInfo
		/*var FormOrdersSearch = {
				skuStartsWith : "skuStartsWith",
				skuIncludes : "skuIncludes",
				nameStartsWith : "nameStartsWith",
				nameIncludes : "nameIncludes",
				desStartsWith : "desStartsWith",
				desIncludes : "desIncludes"			
			};*/
		
		// 	doGetCustomerInfo
		/*var FormOrdersSearch = {
				customerId : "",
				orderNumber : "",
				lastName : "",
				phone : "150"		
			};*/
	
		// 	doSaveAdjustment
		/*var FormOrdersSearch = {
				adjustmentItem : {
									orderNumber : "8888009",
									adjustmentType : "1",
									adjustmentReason : "测试用",
									adjustmentNumber : "50"
								},
				orderPrice : {
								orderNumber : "8888009",
								
								productTotal : "1",
								finalProductTotal : "2",
								surcharge : "3",
								revisedSurcharge : "4",
								discount : "5",
								revisedDiscount : "6",
								couponDiscount : "7",
								revisedCouponDiscount : "8",
								shippingTotal : "9",
								finalShippingTotal : "10",
								grandTotal : "11",
								
								finalGrandTotal : "12",
								expectedNet : "13",
								actualNet : "14",
								balanceDue : "15"
							}				
			};*/
			
			// 百分比
			/*var FormOrdersSearch = {
						orderNumber : "7777099",
						adjustmentType : "2",
						adjustmentReason : "测试用",
						adjustmentNumber : "0.05",
						adjustmentDiscountType : "3"
					};*/
			// 手工输入
			/*var FormOrdersSearch = {
						orderNumber : "7777099",
						adjustmentType : "2",
						adjustmentReason : "测试用",
						adjustmentNumber : "100",
						adjustmentDiscountType : "2"
					};*/
			/*var FormOrdersSearch = {
						orderNumber : "7777099",
						adjustmentType : "4",
						adjustmentReason : "测试用",
						adjustmentNumber : "100",
						adjustmentDiscountType : ""
					};*/	
		
		// doSetOrderStatus	
		/*var FormOrdersSearch = {
				orderNumber : '7777099',
				orderStatus  : 'In Processing'
			};*/
			
		// doSetOrderDetailStatus
		/*var FormOrdersSearch = {
				orderNumber : '7777099',
				itemNumber : '',
				status : 'In Processing'
			};*/
	
		// doSetOrderOtherProp
		/*var FormOrdersSearch = {
				orderNumber : '7777099' ,
				waitRealRefund : false ,
				priceDifferenceNoPay : true ,
				useTmallPointFee : '10.06'
			};*/
	
		// doReturnLineItem
		/*var FormOrdersSearch = {
				orderNumber : '1000000002' ,
				orderDetailsList : [
							// 物品信息
							{
								itemNumber : "2"
							},							
							{
								itemNumber : "3"
							}
						],
				returnShipping : true
			};*/

		// doUnReturnLineItem			
		var FormOrdersSearch = {
				orderNumber : '1000000002' ,
				orderDetailsList : [
							// 物品信息
							{
								itemNumber : "2"
							},							
							{
								itemNumber : "3"
							}
						],
				returnShipping : true
			};
	
	   	$(function(){
			testReq();
		});
	   	
	   	function testReq() {
	   		//$.post(rootPath + "/oms/orders/addneworder/doInit.html", JSON.stringify(FormOrdersSearch), testReq_end,'json');
	   		//$.post(rootPath + "/oms/orders/orderdetail/doGetNotesPic.html?imgPath=D:\\panda.jpg", FormOrdersSearch, testReq_end,'json');
	   		//$.post(rootPath + "/oms/orders/orderdetail/doGetDetailPic.html?imgPath='http://image.sneakerhead.com/is/image/sneakerhead/tmall-imgn?$460$&$img=nike-women-dunk-sky-hi-sneaker-boot-616738001-1&layer=2&originN=0,.5&pos=0,105'", FormOrdersSearch, testReq_end,'json');
	   		//$.post(rootPath + "/oms/orders/addneworder/doSave.html", JSON.stringify(FormOrdersSearch), testReq_end,'json');
	   		
	   		$.ajax({  
			    type: "POST",
				//url: rootPath + "/oms/orders/addneworder/doSave.html",
			    //url: rootPath + "/oms/orders/addneworder/doInit.html",
			    //url: rootPath + "/oms/orders/addneworder/doGetCustomerInfo.html",

			    //url: rootPath + "/oms/common/service/doGetCode.html",
			    //url: rootPath + "/oms/common/service/doGetSKUInfo.html",
			    
			    //url: rootPath + "/oms/orders/orderdetail/doGetNotesPic.html?imgPath=panda",
				//url: rootPath + "/oms/orders/orderdetail/doInit.html",			    
			    //url: rootPath + "/oms/orders/orderdetail/doSaveAdjustment.html",  
			    
			    //url: rootPath + "/oms/orders/orderdetail/doSetOrderStatus.html",
			    //url: rootPath + "/oms/orders/orderdetail/doSetOrderOtherProp.html",
			    
			    //url: rootPath + "/oms/orders/orderdetail/doReturnLineItem.html",
			    url: rootPath + "/oms/orders/orderdetail/doUnReturnLineItem.html",
			    
			    data: JSON.stringify(FormOrdersSearch),
			    //dataType:"json",  
			    contentType : 'application/json;charset=utf-8', 
			    success: function(data){  
					console.log(data);
			    },  
			    error: function(res){
			    	console.log(res);
			    }  
			});
	   	}


	   	function testReq_end(json) {
	   		console.log(json);
	   	}
	</script>
</html>
