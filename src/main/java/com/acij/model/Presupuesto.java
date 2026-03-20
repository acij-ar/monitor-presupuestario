package com.acij.model;

import com.acij.common.model.IdEntity;

public class Presupuesto extends IdEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private String fileReference;

	public Presupuesto() {

	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public String getFileReference() {
		return fileReference;
	}

	public void setFileReference(String fileReference) {
		this.fileReference = fileReference;
	}

}
