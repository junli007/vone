define(function(require) {
    var omsApp = require('modules/core/core.module');

    omsApp.controller('popUserPermissionController', ['$scope', function ($scope) {																					
    	var _ = require('underscore');

    	$scope.initialize=function(){
    		
    	}
    	/**
         * 根据下拉列表框选择的内容 给下个一下拉列表框赋值
         */
    	$scope.onSelectChang = function(id,parent){
        	if(parent[0].application !== undefined)
        	{
        		$scope.popUserPermission.moduleData=_.findWhere(parent,{id:id}).children;
        		$scope.popUserPermission.controllerData=[];
        		$scope.popUserPermission.actionData=[];
        	}else if(parent[0].module !== undefined){
        		$scope.popUserPermission.controllerData=_.findWhere(parent,{id:id}).children;
        		$scope.popUserPermission.actionData=[];
        	}else{
        		$scope.popUserPermission.actionData=_.findWhere(parent,{id:id}).children;
        	}
        	
        }
    	$scope.doOk = function() {
        	if($scope.userPermissionForm.$valid)
        	{
        		$scope.doUpdatePermission();
        		$scope.closeThisDialog();
        	}
            
        };
																			
    }])	
});
