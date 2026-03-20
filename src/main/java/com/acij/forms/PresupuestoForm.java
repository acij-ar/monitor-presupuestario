package com.acij.forms;

import com.acij.common.forms.CommonCrudForm;
import com.acij.model.Presupuesto;

public class PresupuestoForm extends CommonCrudForm<Presupuesto> {

	private static final long serialVersionUID = 1L;

	private Integer anio;

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

}
