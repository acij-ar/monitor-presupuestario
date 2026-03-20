package com.acij.tld;

import javax.servlet.jsp.JspTagException;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class ColumnWrapperTag extends BodyTagSupport implements Cloneable {

	private static final long serialVersionUID = 1L;

	public static final String MULTISELECT = "multiselect";

	public static final String STRING = "string";
	public static final String CUSTOM = "custom";
	public static final String DATE = "date";
	public static final String TIME = "time";
	public static final String DATETIME = "datetime";
	public static final String NUMBER = "number";
	public static final String DECIMAL = "decimal";
	public static final String MONEY = "money";
	public static final String DECIMAL4 = "decimal4";
	public static final String BOOLEAN = "boolean";
	public static final String CHECK = "check";
	public static final String ARRAY = "array";
	public static final String SEMAPHORE = "semaforo";
	public static final String ACTIONS = "actions";

	private String columnName;
	private String path;
	private Boolean sortable = true;
	private String className;
	private String type = STRING;
	private String align = "left";
	private String orderColumnName;
	private Boolean filtrable = false;
	private String sqlConverter = "";
	private Integer indexArray;
	private String render = "";
	private String width = "";
	private Integer wrapTo = 0; 

	public int doStartTag() throws JspTagException {
		try {
			ColumnWrapperTag column = (ColumnWrapperTag) this.clone();
			TableWrapperTag table = (TableWrapperTag) findAncestorWithClass(column, TableWrapperTag.class);
			table.addColumn(column);
		} catch (CloneNotSupportedException e) {
			e.printStackTrace();
		}

		return EVAL_BODY_BUFFERED;
	}

	public String getColumnName() {
		return columnName;
	}

	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Boolean getSortable() {
		return sortable;
	}

	public void setSortable(Boolean sortable) {
		this.sortable = sortable;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAlign() {
		return align;
	}

	public void setAlign(String align) {
		this.align = align;
	}

	public String getOrderColumnName() {
		return orderColumnName;
	}

	public void setOrderColumnName(String orderColumnName) {
		this.orderColumnName = orderColumnName;
	}

	public Boolean getFiltrable() {
		return filtrable;
	}

	public void setFiltrable(Boolean filtrable) {
		this.filtrable = filtrable;
	}

	public String getSqlConverter() {
		return sqlConverter;
	}

	public void setSqlConverter(String sqlConverter) {
		this.sqlConverter = sqlConverter;
	}

	public Integer getIndexArray() {
		return indexArray;
	}

	public void setIndexArray(Integer indexArray) {
		this.indexArray = indexArray;
	}

	public String getRender() {
		return render;
	}

	public void setRender(String render) {
		this.render = render;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public Integer getWrapTo() {
		return wrapTo;
	}

	public void setWrapTo(Integer wrapTo) {
		this.wrapTo = wrapTo;
	}

}