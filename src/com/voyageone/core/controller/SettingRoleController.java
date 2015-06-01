package com.voyageone.core.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.voyageone.core.Constants;
import com.voyageone.core.UrlConstants;
import com.voyageone.core.emum.UserEditEnum;


@Scope(Constants.SCOPE_PROTOTYPE)
@Controller
@RequestMapping(value = UrlConstants.URL_CORE_SETTING_ROLE)
public class SettingRoleController extends SettingBaseController{
	
	@RequestMapping(value = "/getRoleList")
	public void getRoleList(HttpServletRequest request, HttpServletResponse response) {
		
		commonEdit(request, response, null, UserEditEnum.Role,3);
	}
	@RequestMapping(value = "/addRole")
	public void addRole(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map <String,Object> requestMap) {
		commonEdit(request, response, requestMap, UserEditEnum.Role,0);
	}
	@RequestMapping(value = "/updateRole")
	public void updateRole(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map <String,Object> requestMap) {
		
		commonEdit(request, response, requestMap, UserEditEnum.Role,1);
	}
	@RequestMapping(value = "/getRoleInfoById")
	public void getRoleInfoById(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map <String,Object> requestMap) {
		
		commonEdit(request,response,requestMap,UserEditEnum.RolePermission,3);
	}
	@RequestMapping(value = "/addRolePermission")
	public void addRolePermission(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map <String,Object> requestMap) {
		commonEdit(request, response, requestMap, UserEditEnum.RolePermission,0);
	}
	@RequestMapping(value = "/updateRolePermission")
	public void updateRolePermission(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map <String,Object> requestMap) {
		
		commonEdit(request, response, requestMap, UserEditEnum.RolePermission,1);
	}
}
