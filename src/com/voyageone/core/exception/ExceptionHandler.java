package com.voyageone.core.exception;

import com.voyageone.base.exception.BusinessException;
import com.voyageone.base.exception.SystemException;
import com.voyageone.common.util.DateTimeUtil;
import com.voyageone.common.util.StringUtils;
import com.voyageone.core.Constants;
import com.voyageone.core.MessageConstants;
import com.voyageone.core.ajax.AjaxResponseBean;
import com.voyageone.core.init.MessageHelp;
import com.voyageone.core.modelbean.ExceptionLogBean;
import com.voyageone.core.modelbean.MessageInfoBean;
import com.voyageone.core.modelbean.UserSessionBean;
import com.voyageone.core.service.LogService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.io.StringWriter;

public class ExceptionHandler implements HandlerExceptionResolver {

    private static Log logger = LogFactory.getLog(ExceptionHandler.class);

    private HttpServletRequest request;
    private HttpServletResponse response;
    private Exception exception;
    private String token;

    @Autowired
    private LogService logService;

    public ModelAndView resolveException(HttpServletRequest request,
                                         HttpServletResponse response, Object handler, Exception exception) {

        this.request = request;
        this.response = response;
        this.exception = exception;

        try {
            HttpSession session = request.getSession(false);
            if (session != null) {
                this.token = (String) session.getAttribute(Constants.VOYAGEONE_USER_TOKEN);
            }
            // 业务异常记错误日志及堆栈信息，迁移到共通错误页面
            if (exception instanceof BusinessException) {
                String lang = (String) request.getSession().getAttribute(Constants.VOYAGEONE_USER_LANG);
                return catchBusinessException(lang);
            }

            // log4j打印出详细信息，包括堆栈信息
            logger.error(exception.getMessage(), exception);
            // 异常信息记录至数据库
            insertLogToDB();

            // 系统异常记错误日志及堆栈信息，迁移到共通错误页面
            if (exception instanceof SystemException) {
                return catchSystemException();

                // 其他未知异常
            } else {
                return catchDefault();
            }
        } catch (Exception e) {
            logger.error(e.getMessage(), e);

            return catchDefault();
        }
    }

    /**
     * 捕获业务异常
     */
    private ModelAndView catchBusinessException(String lang) {
        BusinessException exception = (BusinessException) this.exception;

        // 尝试根据信息获取指定的错误提示
        String key = exception.getCode() + "-" + lang;
        MessageInfoBean msg = MessageHelp.getMsgByLang(key);
        String[] info = exception.getInfo();
        return BusinessExceptionDeal(msg, info);
    }

    /**
     * 捕获系统异常处理
     */
    private ModelAndView catchSystemException() {
        SystemException exception = (SystemException) this.exception;

        // 尝试根据信息获取指定的错误提示
        String msg = exception.getMessage().split(Constants.EXCEPTION_MESSAGE_PREFIX)[0];

        return exceptionDeal(msg);
    }

    /**
     * 捕获其他异常处理
     */
    private ModelAndView catchDefault() {
        // 尝试根据信息获取指定的错误提示
        String msg = exception.getMessage().split(Constants.EXCEPTION_MESSAGE_PREFIX)[0];

        return exceptionDeal(msg);
    }

    /**
     * 业务异常时ajax返回处理
     */
    private ModelAndView BusinessExceptionDeal(MessageInfoBean msg, String... info) {
        AjaxResponseBean bean = new AjaxResponseBean();

        String msgInfo;
        int type = MessageConstants.MESSAGE_TYPE_EXCEPTION;

        if (msg == null) {

            msgInfo = "this msg_code is not exists";
        } else if (StringUtils.isEmpty(msg.getMessage())) {

            msgInfo = "this msg_code is not exists";
        } else {
            msgInfo = msg.getMessage();
            if (info != null && info.length > 0) {
                msgInfo = String.format(msgInfo, info);
            }
            type = msg.getMessageType();
        }

        bean.setResult(false, type, msgInfo);
        bean.setToken(token);

        bean.writeTo(request, response);

        return null;
    }

    /**
     * 业务以外异常时ajax返回处理
     */
    private ModelAndView exceptionDeal(String msg) {
        AjaxResponseBean bean = new AjaxResponseBean();
        bean.setResult(false, MessageConstants.MESSAGE_TYPE_EXCEPTION, msg);
        bean.setToken(token);

        bean.writeTo(request, response);

        return null;
    }

    private void insertLogToDB() {
        // 异常发生时间
        String dateTime = DateTimeUtil.getStringDateTime(DateTimeUtil.DATE_TIME_FORMAT_1);
        // 取得用户信息
        UserSessionBean user = (UserSessionBean) request.getSession().getAttribute(Constants.VOYAGEONE_USER_INFO);
        // 操作人
        String userName = "";
        if (user != null) {
            userName = user.getUserName();
        }

        // 请求URL
        String url = request.getServletPath();
        // 异常类型
        String type = exception.getClass().getName();
        // 堆栈信息
        // String stackInfo = getExceptionStack(exception);
        // 异常描述
        String message = exception.getMessage() == null ?
                "" : exception.getMessage().split(Constants.EXCEPTION_MESSAGE_PREFIX)[0];
        if (message != null && message.length() > Constants.EXCEPTION_MESSAGE_LENGTH) {
            message = message.substring(0, Constants.EXCEPTION_MESSAGE_LENGTH);
        }

        ExceptionLogBean exceptionBean = new ExceptionLogBean();
        exceptionBean.setDateTime(dateTime);
        exceptionBean.setExceptionType(type);
        exceptionBean.setDescription(message);
        exceptionBean.setUrl(url);
        exceptionBean.setUserName(userName);
        exceptionBean.setCreated(dateTime.split("\\.")[0]);

        // 异常信息记录至数据库
        logService.insertExceptionLog(exceptionBean);
    }

    /**
     * 获得异常堆栈信息
     */
    private String getExceptionStack(Exception e) {
        StringWriter sw = new StringWriter();
        try (PrintWriter pw = new PrintWriter(sw)) {
            e.printStackTrace(pw);
            return sw.toString();
        }
    }
}

