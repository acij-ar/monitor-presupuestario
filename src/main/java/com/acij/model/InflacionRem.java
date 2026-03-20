package com.acij.model;

import java.math.BigDecimal;

import com.acij.common.model.IdEntity;

public class InflacionRem extends IdEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private BigDecimal rem;

	public InflacionRem() {

	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public BigDecimal getRem() {
		return rem;
	}

	public void setRem(BigDecimal rem) {
		this.rem = rem;
	}

}
