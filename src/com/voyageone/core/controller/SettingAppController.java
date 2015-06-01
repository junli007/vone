package com.voyageone.core.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.voyageone.core.Constants;
import com.voyageone.core.UrlConstants;
import com.voyageone.core.ajax.AjaxResponseBean;
import com.voyageone.core.emum.UserEditEnum;
import com.voyageone.core.formbean.InFormUser;

/**
 * OMS 用户管理画面
 * 
 * @author james
 *
 */
@Scope(Constants.SCOPE_PROTOTYPE)
@Controller
@RequestMapping(value = UrlConstants.URL_CORE_SETTING_APP)
public class SettingAppController extends SettingBaseController {

	/**
	 * 追加application
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = { "/addApp", "/addModule", "/addController", "/addAction" })
	public void add(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map<String, Object> requestMap) {
		if (request.getServletPath().lastIndexOf("/addApp") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Application, 0);
		} else if (request.getServletPath().lastIndexOf("/addModule") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Module, 0);
		} else if (request.getServletPath().lastIndexOf("/addController") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Controller, 0);
		} else if (request.getServletPath().lastIndexOf("/addAction") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Action, 0);
		}
	}

	/**
	 * 更新application
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = { "/updateApp", "/updateModule", "/updateController", "/updateAction" })
	public void update(HttpServletRequest request, HttpServletResponse response,
			@RequestBody Map<String, Object> requestMap) {
		if (request.getServletPath().lastIndexOf("/updateApp") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Application, 1);
		} else if (request.getServletPath().lastIndexOf("/updateModule") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Module, 1);
		} else if (request.getServletPath().lastIndexOf("/updateController") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Controller, 1);
		} else if (request.getServletPath().lastIndexOf("/updateAction") > -1) {
			commonEdit(request, response, requestMap, UserEditEnum.Action, 1);
		}
	}
}
