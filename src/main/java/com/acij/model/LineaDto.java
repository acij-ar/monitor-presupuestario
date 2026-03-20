package com.acij.model;

import java.math.BigDecimal;

import com.acij.common.model.Entity;

public class LineaDto extends Entity {

	private String anio;
	private String jurisdiccion;
	private String entidad;
	private String programa;
	private String actividad;
	private String funcion;
	private String finalidad;
	private BigDecimal monto;

	private BigDecimal inicial;
	private BigDecimal vigente;
	private BigDecimal devengado;
	private BigDecimal ejecutado;

	public String getAnio() {
		return anio;
	}

	public void setAnio(String anio) {
		this.anio = anio;
	}

	public String getJurisdiccion() {
		return jurisdiccion;
	}

	public void setJurisdiccion(String jurisdiccion) {
		this.jurisdiccion = jurisdiccion;
	}

	public String getEntidad() {
		return entidad;
	}

	public void setEntidad(String entidad) {
		this.entidad = entidad;
	}

	public String getPrograma() {
		return programa;
	}

	public void setPrograma(String programa) {
		this.programa = programa;
	}

	public String getActividad() {
		return actividad;
	}

	public void setActividad(String actividad) {
		this.actividad = actividad;
	}

	public BigDecimal getMonto() {
		return monto;
	}

	public void setMonto(BigDecimal monto) {
		this.monto = monto;
	}

	public BigDecimal getInicial() {
		return inicial;
	}

	public void setInicial(BigDecimal inicial) {
		this.inicial = inicial;
	}

	public BigDecimal getVigente() {
		return vigente;
	}

	public void setVigente(BigDecimal vigente) {
		this.vigente = vigente;
	}

	public BigDecimal getDevengado() {
		return devengado;
	}

	public void setDevengado(BigDecimal devengado) {
		this.devengado = devengado;
	}

	public BigDecimal getEjecutado() {
		return ejecutado;
	}

	public void setEjecutado(BigDecimal ejecutado) {
		this.ejecutado = ejecutado;
	}

	public String getFuncion() {
		return funcion;
	}

	public void setFuncion(String funcion) {
		this.funcion = funcion;
	}

	public String getFinalidad() {
		return finalidad;
	}

	public void setFinalidad(String finalidad) {
		this.finalidad = finalidad;
	}

}
