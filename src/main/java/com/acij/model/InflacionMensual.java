package com.acij.model;

import java.math.BigDecimal;

import com.acij.common.model.IdEntity;

public class InflacionMensual extends IdEntity {

	private static final long serialVersionUID = 1L;

	private Integer anio;
	private Integer mes;
	private BigDecimal inflacionMensual;
	private BigDecimal ipcAcumuladoConRem;

	private BigDecimal valorAjusteMensual;

	public InflacionMensual() {

	}

	public InflacionMensual(int anio, int mes, BigDecimal inflacionMensual) {
		this.anio = anio;
		this.mes = mes;
		this.inflacionMensual = inflacionMensual;
	}

	public String getMesDescripcion() {
		switch (this.mes) {
		case 1:
			return "Enero";
		case 2:
			return "Febrero";
		case 3:
			return "Marzo";
		case 4:
			return "Abril";
		case 5:
			return "Mayo";
		case 6:
			return "Junio";
		case 7:
			return "Julio";
		case 8:
			return "Agosto";
		case 9:
			return "Septiembre";
		case 10:
			return "Octubre";
		case 11:
			return "Noviembre";
		case 12:
			return "Diciembre" + "";
		}
		return "";
	}

	public Integer getAnio() {
		return anio;
	}

	public void setAnio(Integer anio) {
		this.anio = anio;
	}

	public Integer getMes() {
		return mes;
	}

	public void setMes(Integer mes) {
		this.mes = mes;
	}

	public BigDecimal getInflacionMensual() {
		return inflacionMensual;
	}

	public void setInflacionMensual(BigDecimal inflacionMensual) {
		this.inflacionMensual = inflacionMensual;
	}

	public BigDecimal getIpcAcumuladoConRem() {
		return ipcAcumuladoConRem;
	}

	public void setIpcAcumuladoConRem(BigDecimal ipcAcumuladoConRem) {
		this.ipcAcumuladoConRem = ipcAcumuladoConRem;
	}

	public BigDecimal getValorAjusteMensual() {
		return valorAjusteMensual;
	}

	public void setValorAjusteMensual(BigDecimal valorAjusteMensual) {
		this.valorAjusteMensual = valorAjusteMensual;
	}

}
