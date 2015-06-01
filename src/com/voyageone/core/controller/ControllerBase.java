package com.voyageone.core.controller;

import com.voyageone.core.Constants;
import com.voyageone.core.modelbean.UserSessionBean;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

/**
 * 通用 Controller 的基类
 * Created on 2015-04-29 15:29:52
 *
 * @author Jonas
 * @version 0.0.4
 */
public abstract class ControllerBase {

    private Log logger = LogFactory.getLog(getClass());

    @Autowired
    private HttpServletRequest request;

    protected Log getLogger() {
        return logger;
    }

    protected HttpServletRequest getRequest() {
        return request;
    }

    protected HttpSession getSession() {
        return request.getSession();
    }

    protected UserSessionBean getUser() {
        return (UserSessionBean) getSession().getAttribute(Constants.VOYAGEONE_USER_INFO);
    }

    protected String getLang() {
        return (String) getSession().getAttribute(Constants.VOYAGEONE_USER_LANG);
    }

    /**
     * 小型的辅助类，方便创建基于 Map 模拟的 Bean 对象
     */
    public class JsonObj extends HashMap<String, Object> {
        public JsonObj add(String name, Object value) {
            put(name, value);
            return this;
        }
    }
}