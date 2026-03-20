package com.acij.model;

import java.math.BigDecimal;

import com.acij.helpers.BigDecimalField;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvCustomBindByName;

public class LineaPresupuesto {

	@CsvBindByName(column = "impacto_presupuestario_anio")
	private Integer impactoPresupuestarioAnio;

	@CsvBindByName(column = "impacto_presupuestario_mes")
	private Integer impactoPresupuestarioMes;

	@CsvBindByName(column = "jurisdiccion_id")
	private Long jurisdiccionId;

	@CsvBindByName(column = "jurisdiccion_desc")
	private String jurisdiccionDescripcion;

	@CsvBindByName(column = "subjurisdiccion_id")
	private Long subjurisdiccionId;

	@CsvBindByName(column = "subjurisdiccion_desc")
	private String subjurisdiccionDescripcion;

	@CsvBindByName(column = "entidad_id")
	private Long entidadId;

	@CsvBindByName(column = "entidad_desc")
	private String entidadDescripcion;

	@CsvBindByName(column = "servicio_id")
	private Long servicioId;

	@CsvBindByName(column = "servicio_desc")
	private String servicioDescripcion;

	@CsvBindByName(column = "programa_id")
	private Long programaId;

	@CsvBindByName(column = "programa_desc")
	private String programaDescripcion;

	@CsvBindByName(column = "subprograma_id")
	private Long subprogramaId;

	@CsvBindByName(column = "subprograma_desc")
	private String subprogramaDescripcion;

	@CsvBindByName(column = "proyecto_id")
	private Long proyectoId;

	@CsvBindByName(column = "proyecto_desc")
	private String proyectoDescripcion;

	@CsvBindByName(column = "actividad_id")
	private Long actividadId;

	@CsvBindByName(column = "actividad_desc")
	private String actividadDescripcion;

	@CsvBindByName(column = "finalidad_id")
	private Long finalidadId;

	@CsvBindByName(column = "finalidad_desc")
	private String finalidadDescripcion;

	@CsvBindByName(column = "funcion_id")
	private Long funcionId;

	@CsvBindByName(column = "funcion_desc")
	private String funcionDescripcion;

	@CsvCustomBindByName(column = "credito_presupuestado", converter = BigDecimalField.class)
	private BigDecimal creditoPresupuestado;

	@CsvCustomBindByName(column = "credito_vigente", converter = BigDecimalField.class)
	private BigDecimal creditoVigente;

	@CsvCustomBindByName(column = "credito_devengado", converter = BigDecimalField.class)
	private BigDecimal creditoDevengado;

	@CsvCustomBindByName(column = "credito_pagado", converter = BigDecimalField.class)
	private BigDecimal creditoPagado;

	@CsvBindByName(column = "ultima_actualizacion_fecha")
	private String ultimaActualizacionFecha;

	public Integer getImpactoPresupuestarioAnio() {
		return impactoPresupuestarioAnio;
	}

	public void setImpactoPresupuestarioAnio(Integer impactoPresupuestarioAnio) {
		this.impactoPresupuestarioAnio = impactoPresupuestarioAnio;
	}

	public Integer getImpactoPresupuestarioMes() {
		return impactoPresupuestarioMes;
	}

	public void setImpactoPresupuestarioMes(Integer impactoPresupuestarioMes) {
		this.impactoPresupuestarioMes = impactoPresupuestarioMes;
	}

	public Long getJurisdiccionId() {
		return jurisdiccionId;
	}

	public void setJurisdiccionId(Long jurisdiccionId) {
		this.jurisdiccionId = jurisdiccionId;
	}

	public String getJurisdiccionDescripcion() {
		return jurisdiccionDescripcion;
	}

	public void setJurisdiccionDescripcion(String jurisdiccionDescripcion) {
		this.jurisdiccionDescripcion = jurisdiccionDescripcion;
	}

	public Long getEntidadId() {
		return entidadId;
	}

	public void setEntidadId(Long entidadId) {
		this.entidadId = entidadId;
	}

	public String getEntidadDescripcion() {
		return entidadDescripcion;
	}

	public void setEntidadDescripcion(String entidadDescripcion) {
		this.entidadDescripcion = entidadDescripcion;
	}

	public Long getProgramaId() {
		return programaId;
	}

	public void setProgramaId(Long programaId) {
		this.programaId = programaId;
	}

	public String getProgramaDescripcion() {
		return programaDescripcion;
	}

	public void setProgramaDescripcion(String programaDescripcion) {
		this.programaDescripcion = programaDescripcion;
	}

	public Long getActividadId() {
		return actividadId;
	}

	public void setActividadId(Long actividadId) {
		this.actividadId = actividadId;
	}

	public String getActividadDescripcion() {
		return actividadDescripcion;
	}

	public void setActividadDescripcion(String actividadDescripcion) {
		this.actividadDescripcion = actividadDescripcion;
	}

	public BigDecimal getCreditoPresupuestado() {
		return creditoPresupuestado;
	}

	public void setCreditoPresupuestado(BigDecimal creditoPresupuestado) {
		this.creditoPresupuestado = creditoPresupuestado;
	}

	public BigDecimal getCreditoVigente() {
		return creditoVigente;
	}

	public void setCreditoVigente(BigDecimal creditoVigente) {
		this.creditoVigente = creditoVigente;
	}

	public BigDecimal getCreditoDevengado() {
		return creditoDevengado;
	}

	public void setCreditoDevengado(BigDecimal creditoDevengado) {
		this.creditoDevengado = creditoDevengado;
	}

	public BigDecimal getCreditoPagado() {
		return creditoPagado;
	}

	public void setCreditoPagado(BigDecimal creditoPagado) {
		this.creditoPagado = creditoPagado;
	}

	public String getUltimaActualizacionFecha() {
		return ultimaActualizacionFecha;
	}

	public void setUltimaActualizacionFecha(String ultimaActualizacionFecha) {
		this.ultimaActualizacionFecha = ultimaActualizacionFecha;
	}

	public Long getFinalidadId() {
		return finalidadId;
	}

	public void setFinalidadId(Long finalidadId) {
		this.finalidadId = finalidadId;
	}

	public String getFinalidadDescripcion() {
		return finalidadDescripcion;
	}

	public void setFinalidadDescripcion(String finalidadDescripcion) {
		this.finalidadDescripcion = finalidadDescripcion;
	}

	public Long getFuncionId() {
		return funcionId;
	}

	public void setFuncionId(Long funcionId) {
		this.funcionId = funcionId;
	}

	public String getFuncionDescripcion() {
		return funcionDescripcion;
	}

	public void setFuncionDescripcion(String funcionDescripcion) {
		this.funcionDescripcion = funcionDescripcion;
	}

	public Long getProyectoId() {
		return proyectoId;
	}

	public void setProyectoId(Long proyectoId) {
		this.proyectoId = proyectoId;
	}

	public String getProyectoDescripcion() {
		return proyectoDescripcion;
	}

	public void setProyectoDescripcion(String proyectoDescripcion) {
		this.proyectoDescripcion = proyectoDescripcion;
	}

	public Long getSubjurisdiccionId() {
		return subjurisdiccionId;
	}

	public void setSubjurisdiccionId(Long subjurisdiccionId) {
		this.subjurisdiccionId = subjurisdiccionId;
	}

	public String getSubjurisdiccionDescripcion() {
		return subjurisdiccionDescripcion;
	}

	public void setSubjurisdiccionDescripcion(String subjurisdiccionDescripcion) {
		this.subjurisdiccionDescripcion = subjurisdiccionDescripcion;
	}

	public Long getSubprogramaId() {
		return subprogramaId;
	}

	public void setSubprogramaId(Long subprogramaId) {
		this.subprogramaId = subprogramaId;
	}

	public String getSubprogramaDescripcion() {
		return subprogramaDescripcion;
	}

	public void setSubprogramaDescripcion(String subprogramaDescripcion) {
		this.subprogramaDescripcion = subprogramaDescripcion;
	}

	public Long getServicioId() {
		return servicioId;
	}

	public void setServicioId(Long servicioId) {
		this.servicioId = servicioId;
	}

	public String getServicioDescripcion() {
		return servicioDescripcion;
	}

	public void setServicioDescripcion(String servicioDescripcion) {
		this.servicioDescripcion = servicioDescripcion;
	}

}
