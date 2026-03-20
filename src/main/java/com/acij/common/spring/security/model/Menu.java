package com.acij.common.spring.security.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Menu implements Serializable {

	private static final long serialVersionUID = 1L;

	private List<Permiso> permisos = new ArrayList<Permiso>();

	public List<Permiso> getPermisos() {
		return permisos;
	}

	public void setPermisos(List<Permiso> permisos) {
		this.permisos = permisos;
	}

}
