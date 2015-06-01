package com.voyageone.core.ajax;

import javax.servlet.http.HttpServletRequest;

public class AjaxUtil {
	public static boolean isAjaxRequest(HttpServletRequest request) {
        
        return request.getHeader("x-requested-with") != null
                && request.getHeader("x-requested-with").equalsIgnoreCase(
                        "XMLHttpRequest");
    }
}
