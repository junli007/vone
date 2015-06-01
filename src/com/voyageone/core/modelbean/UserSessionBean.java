package com.voyageone.core.modelbean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

public class UserSessionBean {

    /**
     * 用户Id
     */
    private int userId;

	/**
	 * 用户名
	 */
	private String userName;

	/**
	 * 登陆时间
	 */
	private String loginTime;

	/**
	 * 所属公司
	 */
	private CompanyBean selfCompany;

	/**
	 * 选择公司
	 */
	private CompanyBean selectCompany;

	/**
	 * 拥有权限公司
	 */
	private List<CompanyBean> permissionCompanies;

	/**
	 * property单位的权限
	 */
	private HashMap<String, PermissionBean> propertyPermissions;

	/**
	 * 当前所选公司的所有action权限
	 */
	private List<String> actionPermission;

	/**
	 * 当前所选公司的所有页面权限
	 */
	private List<String> pagePermission;

	/**
	 * 当前所选公司的页面权限及导航信息
	 */
	private List<PageNaviBean> pageNavi;

	/**
	 * 用户是否登陆
	 */
	private boolean isAuthenticated = false;

	/**
	 * 用户是否是超级用户
	 */
	private boolean isSuperUser = false;

	/**
	 * 菜单
	 */
	private List<MenuBean> userMenuList;

    /**
     * 时区
     */
    private int timeZone;

    /**
     * 所属仓库
     */
    private List<ChannelStoreBean> storeList;
    /**
     * 所属TO仓库
     */
    private List<ChannelStoreBean> storeToList;
    /**
     * 所属店铺
     */
    private List<ChannelShopBean> shopList;
    /**
     * 硬件配置
     */
    private List<UserHardwareConfigBean> hardwareConfig;

    /**
     * 所属店铺
     */
    private HashMap<String , ArrayList<UserConfigBean>> userConfig;

	/**
     *
	 * @return the userName
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * @param userName the userName to set
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * @return the loginTime
	 */
	public String getLoginTime() {
		return loginTime;
	}

	/**
	 * @param loginTime the loginTime to set
	 */
	public void setLoginTime(String loginTime) {
		this.loginTime = loginTime;
	}

	/**
	 * @return the selfCompany
	 */
	public CompanyBean getSelfCompany() {
		return selfCompany;
	}

	/**
	 * @param selfCompany the selfCompany to set
	 */
	public void setSelfCompany(CompanyBean selfCompany) {
		this.selfCompany = selfCompany;
	}

	/**
	 * @return the selectCompany
	 */
	public CompanyBean getSelectCompany() {
		return selectCompany;
	}

	/**
	 * @param selectCompany the selectCompany to set
	 */
	public void setSelectCompany(CompanyBean selectCompany) {
		this.selectCompany = selectCompany;
	}

	/**
	 * @return the permissionCompanies
	 */
	public List<CompanyBean> getPermissionCompanies() {
		return permissionCompanies;
	}

	/**
	 * @param permissionCompanies the permissionCompanies to set
	 */
	public void setPermissionCompanies(List<CompanyBean> permissionCompanies) {
		this.permissionCompanies = permissionCompanies;
	}

	/**
	 * @return the propertyPermissions
	 */
	public HashMap<String, PermissionBean> getPropertyPermissions() {
		return propertyPermissions;
	}

	/**
	 * @param propertyPermissions the propertyPermissions to set
	 */
	public void setPropertyPermissions(HashMap<String, PermissionBean> propertyPermissions) {
		this.propertyPermissions = propertyPermissions;
	}

	/**
	 * 返回用户所对应的ChannelList
	 * @return
	 */
	public List<String> getChannelList() {
		// 门店对应渠道列表
		List<String> order_channel_id = new ArrayList<String>();
		if (propertyPermissions != null) {
			Iterator<String> it = propertyPermissions.keySet().iterator();

			while (it.hasNext()) {
				order_channel_id.add(it.next());
			}
		}
		return order_channel_id;
	}
	/**
	 * @return the actionPermission
	 */
	public List<String> getActionPermission() {
		return actionPermission;
	}

	/**
	 * @param actionPermission the actionPermission to set
	 */
	public void setActionPermission(List<String> actionPermission) {
		this.actionPermission = actionPermission;
	}

	/**
	 * @return the pagePermission
	 */
	public List<String> getPagePermission() {
		return pagePermission;
	}

	/**
	 * @param pagePermission the pagePermission to set
	 */
	public void setPagePermission(List<String> pagePermission) {
		this.pagePermission = pagePermission;
	}

	/**
	 * @return the isAuthenticated
	 */
	public boolean isAuthenticated() {
		return isAuthenticated;
	}

	/**
	 * @param isAuthenticated the isAuthenticated to set
	 */
	public void setIsAuthenticated() {
		this.isAuthenticated = true;
	}

	/**
	 * @param userMenuList the userMenuList to set
	 */
	public void setUserMenuList(List<MenuBean> userMenuList) {
		this.userMenuList = userMenuList;
	}

	/**
	 * @return the userMenuList
	 */
	public List<MenuBean> getUserMenuList() {
		return userMenuList;
	}

	/**
	 * @return the isSuperUser
	 */
	public boolean isSuperUser() {
		return isSuperUser;
	}

	/**
	 * @param isSuperUser the isSuperUser to set
	 */
	public void setIsSuperUser() {
		this.isSuperUser = true;
	}

	/**
	 * @return the pageNavi
	 */
	public List<PageNaviBean> getPageNavi() {
		return pageNavi;
	}

	/**
	 * @param pageNavi the pageNavi to set
	 */
	public void setPageNavi(List<PageNaviBean> pageNavi) {
		this.pageNavi = pageNavi;
	}

    public int getTimeZone() {
        return timeZone;
    }

    public void setTimeZone(int timeZone) {
        this.timeZone = timeZone;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public void setAuthenticated(boolean isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
    }

    public void setSuperUser(boolean isSuperUser) {
        this.isSuperUser = isSuperUser;
    }

    public List<ChannelStoreBean> getStoreList() {
        return storeList;
    }

    public void setStoreList(List<ChannelStoreBean> storeList) {
        this.storeList = storeList;
    }

    public List<ChannelShopBean> getShopList() {
        return shopList;
    }

    public void setShopList(List<ChannelShopBean> shopList) {
        this.shopList = shopList;
    }

    public HashMap<String, ArrayList<UserConfigBean>> getUserConfig() {
        return userConfig;
    }

    public void setUserConfig(HashMap<String, ArrayList<UserConfigBean>> userConfig) {
        this.userConfig = userConfig;
    }

    public List<ChannelStoreBean> getStoreToList() {
        return storeToList;
    }

    public void setStoreToList(List<ChannelStoreBean> storeToList) {
        this.storeToList = storeToList;
    }

    public List<UserHardwareConfigBean> getHardwareConfig() {
        return hardwareConfig;
    }

    public void setHardwareConfig(List<UserHardwareConfigBean> hardwareConfig) {
        this.hardwareConfig = hardwareConfig;
    }
}
