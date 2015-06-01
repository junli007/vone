package com.voyageone.core.dao;

import org.springframework.stereotype.Repository;

import com.voyageone.core.Constants;
import com.voyageone.base.dao.BaseDao;
import com.voyageone.core.modelbean.ExceptionLogBean;

@Repository
public class LogDao extends BaseDao {
	
	public int insertException(ExceptionLogBean exceptionBean) {
		return updateTemplate.update(Constants.DAO_NAME_SPACE_CORE + "insertException", exceptionBean);
	}
	
}
