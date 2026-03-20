package com.acij.common.tld;

import java.io.Serializable;
import java.util.List;

public class ItemMenu implements Serializable {

	private static final long serialVersionUID = 1L;

	private String iconName;
	private String description;
	private String requestPath;
	private Boolean isLeaf;
	private List<ItemMenu> childrens;
	private Boolean isRoot;

	public ItemMenu() {
		isRoot = false;
	}
	
	public String getIconName() {
		return iconName;
	}

	public void setIconName(String iconName) {
		this.iconName = iconName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getRequestPath() {
		return requestPath;
	}

	public void setRequestPath(String requestPath) {
		this.requestPath = requestPath;
	}

	public List<ItemMenu> getChildrens() {
		return childrens;
	}

	public void setChildrens(List<ItemMenu> childrens) {
		this.childrens = childrens;
	}

	public Boolean getIsLeaf() {
		return isLeaf;
	}

	public void setIsLeaf(Boolean isLeaf) {
		this.isLeaf = isLeaf;
	}

	public Boolean getIsRoot() {
		return isRoot;
	}

	public void setIsRoot(Boolean isRoot) {
		this.isRoot = isRoot;
	}
}