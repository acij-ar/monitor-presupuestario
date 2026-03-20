package com.acij.common.forms;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;

public class CommonForm implements Serializable {

	private static final long serialVersionUID = 1L;

	private String mode;

	private Boolean disableAll = false;
	private String columnSort;
	private List<String> allColumns;
	private String search;
	private List<CustomCommand> customCommands;
	private String sqlFilterColumns;

	private String toastMessage;
	private String toastIcon = "success";

	private Boolean saveLocalStorage;

	public String getCommands() {
		StringBuffer buff = new StringBuffer();
		if (customCommands != null) {
			for (Iterator<CustomCommand> it = customCommands.iterator(); it.hasNext();) {
				CustomCommand customCommand = it.next();
				buff.append(customCommand.getHtml());
				if (it.hasNext()) {
					buff.append("+");
				}
			}
		}

		return buff.toString();
	}

	public String getSqlSearch() {
		if (allColumns == null || allColumns.size() == 0 || search == null || search.length() == 0) {
			return "";
		}

		StringBuffer sql = new StringBuffer();
		for (Iterator<String> iterator = allColumns.iterator(); iterator.hasNext();) {
			String column = iterator.next();
			if (column != null && !"".equals(column)) {
				if (!"".equals(sql.toString())) {
					sql.append(" or ");
				}
				sql.append(" lower(" + column + "||'') like '%" + search.replaceAll("'", "").toLowerCase() + "%'");
			}
		}
		return " and (" + sql.toString() + ")";
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public Boolean getDisableAll() {
		return disableAll;
	}

	public void setDisableAll(Boolean disableAll) {
		this.disableAll = disableAll;
	}

	public String getColumnSort() {
		return columnSort;
	}

	public void setColumnSort(String columnSort) {
		this.columnSort = columnSort;
	}

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}

	public List<CustomCommand> getCustomCommands() {
		return customCommands;
	}

	public void setCustomCommands(List<CustomCommand> customCommands) {
		this.customCommands = customCommands;
	}

	public List<String> getAllColumns() {
		return allColumns;
	}

	public void setAllColumns(List<String> allColumns) {
		this.allColumns = allColumns;
	}

	public String getSqlFilterColumns() {
		return sqlFilterColumns;
	}

	public void setSqlFilterColumns(String sqlFilterColumns) {
		this.sqlFilterColumns = sqlFilterColumns;
	}

	public Boolean getSaveLocalStorage() {
		return saveLocalStorage;
	}

	public void setSaveLocalStorage(Boolean saveLocalStorage) {
		this.saveLocalStorage = saveLocalStorage;
	}

	public String getToastMessage() {
		return toastMessage;
	}

	public void setToastMessage(String toastMessage) {
		this.toastMessage = toastMessage;
	}

	public String getToastIcon() {
		return toastIcon;
	}

	public void setToastIcon(String toastIcon) {
		this.toastIcon = toastIcon;
	}

}