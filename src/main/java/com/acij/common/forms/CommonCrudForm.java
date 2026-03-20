package com.acij.common.forms;

public class CommonCrudForm<M> extends CommonForm {

	private static final long serialVersionUID = 1L;
	
	private M entity;

	public M getEntity() {
		return entity;
	}

	public void setEntity(M entity) {
		this.entity = entity;
	}
}
