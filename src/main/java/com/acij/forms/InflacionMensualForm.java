package com.acij.forms;

import java.util.List;

import com.acij.common.forms.CommonCrudForm;
import com.acij.common.model.IdLabelEntity;
import com.acij.model.InflacionMensual;

public class InflacionMensualForm extends CommonCrudForm<InflacionMensual> {

	private static final long serialVersionUID = 1L;

	private List<IdLabelEntity> meses;
	private Integer anio;
	private Long mes;

	public List<IdLabelEntity> getMeses() {
		return meses;
	}

	public void setMeses(List<IdLabelEntity> meses) {
		this.meses = meses;
	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public Long getMes() {
		return mes;
	}

	public void setMes(Long mes) {
		this.mes = mes;
	}

}
