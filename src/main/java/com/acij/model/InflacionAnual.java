package com.acij.model;

import java.math.BigDecimal;

import com.acij.common.model.IdEntity;

public class InflacionAnual extends IdEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private BigDecimal inflacionAnual;
	private BigDecimal rem = new BigDecimal(0);
	private BigDecimal ipcPromedio;
	private BigDecimal valorAjustePromedio;
	private BigDecimal ipcAcumulado;
	private BigDecimal valorAjusteAcumulado;

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public BigDecimal getInflacionAnual() {
		return inflacionAnual;
	}

	public void setInflacionAnual(BigDecimal inflacionAnual) {
		this.inflacionAnual = inflacionAnual;
	}

	public BigDecimal getRem() {
		return rem;
	}

	public void setRem(BigDecimal rem) {
		this.rem = rem;
	}

	public BigDecimal getIpcPromedio() {
		return ipcPromedio;
	}

	public void setIpcPromedio(BigDecimal ipcPromedio) {
		this.ipcPromedio = ipcPromedio;
	}

	public BigDecimal getValorAjustePromedio() {
		return valorAjustePromedio;
	}

	public void setValorAjustePromedio(BigDecimal valorAjustePromedio) {
		this.valorAjustePromedio = valorAjustePromedio;
	}

	public BigDecimal getIpcAcumulado() {
		return ipcAcumulado;
	}

	public void setIpcAcumulado(BigDecimal ipcAcumulado) {
		this.ipcAcumulado = ipcAcumulado;
	}

	public BigDecimal getValorAjusteAcumulado() {
		return valorAjusteAcumulado;
	}

	public void setValorAjusteAcumulado(BigDecimal valorAjusteAcumulado) {
		this.valorAjusteAcumulado = valorAjusteAcumulado;
	}

}
