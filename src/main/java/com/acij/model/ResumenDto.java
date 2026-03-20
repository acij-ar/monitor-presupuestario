package com.acij.model;

import java.math.BigDecimal;

import com.acij.common.model.Entity;

public class ResumenDto extends Entity {

	private static final long serialVersionUID = 1L;

	private String anio = "";
	private String jurisdiccion = "";
	private String entidad = "";
	private String programa = "";
	private String actividad = "";

	private BigDecimal presupuestoAño;
	private BigDecimal presupuestoJurisdiccion;
	private BigDecimal presupuestoEntidad;
	private BigDecimal presupuestoPrograma;
	private BigDecimal presupuestoActividad;

	private String finalidad = "";
	private String funcion = "";

	private BigDecimal presupuestoFinalidad;
	private BigDecimal presupuestoFuncion;

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

	public BigDecimal getPresupuestoAño() {
		return presupuestoAño;
	}

	public void setPresupuestoAño(BigDecimal presupuestoAño) {
		this.presupuestoAño = presupuestoAño;
	}

	public BigDecimal getPresupuestoJurisdiccion() {
		return presupuestoJurisdiccion;
	}

	public void setPresupuestoJurisdiccion(BigDecimal presupuestoJurisdiccion) {
		this.presupuestoJurisdiccion = presupuestoJurisdiccion;
	}

	public BigDecimal getPresupuestoEntidad() {
		return presupuestoEntidad;
	}

	public void setPresupuestoEntidad(BigDecimal presupuestoEntidad) {
		this.presupuestoEntidad = presupuestoEntidad;
	}

	public BigDecimal getPresupuestoPrograma() {
		return presupuestoPrograma;
	}

	public void setPresupuestoPrograma(BigDecimal presupuestoPrograma) {
		this.presupuestoPrograma = presupuestoPrograma;
	}

	public BigDecimal getPresupuestoActividad() {
		return presupuestoActividad;
	}

	public void setPresupuestoActividad(BigDecimal presupuestoActividad) {
		this.presupuestoActividad = presupuestoActividad;
	}

	public String getFinalidad() {
		return finalidad;
	}

	public void setFinalidad(String finalidad) {
		this.finalidad = finalidad;
	}

	public String getFuncion() {
		return funcion;
	}

	public void setFuncion(String funcion) {
		this.funcion = funcion;
	}

	public BigDecimal getPresupuestoFinalidad() {
		return presupuestoFinalidad;
	}

	public void setPresupuestoFinalidad(BigDecimal presupuestoFinalidad) {
		this.presupuestoFinalidad = presupuestoFinalidad;
	}

	public BigDecimal getPresupuestoFuncion() {
		return presupuestoFuncion;
	}

	public void setPresupuestoFuncion(BigDecimal presupuestoFuncion) {
		this.presupuestoFuncion = presupuestoFuncion;
	}

}
