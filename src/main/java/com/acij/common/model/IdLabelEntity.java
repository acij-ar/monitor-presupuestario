package com.acij.common.model;

public class IdLabelEntity extends IdEntity {

	private static final long serialVersionUID = 1L;

	private String descripcion;

	public IdLabelEntity() {
	}
	
	public IdLabelEntity(Long id) {
		super(id);
	}

	public IdLabelEntity(Long id, String descripcion) {
		super.setId(id);
		this.descripcion = descripcion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}