package com.acij.forms;

import com.acij.common.forms.CommonCrudForm;
import com.acij.model.InflacionRem;

public class InflacionRemForm extends CommonCrudForm<InflacionRem> {

	private static final long serialVersionUID = 1L;

	private Integer anio;

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

}
