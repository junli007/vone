package com.voyageone.core.service;

import java.util.List;
import java.util.Map;

import com.voyageone.core.emum.UserEditEnum;
import com.voyageone.core.formbean.InFormUser;

public interface SettingService {

	/**
	 * 获得用户列表
	 * 
	 * @return
	 */
	public List<Map<String, Object>> getUserList(Map <String,Object> data);
	
	public int addUser(InFormUser formUser);
	
	public int updateUser(InFormUser formUser);
	
	public int delUser(int userId);
	
	public List<Map<String, Object>> getUserRoleInfo(int userId);
	
	public List<Map<String, Object>> getUserPermissionInfo(int userId);
	
	public List<Map<String, Object>> commonSelect(Map<String,Object> data,UserEditEnum type);
	
	public int commonUpdate(Map<String,Object> data,UserEditEnum type);
	
	public int commonDel(int id,UserEditEnum type);
	
	public int commonInsert(Map<String,Object> data,UserEditEnum type);
	
	public Map<String, Object> getAllRolePermissionName();
}
