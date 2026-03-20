package com.acij.common.spring.security.model;

import java.util.List;

import com.acij.common.model.IdLabelEntity;

public class Grupo extends IdLabelEntity {
	
	private static final long serialVersionUID = 1L;

	private List<Permiso> pantallas;

	public List<Permiso> getPantallas() {
		return pantallas;
	}

	public void setPantallas(List<Permiso> pantallas) {
		this.pantallas = pantallas;
	}
}