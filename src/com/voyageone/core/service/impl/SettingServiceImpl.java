package com.voyageone.core.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.voyageone.core.Constants;
import com.voyageone.core.dao.UserDao;
import com.voyageone.core.emum.UserEditEnum;
import com.voyageone.core.formbean.InFormUser;
import com.voyageone.core.service.SettingService;

@Scope(Constants.SCOPE_PROTOTYPE)
@Service
public class SettingServiceImpl implements SettingService {

	@Autowired
	private UserDao userDao;

	@Override
	public List<Map<String, Object>> getUserList(Map<String, Object> data) {

		return userDao.getUserList(data);
	}

	@Override
	public int addUser(InFormUser formUser) {
		return userDao.addUser(formUser);
	}

	@Override
	public int updateUser(InFormUser formUser) {
		return userDao.updateUser(formUser);
	}

	@Override
	public int delUser(int userId) {
		// TODO Auto-generated method stub
		return userDao.delUser(userId);
	}

	/**
	 * 根据用户ID取得该用户的role信息
	 */
	@Override
	public List<Map<String, Object>> getUserRoleInfo(int userId) {
		return userDao.getUserRoleInfoById(userId);
	}

	/**
	 * 根据用户ID取得该用户的权限数据
	 */
	@Override
	public List<Map<String, Object>> getUserPermissionInfo(int userId) {
		return userDao.getUserPermissionInfoById(userId);
	}

	/**
	 * 更新数据（共同）
	 */
	@Override
	public int commonUpdate(Map<String, Object> data, UserEditEnum type) {

		int ret = 0;
		// 更新前先检查一下数据库中是否已存在相应的记录
		List<Map<String, Object>> roleInfo = userDao.selectHandle(data, type);
		// 存在的场合
		if (roleInfo.size() > 0 && !roleInfo.get(0).get("id").toString().equals(data.get("id").toString())) {
			// //删除编辑的那条数据
			// commonDel(Integer.parseInt(data.get("id").toString()),type);
			// //把已存在的那条数据进行更新
			// data.put("id", roleInfo.get(0).get("id").toString());
			return -1;
		}
		ret = userDao.updateHandle(data, type);
		return ret;
	}

	/**
	 * 删除数据（共同）
	 */
	@Override
	public int commonDel(int id, UserEditEnum type) {
		int ret = 0;
		ret = userDao.delHandle(id, type);
		return ret;
	}

	/**
	 * 新增数据（共同）
	 */
	@Override
	public int commonInsert(Map<String, Object> data, UserEditEnum type) {
		int ret = 0;
		if (!data.containsKey("active")) {
			data.put("active", true);
		}
		// 检索改条记录是否存在
		List<Map<String, Object>> roleInfo = userDao.selectHandle(data, type);
		// 存在
		if (roleInfo.size() > 0) {
			// //更新已存在的那条记录
			// data.put("id", roleInfo.get(0).get("id").toString());
			// ret=userDao.updateHandle(data,type);
			ret = -1;
		} else {
			// 插入新数据
			ret = userDao.insertHandle(data, type);
		}
		return ret;
	}

	/**
	 * 查询数据（共同）
	 */
	@Override
	public List<Map<String, Object>> commonSelect(Map<String, Object> data, UserEditEnum type) {
		return userDao.selectHandle(data, type);
	}

	/**
	 * 取得所用的（role,property,company,application,module,controller,action)数据
	 */
	@Override
	public Map<String, Object> getAllRolePermissionName() {
		return userDao.getAllRolePermissionName();
	}

}
