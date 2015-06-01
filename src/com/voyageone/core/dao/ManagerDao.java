package com.voyageone.core.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.voyageone.core.Constants;
import com.voyageone.base.dao.BaseDao;
import com.voyageone.core.emum.UserEditEnum;
import com.voyageone.core.formbean.InFormUser;

@Repository
public class ManagerDao extends BaseDao{

	
	//取得ct_role的信息
	public List<Map<String, Object>> getBatchJobList(){
		
		List<Map<String, Object>>info=(List) selectList(Constants.DAO_NAME_SPACE_CORE + "tm_task_control_getBarchJobList");
		if (info == null || info.size() == 0) {
			info = new ArrayList<Map<String, Object>>();
		}
		
		return info;
	}
	
	public int updateJobRun(Map data){
		return updateTemplate.update(Constants.DAO_NAME_SPACE_CORE + "tm_task_control_updateRunFlg",data);
	}
	
	public int insertComMtTask(Map data){
		return updateTemplate.update(Constants.DAO_NAME_SPACE_CORE + "com_mt_task_insert_batch",data);
	}
	public int insertTmTaskControl(Map data){
		return updateTemplate.update(Constants.DAO_NAME_SPACE_CORE + "tm_task_control_insert_batch",data);
	}
}
