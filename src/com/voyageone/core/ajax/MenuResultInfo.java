/**
 * 
 */
package com.voyageone.core.ajax;

import java.util.List;

import com.voyageone.core.modelbean.MenuBean;

/**
 * @author jacky
 *
 */
public class MenuResultInfo {

	private List<MenuBean> menuList;
	
	private List<MenuBean> urlPermissionList;

	/**
	 * @return the menuList
	 */
	public List<MenuBean> getMenuList() {
		return menuList;
	}

	/**
	 * @param menuList the menuList to set
	 */
	public void setMenuList(List<MenuBean> menuList) {
		this.menuList = menuList;
	}

	/**
	 * @return the urlPermissionList
	 */
	public List<MenuBean> getUrlPermissionList() {
		return urlPermissionList;
	}

	/**
	 * @param urlPermissionList the urlPermissionList to set
	 */
	public void setUrlPermissionList(List<MenuBean> urlPermissionList) {
		this.urlPermissionList = urlPermissionList;
	}
	
}
